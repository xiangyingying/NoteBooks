import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
React.Component.prototype.$http=axios
ReactDOM.render(<App />, document.getElementById('root'));

