import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';

declare var $: any

@Component({
  selector: 'app-vehicle-brand',
  templateUrl: './vehicle-brand.component.html',
  styleUrls: ['./vehicle-brand.component.css']
})
export class VehicleBrandComponent implements OnInit {

  sideNavStatus: boolean = false
  brandForm: FormGroup | any
  update: boolean = false
  add: boolean = false
  submitted: boolean = false

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.showVehicleBrand()
    this.createBrandForm()
  }

  //vehicle brand all list
  allBrandList: any
  async showVehicleBrand() {
    try {
      this.allBrandList = await this.common.getAllVehicleBrandComm()
      console.log("Vehicle All Brand", this.allBrandList)

    } catch (error) {

    }
  }

  //open modal
  openModal() {
    this.add = true
    this.update = false
    $('#exampleModal').modal('show')
  }

  //close modal
  closeModal() {
    this.brandForm.controls['VehicleBrand'].setValue('')
    this.submitted = false
  }

  //create form
  createBrandForm() {
    this.brandForm = new FormGroup({
      VehicleBrand: new FormControl('', Validators.required)
    })
  }

  //form Control
  get f() {
    return this.brandForm.controls
  }

  //add new Brand
  async addBrand() {
    try {

      let data: any
      this.submitted = true

      if (this.brandForm.invalid) {
        console.log("error")
        return
      }
      let brand = this.brandForm.value.VehicleBrand;

      data = await this.common.addNewBrandComm(brand)
      console.log(data)
      if (data.Status == "Success") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Data has been Inserted Successfully!",
          showConfirmButton: false,
          timer: 2500
        });

        this.closeModal()
        $('#exampleModal').modal('hide')
        this.showVehicleBrand()

      }

      if (data.Status == "error") {
        //sweet alert popup
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 3500
        });
        return
      }

    } catch (error: any) {
      console.log(error.message)
    }
  }



  //update Modal open
  brandId: any
  updateModal(item: any) {
    this.brandId = item.id;
    this.update = true
    this.add = false
    $('#exampleModal').modal('show')

    this.brandForm.patchValue({
      VehicleBrand: item.brand
    })

  }

  //submit update form
  async updateBrand() {
    try {
      let data: any
      let brand = this.brandForm.value.VehicleBrand;
      this.submitted = true

      if (this.brandForm.invalid) {
        console.log("empty")
        return
      }

      data = await this.common.updateBrandName(brand, this.brandId)

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
        this.showVehicleBrand()

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
      console.log(error.message)
    }
  }

  async deleteBrand(id: number) {
    try {

      if (confirm("Do you wants to Delete?")) {
        console.log("access")
      }

      else {
        console.log("denied")
        return
      }

      let data: any
      data = await this.common.deleteVehicleBrandComm(id)

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
        this.showVehicleBrand()
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
      console.log(error.message)
    }
  }

}
