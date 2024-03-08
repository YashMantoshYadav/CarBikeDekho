import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
declare var $: any;


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  sideNavStatus: boolean = false
  

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  allVehicleList: any
  async getAllData() {
    try {

      this.allVehicleList = await this.common.getAllVehicleComm()
      console.log(this.allVehicleList)

    } catch (error) {
      
    }

  }


  //open add vehicle modal
  openModal(){
    $('#exampleModal').modal('show');

  }

}
