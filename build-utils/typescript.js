module.exports = () => ({
    module: {
        rules: [
            {
                test: [/.js$|.ts$/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/typescript']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
});
