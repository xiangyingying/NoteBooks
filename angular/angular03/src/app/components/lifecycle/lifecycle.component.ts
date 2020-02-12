import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  @Input() title:string;
  constructor() { 
    console.log("constructor")
  }
  ngOnChange(){
    console.log("ngOnChange")
  }
  ngOnInit() {
    console.log("ngOnInit")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  //组件渲染完成之后触发
  ngAfterContentInit(){
    console.log("ngAgerContentInit")
  }
  //试图加载
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}
