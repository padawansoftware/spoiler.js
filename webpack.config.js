const path = require('path');

module.exports = {
    'entry': [
        './src/spoiler.js',
        './src/spoiler.css'
    ],
    'mode': 'production',
    'output': {
        filename: 'spoiler.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: '[name].min.[ext]'
                    }
                },
                "extract-loader",
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    }
}