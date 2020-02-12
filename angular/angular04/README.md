

angular-cli中选择路由，之后app.component.html会多出

```
<router-outlet></router-outlet>
//相当于
<router-view></router-view>
```

### 一 一级路由

新建3个组件

```
//app-routing.module.ts
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path:'home',      //注意路径没有/
    component:HomeComponent
  },{
    path:'news',
    component:NewsComponent
  },{
    path:'about',
    component:AboutComponent
  }
];

```

### 二 路由重定向

放在普通后面

```
{
    path:"",
    redirectTo:'home',
    //exact 严格匹配  prefixed 前缀 包含/就会匹配
    pathMatch:"full"
  }
```

### 三 不匹配路由的处理

放在普通后面

设置没有的路由,设置一个组件写404

```
<p>404页面没有找到</p>
```

```
{
    path:'**',          //匹配没有设置的路由
    component:ErrorComponent
  },
```

### 四 routerLinkActive设置routerLink默认选中的路由

//app.component.html

```
<ul>
  <li><a [routerLink]="['/home']" routerLinkActive="router-link-active">home</a></li>
  <li><a [routerLink]="['/news']" routerLinkActive="router-link-active">news</a></li>
  <li><a [routerLink]="['/about']" routerLinkActive="router-link-active">about</a></li>
</ul>
<router-outlet></router-outlet>
```

```
//scss
.router-link-active{
    color: red;
}
```

### 五 get传值

```
//ts
export class HomeComponent implements OnInit {
  public id:String='1234'
}
```

1.跳转

```
<a [routerLink]="['/detail']" [queryParams]="{id:id}">跳转到detail</a>
```

2.接收  this.route.queryParams

```
//导入正在显示的路由模块
import {ActivatedRoute} from '@angular/router'
export class DetailComponent implements OnInit {
//构造函数中配置
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{    //是一个回调函数，通过subscribe触发  常用方法
      console.log(res)
    })
    或
   /* let data=await this.route.queryParams       //this.route.queryParams是一个promise
      console.log(data["_value"])  */
  }

}
```

### 六 动态路由

配置

```
{
    path:'detail/:id',
    component:DetailComponent
  },
  
```

传值

```
<a [routerLink]="['/detail',id]">跳转到detail</a>
或
<a routerLink="/detail/{{id}}">跳转到detail</a>
```

接收   this.route.params

```
import {ActivatedRoute} from '@angular/router'
export class DetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{    
      console.log(res)
    })
}
```

### 七 事件跳转

 this.router.navigate

#### 1. 动态路由的事件跳转

```
{
    path:'detail/:id',
    component:DetailComponent
  },
  
//html
<button (click)="handleClick()">跳转到detail</button>

//ts
import {Router} from '@angular/router'
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  handleClick(){
    this.router.navigate(['/detail',this.id])
  }
}

```

接收

```
...
  ngOnInit() {
    this.route.params.subscribe(res=>{   
      console.log(res)
    })
}
```

#### 2. get传值的事件跳转

```
//导入NavigationExtras
import {Router,NavigationExtras} from '@angular/router'

export class HomeComponent implements OnInit {
  public id:String='1234'
  constructor(private router:Router) { }

  handleClick(){
   let NavigationExtras:NavigationExtras={
     queryParams:{
       "id":this.id
     }
   }
    this.router.navigate(['/detail'],NavigationExtras)
  }
}
```

接收

```
  async ngOnInit() {
     this.route.queryParams.subscribe(res=>{
      console.log(res)
    }) 
  }
```

### 八 子路由和重定向

```
{
    path:'news',
    component:NewsComponent,
    children:[
      {
        path:"moring",
        component:MoringComponent
      },{
        path:'night',
        component:NightComponent
      },{
        path:"",
        redirectTo:"moring",
        pathMatch:"full"
      }
    ]
  },
```

对应父路由必须加

```
<router-outlet></router-outlet>
```





