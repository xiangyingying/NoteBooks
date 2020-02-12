import { Component, OnInit,ViewChild } from '@angular/core';
import {CommonService} from '../../services/common.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
      public  flag:boolean=true;
      @ViewChild('app',{static:false}) app:any;
  constructor(public common:CommonService) { }

  ngOnInit() {
    var app:any=document.getElementById("app");
    app.style.color="red";
    console.log(app)
    var show:any=document.getElementById("show");
    console.log(show)     //null 获取不到用指令渲染的document
  }
  ngAfterViewInit(){
    //推荐到此生命周期操作dom
    var show:any=document.getElementById("show");
    console.log(show)      //获取到don
  }

}
