import React from 'react';
import { renderToString, renderToStaticMarkup, renderToNodeStream } from 'react-dom/server';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 200
        }
    }
    clickHandler() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <div>helo，im server.
        {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => <p key={index}>文章标题:{item}</p>)
            }
            <p>当前 count:{this.state.count}</p>
            <button onClick={this.clickHandler}>count+1</button>
        </div>
    }
}

const html = () => {
    return `<!DOCTYPE html><html><head><title>Hello HomePage</title><meta http-eauiv="content-type" content="text/html;charset=UTF-8"></head><body>
      <div id="rootEle">${renderToString(<Index />)}</div>
    </body>
     </html>
     <script type="text/javascript" src="http://10.70.74.186:8809/client/js/main.js"></script></body>

     `;
}


export default async (ctx) => {
    ctx.set('Content-Type', 'text/html;charset=UTF-8');
    ctx.body = html();
}