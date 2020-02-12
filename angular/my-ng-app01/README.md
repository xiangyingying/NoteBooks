### 一 新建组件

```
ng g component components/header
//生成四个文件,这种方式会自动注册组件
```

```
ctrl+shift+`可以新建终端
```

![image-20191211134603261](C:\Users\Ying Ya\AppData\Roaming\Typora\typora-user-images\image-20191211134603261.png)



tips:所有的组件必须要在app.module.ts里面注册

```
@NgModule({
  /* 注册组件 */
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### 二 插件

```
Angular Snippets (Version 8)
```

### 三 指令*ngFor、 *ngIf

```
<div *ngFor="let item of arr">{{item.name}}</div>
<div *ngIf="isShow">哈罗</div>
```

### 四 属性绑定

```
<img [src]="imageUrl" alt="">
```

### 五 事件

#### 1 点击事件(click)

```
<p (click)="handleClick()">{{msg}}</p>
```

```
//ts
export class HeaderComponent implements OnInit {
 ...
  public msg:string="I like write code"
  constructor() { }
  ngOnInit() {
  }
  handleClick(){
    this.msg="change"
  }
}
```

#### 2 用户输入事件

//获取键盘码

```
<input type="text" (keyup)="handleEnter($event)">
```

```
//ts
handleEnter(event:any){
    console.log(event.keyCode)
  }
```

//获取Input输入值

```
<input #box type="text" (keyup.enter)="handleEnter(box.value)">
```

```
//ts
 handleEnter(value:string){
    console.log(value)
  }
```



