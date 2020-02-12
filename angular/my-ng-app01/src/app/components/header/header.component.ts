import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public arr:object[]=[{name:"html",age:4},{name:"js",age:3}]
  public imageUrl:string="https://c-ssl.duitang.com/uploads/item/201511/20/20151120200552_xXHVy.thumb.400_0.jpeg"
  public msg:string="I like write code"
  constructor() { }
  ngOnInit() {
  }
  handleClick(){
    this.msg="change"
  }
 /*  handleEnter(event:any){
    console.log(event.keyCode)
  } */
  handleEnter(value:string){
    console.log(value)
  }
}
