const path = require('path');
const glob = require('glob');
const config = require('./config');
const webpack = require('webpack');
const resolvePath = p => path.resolve(__dirname, p);
const envUtils = require('./scripts/env-utils');

//表示入口唯一
const isONEntry = true;

const getEntryName = (path) => {
    return path.match(/\/src\/(.*)\.js/)[1];
}

//获得目录的所有入口 目前未使用
const getAllEntrys = () => {
    const files = glob.sync(resolvePath('../src/page/*/*.js'));
    const map = {};
    files.forEach((item) => {
        map[getEntryName(item)] = item;
    });

    return map;
}

const getOneEntrys = () => {
    const entry = [resolvePath('../src/app/index.js')];
    if(envUtils.isDev()){
        entry.unshift('react-hot-loader/patch');
    }
    return {
        main: entry
    };
}

const getEntrys = () => {
    if (isONEntry) return getOneEntrys();
    return getAllEntrys();
}

const getOutput = () => {
    //单入口
    if (isONEntry) {
        const opt  = {
            path: resolvePath('../dist/static'),
            publicPath: config.jsCdnHost
        }
        if(envUtils.isPro()){
            Object.assign(opt, {
                filename: 'client/js/[name].[chunkhash:8].js',
                chunkFilename: 'client/js/[name].[chunkhash:8].js',
            });
        }else{
            Object.assign(opt, {
                filename: 'client/js/[name].js',
                chunkFilename: 'client/js/[name].js',
            });
        }
        return opt;
      
    }
    return  null;//现在用不到
}

module.exports = {
    entry: getEntrys(),
    output: getOutput(),
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: "babel-loader"
            }]
        }]
    },
    plugins:[]
}