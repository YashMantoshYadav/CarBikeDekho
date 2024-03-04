import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()sideNavToggle = new EventEmitter<boolean>();
  menuStatus:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  side_NavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus)
    console.log(this.sideNavToggle)
  }

}
