module.exports = () => ({
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
});
