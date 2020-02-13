import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './home/login/login.component';
//@符号 再后端中叫注解：作用就是创建指定类型对象
import { RouterModule, Routes } from '@angular/router';
import { MsgformatPipe } from './msgformat.pipe';

const appRoutes: Routes = [
  { path: 'foo', component: FooComponent },
  //路由路径、组件和路由数据
  { path: 'login/:id', component: LoginComponent ,data: { title: 'login信息' }},
];
@NgModule({
  //声明模块资源：组件，指令，服务
  declarations: [
    AppComponent,
    FooComponent,
    HighlightDirective,
    LoginComponent,
    MsgformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
