### 一ant组件库

###### 安装依赖

```
 npm i antd
```

###### 1-1导入组件

```css
//index.js    样式引入
import 'antd/dist/antd.css'
```

```css
组件引入
import { Button } from 'antd';
使用
<Button>antd</Button>
```

### 二 双向数据绑定

input类似vue里面的v-model

```css
value是可变的，input要加入onChange事件
<input type="text" value={this.state.userName} onChange={this.handleChange}></input>

 handleChange=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }
```

### 三 code安装插件

```
1.Reactjs code snippets
```

```
//快捷键rcc
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default App;
```

```
//2.React Native Tools插件
```

```
//快捷键cdm
componentDidMount() {}
```

### 四 路由

安装依赖

```
npm install react-router-dom
yarn add react-router-dom
```

#### 1.配置路由

App.js

```
//1.导入
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//2.使用路由
import Home from './views/Home'
import About from './views/About'
  <div>
    <Router>
       <Route exact path="/" component={Home}></Route>
       <Route path="/about" component={About}></Route>
     </Router>
   </div>
tips:exact严格匹配，只有路由未/的时候才会加载对应的路由，不会影响其他页面路由
```

#### 2.Switch

```
   <Router>
          <Switch>      //使用<Switch>使对应路由匹配，否则/about/js和/about一样,component对应的是加载的组件
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/about/js" component={About}></Route>
          </Switch>         
        </Router>
```

### 五 跳转

#### 1.Link跳转和get传值

```
<Link to={`/detail?id=${this.state.id}`}>
     <Button >跳转到detail</Button>
 </Link>
```

#### 2.事件跳转

```
  <Button onClick={this.handleToggle}>跳转到detail</Button>
  handleToggle=()=>{
        this.props.history.push(`/detail?id=${this.state.id}`)
    }
```

#### 3.query-string解析

接收

```
this.props.location.search里面接收
```

```
//安装依赖，解析get传值
yarn add query-string
```

```js
import queryString from 'query-string'
class Detail extends Component {
    render() {
        return (
            <div>详情</div>
        );
    }
    
    componentDidMount() {
        var url=this.props.location.search
        console.log(queryString.parse(url))
    }
    
}

export default Detail;
```

### 六 动态路由

```
//配置动态撸路由
<Route path="/detail/:id" component={Detail}></Route>
```

```
//跳转
<Button onClick={this.handleToggle}>跳转到detail</Button>
handleToggle=()=>{
        this.props.history.push(`/detail/${this.state.id}`)
    }
```

```
//接收
componentDidMount() {
        console.log(this.props.mathch.params)
    }
```

### 七 二级路由和路由重定向

```
1.
render() {
        return (
            <div>
                关于页面
                {/*  /about/morning /about/night*/}
                使用component这种路由方式，route标签不能有空格
               <Route path="/about/morning" component={Morning}></Route>
                <Route path="/about/night" component={Night}></Route>
                
            </div>
        );
    }
```

```
           2.
           <Switch>
                    <Route path="/about/morning">
                        <Morning></Morning>
                    </Route>
                    <Route path="/about/night">
                        <Night></Night>
                    </Route>               
                </Switch>
```

路由重定向

```
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 <Redirect from="/about" to="/about/morning"></Redirect>
```

### 八 获取Dom节点

```
<button ref={(btn)=>{this.btn=btn}}>ref</button>

   componentDidMount(){
        console.log(this.btn)
    }
```

### 九 生命周期

```
//初始加载执行顺序
constructor()
componentWillMount()   将要过时，避免使用
render()
componentDidMount()
```

```
//数据更新时触发
componentDidUpdate()
render()
```

```
//将要被卸载时触发
componentWillUnmount()
```

<img src="E:\notebooks\React\react05\public\批注 2019-12-17 102701.png" style="zoom:60%;" />

```
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
```

### 十 内联样式

```
//写内联样式要用{{}}
<p style={{width:300,marginRight:"10px",color:this.state.color}}>hello world</p>
```

### 十一  Redux

![](E:\notebooks\React\react05\public\redux工作流.png)

安装依赖

```
npm install --save redux
或
yarn add redux
```

```
store  保存数据的地方，将store看成一个容器，一个应用只能有一个store 
```

src/store/index.js

```
//创建store
import {createStore} from 'redux'

const defaultState={
    msg:"这是关于redux"
}
const reducer=(state=defaultState,actions)=>{
    return state;
}
//createStore()里面只能接受函数
let store=createStore(reducer)
export default store;
```

```
//跨页面传参
import store from '../store/index'
componentDidMount(){
        console.log(store.getState())    //{msg: "这是关于redux"}
    }
```

分离

```
//store/index.js
    import {createStore} from 'redux'
    import reducer from './reducer'
    //createStore()里面只能接受函数
    let store=createStore(reducer)
    export default store;
```

```
//store/reducer.js
const defaultState={
    msg:"这是关于redux"
}
const reducer=(state=defaultState,action)=>{
    return state;
}

export default reducer;
```

向reudcer派发事件

home.js

```
  this.state=store.getState()
  
 <button onClick={this.handleClick}>改变reducex</button>
 
 handleClick=()=>{
        const action={
            type:"btn_value",
            value:"redux很难用"
        }
        store.dispatch(action)     //使用dispatch向reducer派发行为
    }
```

接受     reducer.js

```
const defaultState={
    msg:"这是关于redux"
}
//reducer可以接收state，但是不能修改state
const reducer=(state=defaultState,action)=>{
    console.log(action)
   if(action.type==="btn_value"){     
       let newState={...state};        //使用拷贝，改变state的值
       newState.msg=action.value;
       return newState;
   }
}

export default reducer;
```

改变数据

```
store.subscribe(this.handleSotreChange)

 handleSotreChange=()=>{
        this.setState(store.getState())
    }
```

redux调试工具

```
谷歌应用商店安装redux插件，点击插件中Redux DevTools进入github找到代码，复制到store
```

![image-20191217143836443](C:\Users\Ying Ya\AppData\Roaming\Typora\typora-user-images\image-20191217143836443.png)

```
let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

### 十二 步骤

```
store 
  --index.js
  --reducer.js
```

1.创建store（容器），管理数据

```
//index.js
import {createStore} from 'redux'    //1.引入
import reducer from './reducer'     //3.导入
//createStore()里面只能接受函数
let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    //配置redux调式工具
export default store;
```

2.创建reducer，接收action，重新计算state

```
//reducer.js
//2.定义默认的状态
const defaultState={
    msg:"这是关于redux"
}
export default(state=defaultState,action)=>{
    return state
}
```

3.在组件中导入store，使用

```
import store from '../store/index'
this.state=store.getState()
```

4.组件中派发action，通过一个事件

```
  <p>{this.state.msg}</p>
 <button onClick={this.handleClick}>改变reducex</button>
 handleClick=()=>{ 
     //创建action
        const action={
            type:"btn_value",
            value:"redux很难用"
        } 
        //派发action
        store.dispatch(action)
    }
```

5.store自动接收action,之后将action传递给reducer

```
//reducer可以接收state，但是不能直接修改state
export default(state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case "btn_value":
            var newState={...state};
            newState.msg=action.value;
            return newState;
        default:
            return state
    }
}
```

```

class Home extends Component {
    constructor(props){
        ...
        this.state=store.getState()
        store.subscribe(this.handleSotreChange)
    }

  handleSotreChange=()=>{
        this.setState(store.getState())
    }
}
```

