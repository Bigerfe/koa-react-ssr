const React = require('react');

const {
  renderToString
} = require('react-dom/server');

const http = require('http'); //组件


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, "click here!");
  }

} //服务


http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  const html = renderToString(React.createElement(Index, null));
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html}
    </div>
</body>
</html>
</body>
`);
}).listen(9001);
console.log('server start. 9001');
