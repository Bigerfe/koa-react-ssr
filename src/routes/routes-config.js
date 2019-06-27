/**
 * 路由按需加载配置 TODO:废弃
 */


export default [
    {
        path:'/',
        getComponent(location,cb){
            return import(/* webpackChunkName: 'index' */'../../src/page/index').then(({
                default: _
            }) => {
              console.log('index ok');
              console.log(_);

            }).catch(error => 'An error occurred while loading the component');
        }

    },
    {
        path: '/detail',
        getComponent(location, cb) {
            return import(/* webpackChunkName: 'index' */'../../src/page/detail').then(({
                default: _
            }) => {
                console.log('detail ok');
                console.log(_);

            }).catch(error => 'An error occurred while loading the component');
        }

    }
]
