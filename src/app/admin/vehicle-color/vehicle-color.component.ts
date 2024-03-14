import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
declare var $: any

@Component({
  selector: 'app-vehicle-color',
  templateUrl: './vehicle-color.component.html',
  styleUrls: ['./vehicle-color.component.css']
})
export class VehicleColorComponent implements OnInit {

  sideNavStatus: boolean = false

  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.showVehicleColor()
  }

  //openModal
  openModal() {
    $('#exampleModal').modal('show')
  }

    //vehicle Color Type all list
    allColorTypeList: any
    async showVehicleColor() {
      try {
        this.allColorTypeList = await this.common.getAllVehicleColorTypeComm()
        console.log("Vehicle All Color Type", this.allColorTypeList)
  
      } catch (error) {
  
      }
    }

  update(){
    alert("Comming Soon....")
  }


  deleteColorType(){
    alert("Comming Soon....")
  }

}
