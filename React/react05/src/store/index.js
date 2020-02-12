import {createStore} from 'redux'    //1.引入
import reducer from './reducer'
//createStore()里面只能接受函数
let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;