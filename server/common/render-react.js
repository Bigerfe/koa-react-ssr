import React from 'react';
import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';
import matchComponent from './match-component';
import Provider from '../../src/app/provider';

const html = (html) => {
    return `<!DOCTYPE html><html><head><title>Hello HomePage</title><meta http-eauiv="content-type" content="text/html;charset=UTF-8"></head><body>
      <div id="rootEle">${html}</div>
    </body>
     </html>
    <script type="text/javascript" src="http://10.70.74.186:8809/client/js/main.js"></script>
         <script charset="utf-8" src="http://10.70.74.186:8809/client/js/vendors~chunk-detail~chunk-index~chunk-websiteinfo.js"></script>
<script charset="utf-8" src="http://10.70.74.186:8809/client/js/chunk-detail.js"></script>
     </body>
     `;
}


const getComHtml = (COM)=>{
    return renderToString(<Provider><COM/></Provider>);
}

//     <script type="text/javascript" src="http://10.70.74.186:8809/client/js/chunk-detail.js"></script>

export default async (ctx) => {

    ctx.set('Content-Type', 'text/html;charset=UTF-8');

    let path = '/detail';

    const routeMatch = await matchComponent(path);
    const htmlstr = getComHtml(routeMatch.component);

    ctx.body = html(htmlstr);
}