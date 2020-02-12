模块

```
ng g module module/about         //创建模块about.module.ts
ng g component module/about      //在module下创建组件，自动注册在about.module.ts中
ng g component module/about/components/file     //自动注册在about.module.ts中
```

```
 exports:[
    AboutComponent
  ]
```

```
import {AboutModule} from './module/about/about.module'
 imports: [
    AboutModule
  ],
```

#### 一 配置路由模块

```
ng g module views/home --routing     //路由模块
ng g component views/home           //配置主组件，自动注册在home.module.ts
```

#### 二 配置模块中的路由

```
//home-routing.module.ts
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
];
```

#### 三 配置主路由

```
//app-routing.module.ts

const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)
  }
];
```

在模块下创建组件，只能在home模块中使用，可以使用图形画界面创建组件，需要手动引入

```
ng g component views/home/components/hello   //自动挂载在home.module.ts中
```

