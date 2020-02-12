import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { MoringComponent } from './components/moring/moring.component';
import { NightComponent } from './components/night/night.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
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
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'detail',
    component:DetailComponent
  },
  {
    path:"",
    redirectTo:'home',
    //exact 严格匹配  prefixed 前缀 包含/就会匹配
    pathMatch:"full"
  },{
    path:'**',          //匹配没有设置的路由
    component:ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
