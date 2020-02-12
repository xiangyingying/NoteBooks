import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MusicPage from '../views/tabs/MusicPage';
import MvPage from '../views/tabs/MvPage';
import Ionicons from 'react-native-vector-icons/Ionicons'
const TabNavigator = createBottomTabNavigator({
  Music:{
      screen:MusicPage,
      navigationOptions:{
          tabBarLabel:"音乐"
      }
  },
  Mv:{
      screen:MvPage,
      navigationOptions:{
          tabBarLabel:"Mv"
      }
  },
  
},{
    navigationOptions:({navigation})=>{
        const {routeName}=navigation.state.routes[navigation.state.index];
        if (routeName === 'Music') {
            return {
                headerTitle:"音乐"
            }
          } else if (routeName === 'Mv') {
            return {
                headerTitle:"mv"
            }
          }
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Music') {
            iconName = `ios-home`;
          } else if (routeName === 'Mv') {
            iconName = `ios-options`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
    tabBarOptions:{
        activeTintColor:"red",
        inactiveTintColor:"blue",
        style:{
            backgroundColor:"#eee"
        },
        labelStyle:{
            fontSize:20
        }
    }
  });
export default TabNavigator;
/* import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MusicPage from '../views/tabs/MusicPage';
import MvPage from '../views/tabs/MvPage';
import Ionicons from 'react-native-vector-icons/Ionicons'
const TabNavigator = createBottomTabNavigator({
 Music:{
     screen:MusicPage,
     navigationOptions:{
         tabBarLabel:"音乐"
     }
 },
 Mv:MvPage
},{
    defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Music') {
        iconName = `ios-home`;
      } else if (routeName === 'Mv') {
        iconName = `ios-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
    tabBarOptions:{
        activeTintColor:'red',     //点击颜色
        inactiveTintColor:"blue",   //初始颜色
        style:{
            backgroundColor:"#eee"
        },
        labelStyle: {
            fontSize: 18,
        },
    },
    navigationOptions:({navigation})=>{
        const {routeName}=navigation.state.routes[navigation.state.index];
        if (routeName === 'Music') {
            return {
                headerTitle:"音乐"
            }
          } else if (routeName === 'Mv') {
            return {
                headerTitle:"mv"
            }
          }
    },
});

export default createAppContainer(TabNavigator); */