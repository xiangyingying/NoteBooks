//2.定义默认的状态
const defaultState={
    msg:"这是关于redux",
    list:[]
}
//reducer可以接收state，但是不能直接修改state
export default(state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case "btn_value":
            let newMsg={...state};
            newMsg.msg=action.value;
            return newMsg;
        case "change_input":
            let newState={...state};
            newState.msg=action.value;
            return newState;
        case "add_value":
            let listState={...state};
            listState.list.push(listState.msg)     
            listState.msg=""
            return listState;
        case "delete_value":
            let deleteList={...state};
            deleteList.list.splice(action.value,1)
            return deleteList
        default:
            return state
    }
}
/* //reducer可以接收state，但是不能修改state
const reducer=(state=defaultState,action)=>{
    //reducer拿到数据之后，会和之前的数据做对比，如果数据一样，就不会更新了，
    console.log(action)
   if(action.type==="btn_value"){
       let newState={...state};
       newState.msg=action.value;
       return newState;
   }
}

export default reducer; */