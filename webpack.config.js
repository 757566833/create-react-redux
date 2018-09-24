// const theme = require("./theme.js")
var AssetsPlugin = require('assets-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
    'public/js',
]

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/app.jsx'],
        login: ['./src/login.jsx']
    },
    output: {
        filename: "[name]/[name].[chunkhash].js",
        path: path.resolve(__dirname, 'public', 'js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react" ],
                    plugins: [
                        "@babel/plugin-proposal-function-bind",
                        ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }, 'antd-mobile'],
                        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd']
                    ]
                },

                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|otf|ttf)?$/,
                loader: ['url-loader?limit=8192']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        // new ExtractTextPlugin("[name]/[name].[contenthash].css"),
        new AssetsPlugin({
            filename: 'public/fileConfig/webpack.webassets.js',
            processOutput: function (webassets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(webassets);
            }
        })
    ],


};