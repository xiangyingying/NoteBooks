## 组件/插槽

### 一、小程序的生命周期

```
onLoad
onShow
onReady
onHide
onUnLoad
```

#### 1-1小程序中页面第一次加载的时候会触发三个生命周期函数

```
onLoad
onShow
onReady
```

#### 1-2 小程序从一个页面跳转到另一个页面。前一个页面会触发onHide

#### 1-3 跳转回前一个页面会触发onShow

### 二、缓存

```
wx.setStorageSync(key,value) //设置缓存
wx.getStorageSync(key) //获取缓存
```

### 三、getApp()

```
const app = getApp() //获取app.js中的对象
```

