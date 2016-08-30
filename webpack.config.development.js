/**
 * Created by ryan on 16/8/10.
 */

var webpack = require('webpack'),
    WebpackDevSever = require('webpack-dev-server'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var compiler = webpack({
    entry: {
        index: [
            "webpack-dev-server/client?http://localhost:8080/",
            "webpack/hot/dev-server",
            path.resolve(__dirname, 'frontendResources/entry/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'less', '.css', '.jpg', '.png', '.jpeg', '.gif']
    },
    module: {
        loaders: [
            {
                test: /.less$/,
                //exclude: /node_modules/,
                loader: 'style!css!less'
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'mobile page layout',
            inject: 'body',
            filename: './index.html',
            template: path.resolve(__dirname, 'frontendResources/template/index.html')
        })
    ],
    watch: true
});

var server = new WebpackDevSever( compiler, {
    hot: true,
    compress: true,
    outputPath: '/assets/'
});

server.listen(8080, 'localhost', function() {
    //todo
});