const React = require('react');

const { renderToString } = require('react-dom/server');

const http = require('http');

//模拟数据的获取
const fetchData = function () {
    return {
        list: [{
            name: '包子',
            num: 10
        },
        {
            name: '饺子',
            num: 200
        }, {
            name: '馒头',
            num: 1
        }
        ]
    }
}

//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data}  = this.props;
        return <div>
        
        {
            data&&data.list.map(item=>{
                return <div>{item.name}有{item.num}个</div>
            })
        }

        </div>
    }
}


//服务
http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const data = fetchData();

        const html = renderToString(<Index data={data} />);
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>传统 ssr</title>
</head>
<body>
    <div id="root">
       ${html}
    </div>
</body>
</html>
</body>
`);

    }
).listen(9001);

console.log('server start. 9001');