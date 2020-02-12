### 一 双向数据绑定

##### 1-1   app.module.js 配置

```ts
import {FormsModule} from '@angular/forms'
...
imports: [
    ...
    FormsModule
  ],
```

##### 1-2 组件中使用

```
<input type="text" [(ngModel)]="msg">
<p>{{msg}}</p>
```

数据定义在对应组件的ts中

```
export class HeaderComponent implements OnInit {
    public msg:string="hello world"
  constructor() { }

  ngOnInit() {
  }

}
```

##### 1-3 (change)

```
<input type="text" [(ngModel)]="msg" (change)="handleChange($event)">
//ts
 handleChange(e){
     console.log(e.target)
  }
```

##### 1-4 (ngModelChange)    //只要ngMode依赖的值改变，就会触发，即按下键盘就触发

```
<input type="text" [(ngModel)]="msg" (ngModelChange)="handleChange()">
//ts
handleChange(){
     console.log(1)
  }
```

##### 1-5 checkbox

```
tips:[(ngModel)]="msg" 一定要写在(change)="handleChange($event)"的前面
```

```
<input type="checkbox" [(ngModel)]="checked" (ngModelChange)="handleChange()">
//ts
handleChange(){
     console.log(this.checked)
  }
```

### 二 渲染本地数据

1-1 新建一个data.ts引入本地数据，导出数据

1-2  ts引入数据

```ts
 import cartList from './data';
  export class HeaderComponent implements OnInit {
    public cartList:any=cartList
  constructor() {
    console.log(cartList)
   }
```

1-3组件渲染

```
<div *ngFor="let item of cartList">{{item.productName}}</div>
```

### 三 ant-design 自动构造

```
ng add ng-zorro-antd
```

![img](https://img.alicdn.com/tfs/TB19fFHdkxz61VjSZFtXXaDSVXa-680-243.svg)

locale code  选择zh_CN,其他选择y

```
直接在官网上使用
<button nz-button nzType="primary">Primary</button>
```

### 四 发送http请求

5-1 app.modul.ts配置

```
import {HttpClientModule} from '@angular/common/http'

imports: [
 ...
    HttpClientModule,
  ],
```

5-2 在发送http请求的组件中配置

```ts
import {HttpClient} from '@angular/common/http'

export class ContentComponent implements OnInit {
    public programs:any;
  constructor(public http:HttpClient) { }
  ngOnInit() {
    var url:string="http://192.168.14.15:5000/dj/program?rid=336355127"
    this.http.get(url).subscribe(res=>{
      console.log(res['programs'])
      this.programs=res['programs']
    })
  }
```

```
tips:ngOnInit() {}   //相当于onLoad(),mounted()生命周期
```

### 五 父组件向子组件传值

##### 6-1 app-component-ts

```
export class AppComponent {
  public title:string="你的小可爱突然出现"
}
```

##### 6-2 在父组件中，子组件通过属性接收父组件传递过来的参数

```
<app-header [title]="title"></app-header>
```

##### 6-3 在子组件中注册引入Input模块

```
import { Component, OnInit, Input } from '@angular/core';

export class HeaderComponent implements OnInit {
    @Input() title:string   
   }
```

##### 6-4 使用

```
<p>{{title}}</p>
```

