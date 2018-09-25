const theme = require("./theme.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var AssetsPlugin = require('assets-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
    'public/js',
]
const cmd = process.argv[3];
console.log(cmd)
module.exports = {
    // mode: 'production',
    entry: {
        app: ['whatwg-fetch', './src/app.jsx'],
        login: ['whatwg-fetch', './src/login.jsx']
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
                    presets: ['@babel/preset-env', "@babel/preset-react"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }, 'antd-mobile'],
                        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd']
                    ]
                },

                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: ['last 15 versions']
                            }),
                            require('postcss-flexbugs-fixes')(),
                            require('cssnano')({
                                preset: ['default', {
                                    normalizeWhitespace: {
                                        exclude: cmd!='production',
                                    },
                                }],
                            }),
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: ['last 15 versions']
                            }),
                            require('postcss-flexbugs-fixes')(),
                            require('cssnano')({
                                preset: ['default', {
                                    normalizeWhitespace: {
                                        exclude: cmd!='production',
                                    },
                                }],
                            }),
                        ]
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        "modifyVars": theme
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: ['last 15 versions']
                            }),
                            require('postcss-flexbugs-fixes')(),
                            require('cssnano')({
                                preset: ['default', {
                                    normalizeWhitespace: {
                                        exclude: cmd!='production',
                                    },
                                }],
                            }),
                        ]
                    }

                }, {
                    loader: "sass-loader"
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|otf|ttf)?$/,
                loader: ['url-loader?limit=8192']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new MiniCssExtractPlugin({
            filename: "[name]/[name].[contenthash].css"
        }),
        new AssetsPlugin({
            filename: 'public/fileConfig/webpack.webassets.js',
            processOutput: function (webassets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(webassets);
            }
        })
    ],


};