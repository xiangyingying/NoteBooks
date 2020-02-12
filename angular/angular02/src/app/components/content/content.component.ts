import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    public programs:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    var url:string="http://192.168.14.15:5000/dj/program?rid=336355127"
    this.http.get(url).subscribe(res=>{
      console.log(res['programs'])
      this.programs=res['programs']
    })
  }

}
