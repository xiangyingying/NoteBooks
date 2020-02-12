```
ng g         //查看命令行所有命令
```

```
Angular Files   //图形画界面创建组件
```

### 一 service

1 生成服务

```
ng g service services/common 
```

2 配置服务

```ts
//在根模块中导入service  app.module.ts
import {CommonService} from './services/common.service';

@NgModule({
  providers: [
    CommonService
  ],
})
```

3 在组件中使用服务

```ts
//common.service.ts
export class CommonService {
  public defaultCity:string="武汉"
  constructor() { }
}
```

```ts
//组件
import {CommonService} from '../../services/common.service';

export class HomeComponent implements OnInit {
    public city:string;
  constructor(public common:CommonService) { }
  ngOnInit() {
    console.log(this.common.defaultCity)       //武汉
     this.city=this.commom.defaultCity
  }
}
//html
<p>{{city}}</p>       //页面上拿到武汉
```

或者

```ts
import {CommonService} from '../../services/common.service';

export class HomeComponent implements OnInit {
  constructor(public common:CommonService) { }
  ngOnInit() {
  }
}
//html
<p>{{common.defaultCity}}</p>
```

### 二 改变城市

1. 设置一个改变城市的方法

```ts
 //common.service.ts
 changeCity(value:string){
    this.defaultCity=value;
  }
```

2. 在组件中调用方法

```
 public hotCities:string[]=['北京','上海','广东','重庆']
 
   handleCity(item:string){
    this.common.changeCity(item)
  }
  
  //html
  <button *ngFor="let item of hotCities" class="city" (click)="handleCity(item)">{{item}}</button>
```

3. 设置缓存，数据持久化

```ts
//common.dervice.ts
export class CommonService {
  public defaultCity:string="武汉"
    
  getCity(){
    if(localStorage.getItem("city")){
      this.defaultCity=localStorage.getItem("city")
    }
    return this.defaultCity;
  }
  changeCity(value:string){
    this.defaultCity=value;
    localStorage.setItem("city",value)
  }
}
```

4. 组件中使用缓存，刷新时数据不会改变

```
export class HomeComponent implements OnInit {
   public city:any;
    
  ngOnInit() {
    this.city=this.common.getCity();
  }
}
```

或者

```ts
//common.dervice.ts
export class CommonService {
...
  changeCity(value:string){
    this.defaultCity=value;
  }
}
```

```ts
export class HomeComponent implements OnInit {
 public city:any;
 
  ngOnInit() {
  }
  ngOnCheck(){
    this.city=this.common.getCity();
  }
}
```

### 三 获取dom

使用原生的doc获取doc

```ts
export class AboutComponent implements OnInit {
      public  flag:boolean=true;

  ngOnInit() {
    var app:any=document.getElementById("app");
    app.style.color="red";
    console.log(app)            //获取到dom
    var show:any=document.getElementById("show");
    console.log(show)     //null  获取不到用指令，组件渲染ts的document
  }
}
```

```
<p id="app">about works!</p>
<div id="show" *ngIf="flag">显示</div>
```

解决指令,组件渲染问题

//推荐到ngAfterViewInit()生命周期操作dom

```
  ngAfterViewInit(){
    var show:any=document.getElementById("show");
    console.log(show)      //获取到don
  }
```

#### 2. 使用@ViewChild

//1.给DOM命名

```
<div #app  *ngIf="flag">
    显示
</div>
```

//2.配置ViewChild

```
import { Component, OnInit,ViewChild } from '@angular/core';
export class AboutComponent implements OnInit {
  
  @ViewChild('app',{static:false}) app:any;
  
  ngAfterViewInit(){
   console.log(this.app);
  }
}
```