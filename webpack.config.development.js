/**
 * Created by ryan on 16/8/10.
 */


/*
* var webpackDevServer = require('webpack-dev-server'),
 webpack = require('webpack'),
 path = require('path'),
 ImageminPlugin = require('imagemin-webpack-plugin').default;

 var config = {
 entry: {
 index: [
 "webpack-dev-server/client?http://localhost:8080/",
 "webpack/hot/dev-server",
 './index.js'
 ],
 result: [
 "webpack-dev-server/client?http://localhost:8080/",
 "webpack/hot/dev-server",
 './result.js'
 ]
 },
 output: {
 path: path.resolve(__dirname, 'dist'),
 filename: '[name].bundle.js'
 },
 plugins: [
 new webpack.HotModuleReplacementPlugin(),
 new ImageminPlugin({
 disable: false,
 optipng: {
 optimizationLevel: 3
 },
 gifsicle: {
 optimizationLevel: 1
 },
 jpegtran: {
 optimizationLevel: 4,
 progressive: false
 },
 svgo: {
 },
 pngquant: null, // pngquant is not run unless you pass options here
 plugins: []
 })
 ]
 };

 var compiler = webpack( config );

 var server = new webpackDevServer( compiler, {
 hot: true,
 compress: true,
 outputPath: '/assets/'
 });

 server.listen(8080, 'localhost', function() {
 console.log( 'start server' );
 });
* */

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
                exclude: /node_modules/,
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