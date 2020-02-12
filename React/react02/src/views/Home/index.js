//每一个页面级的组件第一行必须加   import React from 'react'
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"hello world",
      isShow:true,
      arr:[1,2,3],
      keyword:"",
      arrList:[]
    }
  }
  render() {
    return(
      <div>
          <p>{this.state.isShow?'good':'hello world'}</p>
          {this.Message()}
          <div onClick={this.handleClick.bind(this,"good")}>{this.state.msg}</div>
          <input onKeyUp={this.handleKeyUp} />
          <div>{this.state.arr.map(item=>{
            return (<p>{item}</p>)
          })}</div>
      </div>     
    )
  }
  Message(){
    if(this.state.isShow){
      return (<span>显示</span>)
    }else{
      return (<span>隐藏</span>)
    }
  }
  handleClick(id){
    console.log(id)
    this.setState({
      msg:"chage"
    })
  }
  handleKeyUp=(event)=>{
    var keyword=event.key
    var obj={};
    var arrList=this.state.arrList;
    obj.name=keyword;
    obj.checked=this.state.checked;
     arrList.push(obj)
     this.setState({
      arrList,
      keyword
    })
    console.log(arrList)
  }
}
export default App;