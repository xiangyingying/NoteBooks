https://reactnavigation.org/docs/zh-Hans/getting-started.html

### 一 配置路由

#### 1.安装依赖

```
yarn add react-navigation
yarn add react-navigation-stack
yarn add react-native-reanimated react-native-gesture-handler react-native-screens
```

#### 2.添加

为了完成 `react-native-screens` 在 Android 上的安装, 请在`android/app/build.gradle` 中 `dependencies` 选项中添加下面这两行:

```gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

#### 3.添加

为了完成 `react-native-gesture-handler` 在 Android 上的安装,请在 `MainActivity.java` 中做如下修改:绿色部分

```diff
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;

+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

#### 4.引入

Then add the following at the top of your entry file, such as `index.js` or `App.js`:

```js
import 'react-native-gesture-handler'
```

### 二 插件

```
React Native Snippet
```

### 三 拆分

routers/index.js

```ts
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../views/HomePage';
const AppNavigator = createStackNavigator(
    {
    Home: {
      screen: HomePage,
    },
    },
    {
    initialRouteName:"Home"
    }
  );
  
  export default createAppContainer(AppNavigator);
```

views/HomePage.js

```ts
//快捷键  rnc
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> HomePage </Text>
      </View>
    );
  }
}
```

index.js

```
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'
AppRegistry.registerComponent(appName, () => App);
```

App.js

```
import React from 'react';
import AppNavigator from './routers'

 export default class HomeScreen extends React.Component {
  render() {
    return <AppNavigator/>
  }
}
```

### 四 配置导航条

两种配置方法

1.在页面配置

```
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
}
```

2.在路由配置

```ts
  const AppNavigator = createStackNavigator(
    { 
    Home: {                   //Home相当于Path
      screen: HomePage,     //screen相当于components
      navigationOptions:{
          headerTitle:"网易",
          headerStyle:{
              backgroundColor:"red"
          },
          headerTitleStyle:{
              color:"white"
          }
      }
    },
    },
    {
    initialRouteName:"Home"
    }
  ); 
```

### 五 页面跳转

#### 1.配置detail路由

```ts
const AppNavigator = createStackNavigator(
    {
    Home: {
      screen: HomePage,
      ...
    },
    Detail:{
        screen:DetailPage,
    }
    },
    {
    initialRouteName:"Home"
    }
  );
```

#### 2.主页面进行跳转

```
<Button
  title="detail"
  onPress={() => this.props.navigation.push('Detail')}
/>
```

### 六 跨页面共享的navigationOptions

导航条的全局配置

routers/index.js

```ts
const AppNavigator = createStackNavigator(
    {
    Home: {
      screen: HomePage,
      navigationOptions:{
        headerTitle:"网易",
      }
    },
    Detail:{
        screen:DetailPage,
        navigationOptions:{
            headerTitle:"网易详情"
        }
    }
    },
    {
    initialRouteName:"Home",
    defaultNavigationOptions:{     
        headerStyle:{
            backgroundColor:"red"
        },
        headerTitleStyle:{
            color:"white"
        },
        headerTintColor:"#fff"
    }
    }
  );
```

### 七 设置一个欢迎页跳到首页

```ts
 Home: {
      screen: HomePage,
      navigationOptions:{
        headerTitle:"网易",
        headerLeft:null
      }
      
WelCome:{
        screen:WelComePage,
        navigationOptions:{
            header:null
        }
    }
initialRouteName:"WelCome",
```



```ts
import React, { Component } from 'react';
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
        <Text> WelcomePage </Text>
        <Image style={styles.image}
        source={require('../assets/welcome.jpeg')}></Image>
      </View>
    );
  }
  componentDidMount() {         //coreCode  设置定时器
     this.timer = setTimeout(()=>{
          this.props.navigation.navigate("Home")
      },3000)
  }
  componentWillUnmount(){          //清除定时器
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
})
```

### 八 跳转传值

传值, 用事件传值

```
<Button
       title="detail"
       onPress={this.toggleDetail}
/>

toggleDetail=()=>{
      this.props.navigation.navigate('Detail',{id:"1001011"})
  }
```

接收

```
 import { View, Text,Alert } from 'react-native';
 
 componentDidMount() {
    let id=this.props.navigation.getParam("id");
    Alert.alert(id)
  }
```

