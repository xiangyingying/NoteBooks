一 初始化webpack

   npm init -y

   npm i webpack webpack-cli -S

1-1 新建webpack.config.js

1-2 配置package.json

​     “srcipt”:{

   "build":"webpack --config webpack.config.js"

 }

1-3 初次打包

const path=require("path")

const config={

entry:path.join(__dirname,'src/index.js'),

output:{

filename:"bundle.js",

path:path.join(__dirname,'dist')

},

mode:"development"

}

module.exports=config

npm run build 运行

二 配置plugins

npm i html-webpack-plugin -S

npm i clean-webpack-plugin -S