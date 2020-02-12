import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class HomePage extends Component {
   /*  static navigationOptions = {
        title: '网易云音乐',
      }; */

  render() {
    return (
      <View>
        <Text> HomePage </Text>
        <Button
            title="detail"
            onPress={this.toggleDetail}
            />
      </View>
    );
  }
  toggleDetail=()=>{
      this.props.navigation.navigate('Detail',{id:"1001011"})
  }
}
