import React, { Component } from 'react';
import store from '../store'
import {Input,Button,List} from 'antd'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState()  
        store.subscribe(this.handleInputChange)
    }
    
    render() {
        return (
            <div>
                <Input style={{width:300,marginRight:"20px"}} value={this.state.msg} onChange={this.handleChange} placeholder="Basic usage" />
                <Button type="primary" onClick={this.handleAdd}>添加</Button>
               {/*  <div>
                    {this.state.list.map((item,index)=>{
                        return (<p key={index}>{item}</p>)
                    })}
                </div> */}
                <div>
                    <List size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=><List.Item
                       actions={[<a key="list-loadmore-edit" onClick={this.handleDelete.bind(this,index)}>删除</a>]}
                    >{item}</List.Item>}
                    ></List>
                </div>
            </div>
        );
    }
    handleChange=(e)=>{
        let action={
            type:"change_input",
            value:e.target.value
        }
        store.dispatch(action)
    }
    handleAdd=()=>{
        let action={
            type:"add_value",
        }
        store.dispatch(action)
    }
    handleDelete=(index)=>{
        let action={
            type:"delete_value",
            value:index
        }
        store.dispatch(action)
    }
    handleInputChange=()=>{
        this.setState(store.getState)
    }

}

export default TodoList;