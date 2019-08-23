/**
 * 需要封装一个请求模块
 * 可支持 post - form|json
 * 支持 get 的请求
 *
 * 可以根据 process.env.IS_DEV 判断是否是线上环境
 * 
 * 接口api 路径规则
 * 
 * _api/article-info/get-detail-content : _api(固定前缀)/controller name/action name  路径不允许出现大写
 * 
 */
import utils from '../module/utils';
import hostConfig from '../../config/host-config'
import fetch from 'node-fetch';

const requestHost = hostConfig.reqApiUrlHost;

const getFetchInstance = ()=>{
    return fetch || window.fetch;
}


/**
 * 
 * @param {获得请求的 url 地址} url 
 */
const getReqUrl = (url) => {
    return requestHost + url + '?t=' + (+new Date())+'&';
}

const REQ_CONTENT_TYPE = {
    FORM: 'form',
    JSON: 'json',
    FILE:'fupload'
}

const REQ_METHOD = {
    GET: 'GET',
    POST: 'POST'
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

const doRequest = (url, opt) => {
    if (!url) throw Error('fetch url is null');
    //console.log(opt);
    url = getReqUrl(url);
    const config = {
        method: opt.method,
        headers: opt.headers,
        credentials:'include'
    }
    if (opt.method === REQ_METHOD.POST && opt.contentType === REQ_CONTENT_TYPE.JSON) {
        config.body = JSON.stringify(opt.data || {}); //发送 json
    } else if (opt.method === REQ_METHOD.POST && opt.contentType === REQ_CONTENT_TYPE.FORM) {
        config.body = utils.querySerialize(opt.data); //发送 form 表单
        //console.log('config.body');
        //console.log(config.body);
    } else {
        if (opt.method === REQ_METHOD.GET) {
            url = url + utils.querySerialize(opt.data); //走 get
        }
        else if(opt.contentType ===  REQ_CONTENT_TYPE.FILE){
            config.body = opt.data;
        }
    }

    console.log(url,'fetch 执行了');
  
    let promise = fetch(url,config).then(checkStatus)
    .then(parseJSON).then(res=>{
        return res;
    })
    .catch(error=>{
        console.log('request failed', error)
    });

    return promise;
}


export default {
    get:   (url, opt) => {
        opt.method = 'GET';
        opt.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return doRequest(url, opt);
    },
    postForm:   (url, opt) => {
        opt.method = 'POST';
        opt.contentType = REQ_CONTENT_TYPE.FORM;
        opt.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return doRequest(url, opt);

    },
    postJson:   (url, opt) => {
        opt.method = 'POST';
        opt.contentType = REQ_CONTENT_TYPE.JSON;
        opt.headers = {
            'Content-Type': 'application/json'
        }
        return doRequest(url, opt);
    },
    //目前只支持单文件上传
    uploadFile: async (url, fileInputElements=[]) => {
        const opt = {
            contentType: REQ_CONTENT_TYPE.FILE,
            method:'POST'
        };
        let formData = new FormData();
        formData.append('name',100);
        formData.append('clientFile', fileInputElements[0].files[0])
        opt.data = formData;

        return doRequest(url, opt);

    },
    multipleFetch:  (...promises)=>{
        if(!promises){
            return null;
        }

        return Promise.all(promises).then(dataArr=>{
            return dataArr;//返回数组（数组内包含各个接口的返回结果）
        });
    }
}