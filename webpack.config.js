const theme = require("./theme.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var AssetsPlugin = require('assets-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
    'public/js',
]

const cmd = process.argv[3];
console.log(cmd)
let plugins = [
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
];
if (cmd == 'production') {
    plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8919 }))
};
module.exports = {
    // mode: 'production',
    entry: {
        app: ['whatwg-fetch', './src/app/app.jsx'],
    },
    output: {
        filename: "[name]/[name].[chunkhash].js",
        path: path.resolve(__dirname, 'public', 'js')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'react',
                    chunks: 'all',
                }
            }
        }
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
                        ["import", { "libraryName": "antd", "libraryDirectory": "lib", 'style': true }, "ant"],
                        ["import", { "libraryName": "ant-mobile", "libraryDirectory": "lib" ,'style': true}, "ant-mobile"]
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
                                        exclude: cmd != 'production',
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
                                        exclude: cmd != 'production',
                                    },
                                }],
                            }),
                        ]
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        "modifyVars": theme,
                        javascriptEnabled: true,
                    }
                }],
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
                                        exclude: cmd != 'production',
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
    plugins: plugins,


};