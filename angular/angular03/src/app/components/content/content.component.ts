import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
public msg:string="我是子组件"
  constructor() { }

  ngOnInit() {
  }
run(){
  console.log("hello world")
}
}
