import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class MvPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> MvPage </Text>
        <Button title="跳转"
        onPress={() => this.props.navigation.push('Detail')}
        ></Button>
      </View>
    );
  }
}
