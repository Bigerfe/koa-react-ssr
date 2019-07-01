
const  webpackDevMiddleware = require( 'webpack-dev-middleware');

const stats = { chunkModules: false, colors: 'debug' != process.env.NODE_ENV };

module.exports = (compiler, options) => {

    const { publickPath } = compiler.options.output;
    const defaults = options.publickPath?options:{publickPath,stats};

    const middleware = webpackDevMiddleware(compiler,{...defaults,...options});

    console.log(middleware.fileSystem);

    middleware.fileSystem.readFile('main.js', function (err, result) {

     console.log(err);
    });

    return async (context, next) => {
        await next();
    }
}