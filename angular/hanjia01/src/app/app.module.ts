import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { HighlightDirective } from './highlight.directive';
//@符号 再后端中叫注解：作用就是创建指定类型对象
@NgModule({
  //声明模块资源：组件，指令，服务
  declarations: [
    AppComponent,
    FooComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
