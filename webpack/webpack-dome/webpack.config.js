const path = require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const config = {
    target:"web",
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,'dist')
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'public/index.html',
            filename:'test.html'
        })
    ],
    mode:"development"
}
module.exports = config;
