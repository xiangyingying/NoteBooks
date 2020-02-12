import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public city:any;
    public hotCities:string[]=['北京','上海','广东','重庆']
  constructor(public common:CommonService) { }

  ngOnInit() {
    /* this.city=this.common.defaultCity;
    console.log(this.common.defaultCity) */
    this.city=this.common.getCity();
  }
  handleCity(item:string){
    console.log(item)
    this.common.changeCity(item)
  }
 /*  ngOnCheck(){
    this.city=this.common.getCity();
  } */
}
