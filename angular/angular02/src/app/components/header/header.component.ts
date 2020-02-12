import { Component, OnInit, Input } from '@angular/core';
import cartList from './data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() title:string
    public msg:string="hello"
    public checked:boolean=true;
    public cartList:any=cartList
  constructor() {
    console.log(cartList)
   }

  ngOnInit() {
    //相当于onLoad(),mounted()声明周期
    console.log(2)
  }
 /*  handleChange(e){
     console.log(e)
  } */
  handleChange(){
    console.log(this.checked)
  }
}
