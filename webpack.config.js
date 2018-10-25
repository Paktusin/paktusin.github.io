const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (app, env) => {
    console.log(env.mode);
    const prod = env.mode === 'production';
    const config = {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCssAssetsPlugin({})
            ]
        },
        entry: {
            app: './src/app.js',
            common: './src/common.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].[chunkhash].js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(s)css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                // {
                //     test: /\.html$/,
                //     use: 'raw-loader'
                // },
                {
                    test: /\.(html)$/,
                    exclude: path.resolve(__dirname, 'src/index.html'),
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                publicPath: prod ? 'dist' : ''
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|ttf|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: prod ? '../index.html' : 'index.html',
                template: path.join(__dirname, 'src/index.html')
            }),
            new CleanWebpackPlugin(['dist']),
            new MiniCssExtractPlugin({
                filename: "[name].[hash].css",
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, './'),
            compress: true,
            port: 3000
        }
    };
    return config;
};