import React, { Component } from 'react';
import { View, Text,Alert } from 'react-native';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> DetailPage </Text>
      </View>
    );
  }
  componentDidMount() {
    let id=this.props.navigation.getParam("id");
    Alert.alert(id)
  }
  
}
