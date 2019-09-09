module.exports = {
    title: 'Krs (koa2+react+ssr) 服务端渲染',
    description: '最清凉的react ssr 服务端渲染开发骨架',
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
                    title: 'krs指南',
                    collapsable: false,
                    children: ['', 'fast', 'config','principle','deploy','faq']
                }
            ]
        }
    }
}