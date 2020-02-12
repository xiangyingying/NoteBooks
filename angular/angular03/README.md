### 一 父子组件传参

#### 父组件给子组件传参

父组件

```ts
//ts
export class AppComponent {
  title = '我是父组件';
}
//html
//子组件通过属性接收父组件传递过来的参数
<app-header [title]="title"></app-header>
```

子组件

```ts
//ts   子组件引入Input模块
import { Component, OnInit ,Input} from '@angular/core';
 @Input() title:string;   //子组件中@Input接收父组件传过来的数据
 //html
 <p>{{title}}</p>
```

#### 子组件给父组件传参

父组件

```ts
//ts
export class AppComponent {
  run(id:string){
    console.log(id)
  }
}
//html
//子组件通过属性接收父组件传递过来的方法
<app-header [run]="run"></app-header>
```

子组件

```ts
import { Component, OnInit ,Input} from '@angular/core';

export class HeaderComponent implements OnInit {
  @Input() run:any;
  ...
  handleClick(){
    this.run("1234")
  }
}
```

```
//html
<button (click)="handleClick()">向父组件传参</button>
```

### 二 子组件通过@Output向父组件传参

```
 //  泛型：任意类型,解决类，接口，方法的复用性，以及对不特定数据类型的支持  既有类型检查，又能传任意类型
 //  普通指明类型由局限性，只能传入指定类型  
 //  any可以传任意类型，但是放弃了类型检查
class Person<T>{
    emit(msg:T){
        console.log(msg)
    }
}
var p=new Person<string>();
p.emit("hello world")
 
function getData<T>(value:T){
    console.log(value)
}
getData<string>("hello")
getData<number>(113)

class Person<T>{
    print(msg:T){
        console.log(msg)
    }
}
class Student{
    name:String;
    age:Number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
}
var s=new Student("xiang",20);
var p=new Person<string>();
p.print("hwll")
var xiang=new Person<Student>();
xiang.print(s)
```

子组件

子组件导入Output,EventEmitter模块   EventEmitter是泛型类

```
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
```

子组件中实例化EVentEmitter

```
 @Output() private outer=new EventEmitter<string>();
```

子组件通过EventEmitter实例化的对象outer，广播数据

```
export class HeaderComponent implements OnInit {
  ...
  handleClick(){
    this.outer.emit("1002013");
  }
}
```

```
//html
<button (click)="handleClick()">向父组件传参</button>
```

父组件

```
//html
<app-header (outer)="getId($event)"></app-header>
//ts
getId(id:string){
    console.log(id)
  }
```

### 三 在父组件中使用子组件的数据

子组件

```
export class ContentComponent implements OnInit {
	public msg:string="我是子组件"
	run(){      //调用方法
      console.log("hello world")
    }
}
```

父组件

3-1给子组件一个名称

```
<app-content #content></app-content>
```

3-2 父组件中配置

```
//ts
import { Component,ViewChild } from '@angular/core';

export class AppComponent {
  @ViewChild('content',{static:false}) content:any;
}
```

3-3 页面使用

```
<app-content #content></app-content>
<p>{{content.msg}}</p>
<p>{{content.run()}}</p>
```

### 四 生命周期

```
 //初次加载时触发
 constructor() 
 ngOnInit() 
```

```
//ngOnChange() 父子组件传参时触发
constructor()    ////import
ngOnChange()
ngOnInit() 
```

```
ngDoCheck(){
    console.log("ngDoCheck")
  }
  //组件渲染完成之后触发
  ngAfterContentInit(){
    console.log("ngAgerContentInit")
  }
  //试图加载         //import
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  //销毁时触发
  ngOnDestroy(){      ////import
    console.log("ngOnDestroy")
  }
```



![image-20191218112901575](C:\Users\Ying Ya\AppData\Roaming\Typora\typora-user-images\image-20191218112901575.png)





```
https://angular.cn/guide/lifecycle-hooks
```

### 五 装饰器

```
// 装饰器  在不修改类的前提下对类的拓展
function addName(target:any){
    target.prototype.name = "cheng"
}
@addName
class Person{
    getData(){
        console.log("hello world")
    }
}
var p:any= new Person();
console.log(p.name);
```



