import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  async ngOnInit() {
    /* this.route.queryParams.subscribe(res=>{
      console.log(res)
    }) */
   /*  let data=await this.route.queryParams
    console.log(data) */

   /*  this.route.params.subscribe(res=>{
      console.log(res)
    }) */
    this.route.queryParams.subscribe(res=>{
      console.log(res)
    })
  }

}
