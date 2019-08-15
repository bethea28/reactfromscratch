const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const html = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = {
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [html],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ],
    },
};
