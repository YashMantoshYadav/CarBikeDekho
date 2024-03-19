import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
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
    this.createFuelForm()

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


  //open modal
  openModal() {
    this.add = true
    this.update = false
    this.fuelTypeForm.controls['fuelTypeName'].setValue('')
    $('#exampleModal').modal('show')
  }

  //close Modal
  closeModal() {
    this.fuelTypeForm.controls['fuelTypeName'].setValue('')
    this.submitted = false
    $('#exampleModal').modal('hide')

  }

  //create form
  createFuelForm() {
    this.fuelTypeForm = new FormGroup({
      fuelTypeName: new FormControl('', Validators.required)
    })
  }

  //Form Control
  get f() {
    return this.fuelTypeForm.controls
  }


  //add Fuel Type
  async addFuel() {
    try {
      let data: any
      let fuelType: string
      this.submitted = true

      if (this.fuelTypeForm.invalid) {
        return
      }

      fuelType = this.fuelTypeForm.value.fuelTypeName

      data = await this.common.VehiclFuelTypeAddComm(fuelType)

      if (data.Status == "Success") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Data has been Inserted Successfully!",
          showConfirmButton: false,
          timer: 2500
        });

        $('#exampleModal').modal('hide')
        this.showFuelType()

      }

      if (data.Status == "error") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });
        return
      }

    } catch (error: any) {
      console.log(error)
    }

  }

  //update fuel type
  fuelId: any
  updateModal(item: any) {
    this.fuelId = item.id
    this.update = true
    this.add = false
    $('#exampleModal').modal('show')

    this.fuelTypeForm.patchValue({
      fuelTypeName: item.fuel
    })

  }

  async updateFuel() {

    try {
      this.submitted = true
      let fuel: any
      let data: any

      if (this.fuelTypeForm.invalid) {
        return
      }

      fuel = this.fuelTypeForm.value.fuelTypeName;

      data = await this.common.VehicleFuelTypeUpdateComm(this.fuelId, fuel)

      if (data.Status == "Success") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });

        $('#exampleModal').modal('hide')

        this.showFuelType()

      }

      if (data.Status == "error") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });
        return

      }

    } catch (error) {
      console.log(error)

    }

  }

  async deleteFuelType(id: any) {
    try {
      const FuelId = id
      let data: any

      if(confirm("Do you wants to Delete?")){
        console.log("access")
      }

      else{
        console.log("denied")
      }

      data = await this.common.VehicleFuelTypeDeleteComm(FuelId)
      if(data.Status=="Success"){

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });

        this.showFuelType()
      }

      if(data.Status=="error"){

         //sweet alert popup
         Swal.fire({
          // position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });
        return
      }

    } catch (error:any) {

      console.log(error)

    }
  }

}
