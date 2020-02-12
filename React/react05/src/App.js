import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
import Detail from './views/Detail'
import TodoList from './views/TodoList'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
          </ul>
          {/* exact严格匹配，只有路由未/的时候才会加载对应的路由，不会影响其他页面路由 */}
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/about/js" component={About}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/todoList" component={TodoList}></Route>
          </Switch>         
        </Router>
      </div>
    );
  }
}

export default App;