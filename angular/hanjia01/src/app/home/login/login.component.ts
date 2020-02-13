import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  callPhone(value){
    console.log(value)
  }
  currentTime=new Date();
  public id:string;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    //获取路由中的 参数信息
    this.id = this.route.snapshot.paramMap.get('id')
      
    //获取路由中的data 信息
    console.log(this.route.snapshot.data.title)
      
	//获取路由参数的信息
    console.log(this.route.snapshot.queryParams)
     //获取当前路径，回退
    console.log(this.location.path())
    this.location.back();
  }

}
