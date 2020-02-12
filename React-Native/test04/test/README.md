### 一 设置欢迎页

配置两个导航器栈，使用switch切换两个导航器栈

```ts
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../views/HomePage';
import WelComePage from '../views/WelcomePage'
//设置欢迎导航器栈
const InitNavigator = createStackNavigator({
    WelCome:{
        screen:WelComePage,
        navigationOptions:{
            header:null,
        }
    }
});
//设置首页导航器栈
  const MainNavigator=createStackNavigator({
      HomePage:{
          screen:HomePage
      }
  })
  //使用switch 让app中只有一个stack
  const router = createSwitchNavigator({
      Init:InitNavigator,
      Main:MainNavigator
  },{
      initialRouteName:'Init'
  }
  )
  export default createAppContainer(router);
```

welcome栈

```ts
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WelcomePage extends Component {
  componentDidMount(){
    this.timer=setTimeout(()=>{
      this.props.navigation.navigate("Main")
    },3000)   
  }
    componentWillUnmount(){
          if(this.timer){
              clearTimeout(this.timer)
          }
      }
  render() {
    return (
      <View>
        <Text> WelcomePage </Text>
      </View>
    );
  }
}
```

### 二 react-native-vector-icons

官网

https://github.com/oblador/react-native-vector-icons

安装

```
yarn add react-native-vector-icons
```

android/app/build.gradle需要添加

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

使用

如果使用有误，图标出不来报一个问号，点开黄色字体的warning，选择数组里面的用法

```ts
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons'

<AntIcon name="up" size={30} color="#900"></AntIcon>
<AntIcon name="stepforward" size={30} color="#900"></AntIcon>
<IonicIcon name="ios-add" size={30} color="#900"></IonicIcon>
```

### 三 底部导航的配置

https://reactnavigation.org/docs/zh-Hans/tab-based-navigation.html

```
yarn add react-navigation-tabs
```

router/tabs.js

```ts
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MusicPage from '../views/tabs/MusicPage';
import MvPage from '../views/tabs/MvPage'
const TabNavigator = createBottomTabNavigator({
  Music: MusicPage,
  Mv:MvPage
});

export default createAppContainer(TabNavigator);
```

Homepage.js

```java
import React, { Component } from 'react';
import Tabs from '../routers/tabs'
export default class HomePage extends Component {
  render() {
    return (
    <Tabs/>
    );
  }
}
```

##### 给底部导航的名字换成中文

```java
const TabNavigator = createBottomTabNavigator({
  Music:{
      screen:MusicPage,
      navigationOptions:{       //使用tabBarLabel
          tabBarLabel:"音乐"
      }
  },
  Mv:MvPage
});
```

##### 不使用homePage页

将tabs.js导入到index.js

routers/tabs.js

```ts
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MusicPage from '../views/tabs/MusicPage';
import MvPage from '../views/tabs/MvPage'
const TabNavigator = createBottomTabNavigator({
  Music:{
      screen:MusicPage,
      navigationOptions:{
          tabBarLabel:"音乐"
      }
  },
  Mv:MvPage 
});

export default TabNavigator;
```

router.js/index.js

```
import Tabs from './tabs'
...
  const MainNavigator=createStackNavigator({
      HomePage:Tabs
  })
  ...
  export default createAppContainer(router);
```

##### 对tabBar进行修改

routers/tabs.js

```ts
import React from 'react';
...
const TabNavigator = createBottomTabNavigator({
 ... 
},{    
     defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Music') {          
        iconName = `ios-home`;				//给tabBar加入图标
      } else if (routeName === 'Mv') {
        iconName = `ios-options`;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),    
    navigationOptions:{
        title:"音乐"
    },
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
```

##### 配置tabBar的顶部导航

https://reactnavigation.org/docs/zh-Hans/navigation-options-resolution.html

```ts
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
```

##### 跳转到详情

```ts
//配置详情路由
const MainNavigator=createStackNavigator({
      HomePage:{
          screen:Tabs
      },
      Detail:{
          screen:DetailPage
      }
  })
```

```
<Button title="跳转"
     onPress={() => this.props.navigation.push('Detail')}
></Button>
```

