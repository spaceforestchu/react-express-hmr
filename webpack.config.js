const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [  
            'webpack-hot-middleware/client?reload=true',
            // 'webpack/hot/only-dev-server',
            // 'react-hot-loader/patch',
            "@babel/runtime/regenerator",
            "./src/app.js"
         ]
    },
    mode: 'development',
    output: {
        filename: "[name]-bundle.js",
        path: path.join(__dirname, 'public/dist'),
        publicPath: "/"
    },
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader'
                  }
                ]
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: './views/index.ejs'
        })
    ]
}