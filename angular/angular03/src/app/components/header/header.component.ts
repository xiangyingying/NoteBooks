import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title:string;
  @Input() run:any;
  @Output() private outer=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  handleClick(){
    this.outer.emit("1002013");
  }
}
