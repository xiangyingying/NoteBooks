import React from 'react';
import './App.css'
/* react所有的组件都继承自React.Component */
import axios from 'axios'
class App extends React.Component {
  /* html是写在render函数中的 */
constructor(props){
    super(props);
    this.state={
      musics:[]
    }
  }
  render(){
    return(
         <div>
             <div>
                 {this.state.musics.map(item=>{
                     return (<div key={item.id}>
                         <img src={item.coverImgUrl} alt={item.name} />
                         <p>{item.name}</p>
                     </div>)
                 })}
             </div>
         </div>
    )
  }
  componentDidMount(){
    var url="https://music.aityp.com/top/playlist?cat=华语"
    axios.get(url).then(res=>{
      console.log(res.data.playlists)
      this.setState({
          musics:res.data.playlists
      })
    })
  }
  handleClick=()=>{
    console.log(1)
  }
}
export default App;


