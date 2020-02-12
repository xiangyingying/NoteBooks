### 一 项目初始化

art-template 是一个简约、超快的模板引擎。

它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

```
npm i koa-generator -g      全局安装,装一次即可
koa2 koa-admin-cart
yarn add art-template koa-art-template
```

app.js

```
const render = require("koa-art-template");
const {resolve}=require('path')

render(app, {
  root: resolve(__dirname, 'views'),
  extname: '.html', //后缀也可以写成.art
  debug: process.env.NODE_ENV !== 'production'
});
```

