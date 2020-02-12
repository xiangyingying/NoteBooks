import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '我是父组件';
 /*  run(id:string){
    console.log(id)
  } */
 /*  getId(id:string){
    console.log(id)
  } */
  @ViewChild('content',{static:false}) content:any;
 /*  constructor(){
    this.content.run()
  } */
}
