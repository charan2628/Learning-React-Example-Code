module.exports = {
    entry: './RandomUsers.js',
    output: {
        filename: "RandomUsersBundle.js",
        sourceMapFilename: 'RandomUsersBundle.map'
    },
    devtool: '#source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    }
}