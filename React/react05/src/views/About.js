import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Morning from './components/Morning'
import Night from './components/Night'
class About extends Component {
    render() {
        return (
            <div>
                关于页面
                {/*  /about/morning /about/night*/}
                {/* <Route path="/about/morning" component={Morning}></Route>
                <Route path="/about/night" component={Night}></Route> */}
                <ul>
                <li><Link to="/about/morning">早上</Link></li>
               <li><Link to="/about/night">晚上</Link></li>
                </ul>
                <Switch>
                    <Route path="/about/morning">
                        <Morning></Morning>
                    </Route>
                    <Route path="/about/night">
                        <Night></Night>
                    </Route>
                    <Redirect from="/about" to="/about/morning"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default About;