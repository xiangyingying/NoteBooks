import React, { Component } from 'react';
import { Text, View,StyleSheet,Dimensions, TextInput,Button, Alert,TouchableHighlight,FlatList} from 'react-native';
const {width,height,scale} = Dimensions.get('window')
export default class HelloWorldApp extends Component {
  state={
    arr:["html",'css','java'],
    playlists:[]
  }
  render() {
    return (
        <View>
          <Text>hello world</Text>
          <FlatList data={this.state.playlists}
           renderItem={({item})=><View><Text>{item.name}</Text></View>}
           ></FlatList>
        </View>
    );
  }
  componentDidMount() {
    var url='http://192.168.14.15:5000/top/playlist?cat=华语';
    fetch(url).then(res=>res.json()).then(resJson=>{
     /*  console.log(resJson.subjects) */
      this.setState({
        playlists:resJson.playlists
      })
    })
  }
  
}
