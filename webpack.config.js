const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js', // Change this to the path of your entry file
    output: {
        path: path.resolve(__dirname, 'dist'), // Change 'dist' to your desired output folder
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
