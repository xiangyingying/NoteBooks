import React from 'react'
import axios from 'axios'
class Title extends React.Component{
    constructor(props){
        super(props)
        this.state={
            playlists:[]
        }
    }
    render() {
        return (
          <div>
            <div>
              {this.state.playlists.map(item => {
                return (<div key={item.id}>
                  <img src={item.coverImgUrl} alt={item.name} />
                  <p> {item.name}</p>
                </div>)
              })}
            </div>
          </div>
        )
      }
    handleClick=(id)=>{
        //2.在子组件调用方法，向组件传参
        this.props.deleteItem(id)
    }
    componentDidMount(){
      var url="https://music.aityp.com/top/playlist?cat=日语"
        axios.get(url).then(res=>{
            this.setState({
                playlists: res.data.playlists
            })
    }) 
    }
}
export default Title