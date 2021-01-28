const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const path = require("path");

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                // Include CSS, Load and compile Sass
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                // Fix warning in console for Devtools loading SourceMap
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                // Javascript compiler and transpiler
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({

            // Load template from src/index.html
            template: path.resolve(__dirname, "src", "index.html")

        }),
        // ESLint disable error
        new ESLintPlugin({
            emitWarning: true
        })
    ]
};