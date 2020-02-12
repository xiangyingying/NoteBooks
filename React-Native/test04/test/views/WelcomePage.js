/* import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions } from 'react-native';
const {width,height,scale} = Dimensions.get('window')
export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image style={styles.image}
        source={require('../assets/welcome.jpeg')}></Image>
      </View>
    );
  }
  componentDidMount() {
      this.timer=setTimeout(()=>{
          this.props.navigation.navigate("Home")
      },3000)
  }
  componentWillUnmount(){
      if(this.timer){
          clearTimeout(this.timer)
      }
  }
  
}
const styles=StyleSheet.create({
    image:{
        width:width,
        height:height
    }
}) */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WelcomePage extends Component {
  componentDidMount(){
    this.timer=setTimeout(()=>{
      this.props.navigation.navigate("Main")
    },3000)   
  }

  render() {
    return (
      <View>
        <Text> WelcomePage </Text>
      </View>
    );
  }
}
