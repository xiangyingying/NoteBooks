import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button} from 'antd'
import store from '../store/index'
class Home extends Component {
    constructor(props){
        super(props);
        /* console.log("constructor") */
        /* this.state={
            id:1001,
            msg:"hello world",
            color:"red",
        } */
        this.state=store.getState()
        store.subscribe(this.handleSotreChange)
    }
    render() {
       /*  console.log("render") */
        return (
            <div>
                主页
                   {/*  <Button onClick={this.handleToggle}>跳转到detail</Button> */}
                  {/*   <button ref={(btn)=>{this.btn=btn}}>ref</button> */}
                    {/* <p>{this.state.msg}</p>
                    <button onClick={this.handleChange}>触发update</button> */}
                    {/* <p style={{width:300,marginRight:"10px",color:this.state.color}}>hello world</p> */}
                {/* <p>{this.state.msg}</p> */}
                <p>{this.state.msg}</p>
                <button onClick={this.handleClick}>改变reducex</button>
            </div>
        );
    }
   /*  handleToggle=()=>{
        this.props.history.push(`/detail/${this.state.id}`)
    } */
   /*  componentWillMount(){
      //将要被触发，将要过时，避免使用
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    handleChange=()=>{
        this.setState({
            msg:"change"
        })
    } */
    /* componentDidMount(){
        console.log(store.getState())
    } */
    handleClick=()=>{
        const action={
            type:"btn_value",
            value:"redux很难用啊"
        }
        store.dispatch(action)
    }
    handleSotreChange=()=>{
        this.setState(store.getState())
    }
    componentDidMount() {
      
    }
    
}

export default Home;