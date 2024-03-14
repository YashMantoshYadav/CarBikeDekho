import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
declare var $: any

@Component({
  selector: 'app-vehicle-fuel-type',
  templateUrl: './vehicle-fuel-type.component.html',
  styleUrls: ['./vehicle-fuel-type.component.css']
})
export class VehicleFuelTypeComponent implements OnInit {

  sideNavStatus: boolean = false
  add: boolean = false
  update: boolean = false
  submitted: boolean = false
  fuelTypeForm: FormGroup | any


  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.showFuelType()

  }

  //open modal
  openModal() {
    this.add = true
    this.update = false
    $('#exampleModal').modal('show')

  }

  closeModal() {
    $('#exampleModal').modal('hide')

  }

  //vehicle Fuel Type all list
  allFuelTypeList: any
  async showFuelType() {
    try {
      this.allFuelTypeList = await this.common.getAllVehicleFuelTypeComm()
      console.log("Vehicle All Fuel Type", this.allFuelTypeList)

    } catch (error) {

    }
  }

  //add Fuel Type
  addFuel(){

  }

  updateModal() {
    this.update = true
    this.add = false
    $('#exampleModal').modal('show')

  }

  updateFuel(){
    
  }

  deleteFuelType() {
    alert("Comming Soon.....")
  }

}
