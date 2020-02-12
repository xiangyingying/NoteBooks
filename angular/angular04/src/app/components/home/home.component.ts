import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public id:String='1234'
  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleClick(){
   let NavigationExtras:NavigationExtras={
     queryParams:{
       "id":this.id
     }
   }
    this.router.navigate(['/detail'],NavigationExtras)
  }
}
