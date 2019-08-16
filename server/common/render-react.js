import React from 'react';
import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';
import matchComponent from './match-component';

const html = (COM,props) => {
    return `<!DOCTYPE html><html><head><title>Hello HomePage</title><meta http-eauiv="content-type" content="text/html;charset=UTF-8"></head><body>
      <div id="rootEle">${renderToString(<COM {...props}/>)}</div>
    </body>
     </html>
    <script type="text/javascript" src="http://10.70.74.186:8809/client/js/main.js"></script>

     </body>
     `;
}


//     <script type="text/javascript" src="http://10.70.74.186:8809/client/js/chunk-detail.js"></script>

export default async (ctx) => {

    ctx.set('Content-Type', 'text/html;charset=UTF-8');

    let path = '/detail';

    const routeMatch = await matchComponent(path);

    ctx.body = html(routeMatch.component,{
        list:[{
            id:1,
            title:'abc'
        },{
            id:2,
            title:'ccc'
        }
    ]
    });
}