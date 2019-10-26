const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');
const path = require('path');
const typescript = require('./build-utils/typescript');
const fileloading = require('./build-utils/fileloading');


module.exports = ({mode} = {mode: 'development'}) => {
    return webpackMerge({
            entry: './src/index.ts',
            mode,
            module: {
                rules: [
                    {
                        test: /\.pug$/,
                        use:  ['pug-loader']
                    }
                ]
            },
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist')
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/pug/index.pug',
                    filename: 'index.html'
                }),
                new webpack.ProgressPlugin()
            ],
        },
        modeConfig(mode),
        typescript(),
        fileloading()
    );
};
