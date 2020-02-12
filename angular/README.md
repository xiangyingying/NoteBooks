# ionic开发环境准备

## 一、安装jdk

```
//系统变量
JAVA_HOME
//C:\Program Files\Java\jdk1.8.0_191

CLASSPATH
//C:\Program Files\Java\jdk1.8.0_191\lib

Path
//C:\Program Files\Java\jdk1.8.0_191\bin

//javac  命令行中输入javac有输出就表示安装成功 
```

## 二、android开发环境

```
ANDROID_HOME
//C:\Users\MI\AppData\Local\Android\Sdk

Path
//C:\Users\MI\AppData\Local\Android\Sdk\platform-tools
//C:\Users\MI\AppData\Local\Android\Sdk\tools

//adb  命令行中输入adb就表示android开发环境配置成功了
```

![img](https://gitee.com/big-frontend/notebook/raw/master/Angular-tutorail/assets/sdk.png)

## 三、gradle

```
https://gradle.org/releases/
Path
//C:\gradle-5.4.1\bin

系统变量
GRADLE_HOME
//C:\gradle-5.4.1

//gradle -v
```

## 四、安装ionic

```
npm install -g ionic cordova
ionic -v
cordova -v
```

#### 4-1 创建项目

```
ionic start myApp tabs
```

#### 4-2 打包browser

```
//web
ionic cordova build browser --prod
//npm i serve -g
//serve -s www
```

#### 4-3 打包成apk

```
ionic platform add android
ionic cordova platform add android
//打包成apk
ionic cordova build android
```