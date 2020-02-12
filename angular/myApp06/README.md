```
ionic serve  //启动项目
```

安装插件

```
Ionic 4 Snippets
```

官网,选择try lonic react进入，可以切换为angular,点击Components使用组件

```
https://ionicframework.com/
```

###  1.配置新的路由模块

```
ionic g page views/detail     //路由自动配置，不需要手动配置
```

### 2.组件

跳转

```java
//html
<ion-content>
  <ion-button color="success"
  [routerLink]="['/detail']" routerLinkActive="router-link-active" 
  >Default</ion-button>
</ion-content>
```

返回

```java
//快捷键iback
<ion-buttons slot="start">
      <ion-back-button text="返回" icon="add"></ion-back-button>
 </ion-buttons>
 
 //tips:text定义返回名称，icon定义返回图标，到官网的icons中找到图标库，可以改变图标
```

### 3.配置底部导航

```html
//1.新增模块
ionic g page tab4

//2.删除app-routing.module.ts中自动配置的路由

//3.tabs-routing.module.ts中配置路由
{
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      
 //4.tabs.page.html中新增导航   
    <ion-tab-button tab="tab4">
      <ion-icon name="alarm"></ion-icon>          //到官网的icons中找到图标库，改变图标
      <ion-label>Tab Four</ion-label>
    </ion-tab-button>
```

改变顶部导航

```
<ion-toolbar color="secondary">        //官网ion-toolbar组件找改变样式
    <ion-title>tab Four</ion-title>
  </ion-toolbar>
```

