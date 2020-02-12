import React from 'react';
import './App.css';
import Title from './components/Title'
import axios from 'axios'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      playlists:[]
    }
  }
  render(){
    return (
      <div>
        <Title></Title>
        
      </div>
    )
  }
  handleDelete(id){
    console.log(id)
  }
  componentDidMount(){
     axios.get('https://music.aityp.com/top/playlist?cat=华语').then(res=>{
      this.setState({
        playlists: res.data.playlists
      })
    }) 
  }
}

export default App;
