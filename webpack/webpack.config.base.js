/********
 * webpack 公共配置
 */

module.exports = {
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: "babel-loader"
                }]
            }
        ]
    }
}