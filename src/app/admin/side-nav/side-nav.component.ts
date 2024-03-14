import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus:boolean=false

  list=[
    {
      number:'1',
      name:'home',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'Analytics',
      icon:'fa-solid fa-arrow-up-right-from-square'
    },
    {
      number:'3',
      name:'Products',
      icon:'fa-solid fa-arrow-up-right-from-square'
    },
    {
      number:'4',
      name:'Order',
      icon:'fa-solid fa-arrow-up-right-from-square'
    },
    {
      number:'5',
      name:'Setting',
      icon:'fa-solid fa-arrow-up-right-from-square'
    },
    {
      number:'6',
      name:'About',
      icon:'fa-solid fa-circle-info'
    },
    {
      number:'7',
      name:'Contact',
      icon:'fa-solid fa-phone'
    }

    // <i class="fa-solid fa-arrow-up-right-from-square"></i>
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
