export default [
    {
        name:'系统设置',
        id:'100',
        child:[
            {name:'网站信息',link:'/websiteinfo',id:1},
            { name: '字段管理', link: '/detail',id:2 },
            { name: '更新缓存', link: '/list',id:3 }
        ]
    },
    {
        name: '栏目管理' ,id: '101',
        child: [
            { name: '网站信息', link: '/index', id: 1 },
            { name: '字段管理', link: '/detail', id: 2 },
            { name: '更新缓存', link: '/list', id: 3 }
        ]
    },
    {
        name: '信息管理', id: '102',
        child: [
            { name: '网站信息', link: '/index', id: 1 },
            { name: '字段管理', link: '/detail', id: 2 },
            { name: '更新缓存', link: '/list', id: 3 }
        ]
    },
     {
         name: '模型管理', id: '103',
         child: [
             { name: '网站信息', link: '/index', id: 1 },
             { name: '字段管理', link: '/detail', id: 2 },
             { name: '更新缓存', link: '/list', id: 3 }
         ]

    }

]