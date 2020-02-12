import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
//导出AppComponent组件
export class AppComponent {
  title = '寒假';
  count=0;
  //声明一个方法
  increment=()=>{
    this.count++;
  }
}
