### 一 创建项目

#### 1.创建

```
npx react-native init AwesomeProject
```

#### 2.连接夜神模拟器，在cmd连接

```
adb connect 127.0.0.1:62001
```

#### 3.启动项目

```
react-native run-android
```

Ui框架

```
React Native Elements
```

### 二 基本语法

#### 1.使用组件必须先导入组件

```
import { Button } from 'react-native';
<Button title="btn"></Button>
```

```
//图片相关的资源一定要加宽高
<Image style={{width:200,height:200}} source={{uri:"https://c-ssl.duitang.com/uploads/item/201903/14/20190314080942_ibkpm.thumb.400_0.jpeg"}}></Image>
```

```
//本地图片
<Image source={require('./assets/20190317102250_mpuae.jpeg')}></Image>
```

#### 2. 使用state

```
export default class HelloWorldApp extends Component {
  state={
    msg:"good"
  }
  render() {
    return (
        <View>
             <Text>{this.state.msg}</Text>
        </View>
    );
  }
}
```

#### 3. 样式

```
//1. 导入StyleSheet
import { Text, View,StyleSheet} from 'react-native';
//2.创建样式
const styles=StyleSheet.create({
  container:{
    backgroundColor:"blue",
    width:200,
    height:200
  },
  txt:{
    color:"red"
  }，
  bg:{
    backgroundColor:"#fff"
  }
})
//3. 使用
render() {
    return (
        <View style={styles.container}>
          //使用多个样式
          <Text style={[styles.txt,styles.bg]}>hello world</Text>
             <Text>{this.state.msg}</Text>
        </View>
    );
  }
```

#### 4. Dimensions

可以测量屏幕宽高

```
import { Text, View,StyleSheet,Dimensions} from 'react-native';
const {width,height,scale} = Dimensions.get('window')

render() {
    return (
        <View>
            <Text>{width}</Text>
            <Text>{height}</Text>
            <Text>{scale}</Text>
        </View>
    );
  }
}
```

#### 5. 布局

```
//view默认为flex布局
<View style={styles.container}>
         <View style={styles.child}></View>
         <View style={styles.child}></View>
         <View style={styles.child}></View>
 </View>
        
   const styles=StyleSheet.create({
  container:{
    width:400,
    height:400,
    backgroundColor:"blue",
    flexDirection:"row",             //原来是竖着排，加了是横着
    justifyContent:"space-around", 
    alignItems:"center"
  },
  child:{
    width:100,
    height:100,
    backgroundColor:"red"
  }
})
```

#### 6. 定位

```
container:{
    width:400,
    height:400,
    backgroundColor:"blue",
    position:"relative",
  },
  child:{
    width:100,
    height:100,
    backgroundColor:"red",
    position:"absolute",
    //left:20,top:50
    left:'50%',
    top:'50%',
    transform:[{translateX:-50},{translateY:-50}]，
    //或者  transform:[{translate:[-50,-50]}]
  }
```

```
//支持zIndex
<View style={styles.container}>
    <View style={styles.child}></View>
    <View style={styles.two}></View>
 </View>
 const styles=StyleSheet.create({
  container:{
    width:400,
    height:400,
    backgroundColor:"blue",
    position:"relative",
  },
  child:{
    width:100,
    height:100,
    backgroundColor:"red",
    position:"absolute",
  },
  two:{
    width:150,
    height:150,
    backgroundColor:"yellow",
    position:"absolute",
    zIndex:-1
  }
})
```

#### 7.事件

```
 import {Button, Alert} from 'react-native';
<Button title='btn'
         onPress={()=>{
           Alert.alert("good")
         }}
 ></Button>
```

```
<Button title='btn'
    onPress={this.handleClick}
></Button>

 handleClick=()=>{
    alert(1)
  }
```

#### 8. TextInput

```
 import {  TextInput} from 'react-native';
 <TextInput style={styles.input}></TextInput>
 
 input:{
    borderColor:"#333",
    height:20,
  }
```

#### 9.FlatList

```
export default class HelloWorldApp extends Component {
  state={
    arr:["html",'css','java']
  }
  render() {
    return (
        <View>
           <FlatList data={this.state.arr}
              renderItem={({item})=><Text>{item}</Text>}
           ></FlatList>
        </View>
    );
  }
}
```

#### 10. ScrollView

```
<ScrollView contentContainerStyle={styles.contentContainer}>
  </ScrollView>
```

### 三 调式

```
1.夜神模拟器
2.android studio
3.真机
```

### 四 http请求

在nodejs中可以查看打印的东西,或者进入网页调式台，快捷键ctrl+shift+g,或者摇一摇使用debug

```
import React, { Component } from 'react';
import { Text, View,FlatList} from 'react-native';
export default class HelloWorldApp extends Component {
  state={
    subjects:[]
  }
  render() {
    return (
        <View>
           <FlatList data={this.state.subjects}
           renderItem={({item})=><Text>{item.name}</Text>}
           ></FlatList>
        </View>
    );
  }
  componentDidMount() {
    var url='https://douban-api.zce.now.sh/v2/movie/top250';
    fetch(url).then(res=>res.json()).then(resJson=>{
      console.log(resJson.subjects)
      this.setState({
        subjects:resJson.subjects
      })
    })
  }
  
}
```

```
//支持async await
async componentDidMount() {
    // ctrl+shift+j
    var url = "http://192.168.14.15:5000/dj/program?rid=336355127"
    var data = await fetch(url);
    var resJson = await data.json();
    console.log(resJson)
  }
```

