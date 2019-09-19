
const  React  = require('react');

const { renderToString}  = require( 'react-dom/server');
const { matchRoutes } =require( "react-router-config");

const http = require('http');

import './css/index.scss';

//组件
class Index extends React.Component{
    constructor(props){
        super(props);
    }


    static async  getInitialProps() {
        const fetch1 =await fetch('/xxx.com/a');
        const fetch2 = await fetch('/xxx.com/b');

        return {
            res:[fetch1,fetch2]
        }
    }

    render(){
        return <h1>{this.props.data.title}</h1>
    }
}
 
//模拟数据的获取
const fetch = function () {
    return {
        title:'react ssr',
        data:[]
    }
}


class Detail extends React.Component {

    render() {
        return <div>detail</div>
    }
}

class Home extends React.Component {

    render() {
        return <div>home</div>
    }
}


const routes = [

    {
        path: "/",
        exact: true,
        component: Index
    },
    {
        path: '/detail', exact: true,
        component: Detail,
    },
    {
        path: '/home', exact: true,
        component: Home
    }

];



//node server 
http.createServer((req, res) => {
    
        const url = req.url;
        if(url.indexOf('.')>-1) { res.end(''); return false;}

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        console.log(url);
       
    
        const branch =  matchRoutes(routes,url);
        const Component = branch[0].route.component;

        const data = Component.getInitialProps(branch[0].match.params);

        const html = renderToString(<Component data={data}/>);

        const propsData = `<textarea style="display:none" id="render-data-BOX">${JSON.stringify(data)}</textarea>`;

        // 渲染文件 index.ejs
        ejs.renderFile('./index.html', {
            htmlContent: html,  
            propsData
        },  // 渲染的数据key: 对应到了ejs中的index
            (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    res.end(data);
                }
            })

 }).listen(8080);