module.exports = {
    title: 'zz.js - react ssr 开发骨架',
    description: '轻量易用，基于 koa2 的 react ssr 服务端渲染开发骨架',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/png", href: `https://raw.githubusercontent.com/Bigerfe/koa-react-ssr/v1.2/docs/imgs/sss-head.png` }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/zh/guide/' },
            { text: '关于', link: '/about/' },
            { text: 'GitHub', link: 'https://github.com/Bigerfe/koa-react-ssr' }
        ],
        sidebar: {
            '/about/': [{
                title:'关于',
                collapsable:true,
                children:['']
             }  
            ],
            '/zh/guide/':[
                {
                    title: 'zz指南',
                    collapsable: false,
                    children: ['', 'fast', 'config','demo','principle','deploy','faq']
                }
            ]
        }
    }
}