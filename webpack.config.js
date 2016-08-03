/**
 * Created by ryan on 16/8/2.
 */

var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    NODE_ENV = 'develop';    //开发环境develop,    生产环境:production

process.env.NODE_ENV = NODE_ENV;

var config = {

    entry: {
        index: path.resolve( __dirname, 'frontendResources/entry/index.js' )
    },

    output: {
        path: path.resolve( __dirname, 'public/javascripts' ),
        filename: 'develop' === NODE_ENV ? '[name].bundle.js' : '[name].bundle.[hash].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.jpg', '.jpeg', '.png', '.gif']
    },
    
    module: {
        loaders: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'mobile page layout',
            inject: 'body',
            filename: '../../views/index.html',
            template: path.resolve(__dirname, 'frontendResources/template/index.html')
        })
    ],

    watch: true

};

//ugly js
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});

if( 'develop' === NODE_ENV ) {
    config['devtool'] = 'cheap-source-map';
} else {
    config.plugins.push( UglifyJsPlugin );

}

module.exports = config;