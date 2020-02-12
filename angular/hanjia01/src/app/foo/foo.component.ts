import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {
  //是要不是null undefined false,空内容，页面的按钮就会有disabled属性
  //只要值不为空，就认为是true
  //只要    
  isButtonDisabled="哈哈"
  constructor() { }

  ngOnInit() {
  }

}
