const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (app, env) => {
    console.log(env.mode);
    const config = {
        entry: [
            "babel-polyfill",
            "./src/main"
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "[name].[hash].js"
        },
        devServer: {
            contentBase: path.join(__dirname, './'),
            open: true
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new htmlWebpackPlugin({
                filename: '../index.html',
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({filename: "[name].[hash].css",})
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpg|gif|woff|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                },
                {
                    test: /\.html/,
                    use: 'raw-loader'
                }
            ]
        }
    };
    if (env.mode === 'production') {
        config.plugins.push(new OptimizeCssAssetsPlugin({}));
    }
    return config;
};