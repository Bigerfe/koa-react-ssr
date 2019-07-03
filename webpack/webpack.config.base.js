const path = require('path');
const glob = require('glob');
const config = require('../config');
const webpack = require('webpack');
const resolvePath = p => path.resolve(__dirname, p);



const isONEntry = true;

const getEntryName = (path) => {
    return path.match(/\/src\/(.*)\.js/)[1];
}

const getMoreEntrys = () => {
    const files = glob.sync(resolvePath('../src/page/*/*.js'));
    const map = {};
    files.forEach((item) => {
        map[getEntryName(item)] = item;
    });

    return map;
}


const getOneEntrys = () => {
    //const files = glob.sync(resolvePath('/src/page/*/*.js'));
    // return {
    //     main: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8809',
    //         'webpack/hot/only-dev-server', resolvePath('../src/app/index.js')]
    // };
    return {
        main: ['react-hot-loader/patch', resolvePath('../src/app/index.js')]
    };
}

const getEntrys = () => {
    if (isONEntry) return getOneEntrys();
    return getMoreEntrys();
}

const getOutput = () => {
    if (isONEntry) {
        return {
            //filename: '[name].[hash:8].js',
            filename: 'client/js/[name].js',
            chunkFilename: 'client/js/[name].js',
            path: resolvePath('../dist/static'),
            publicPath: config.jsCdnHost
        }
    }
    return {
        filename: 'js/[name].[chunkhash:8].js',
        path: resolvePath('../dist/static'),
        publicPath: config.jsCdnHost
    }
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