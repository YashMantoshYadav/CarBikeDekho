import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-vehicle-launch-year',
  templateUrl: './vehicle-launch-year.component.html',
  styleUrls: ['./vehicle-launch-year.component.css']
})
export class VehicleLaunchYearComponent implements OnInit {

  sideNavStatus: boolean = false
  launchYearForm: FormGroup | any
  add: boolean = false
  update: boolean = false
  submitted: boolean = false


  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.showLaunchYear()
    this.createLaunchForm()
  }


  //vehicle Launch Year all list
  allLaunchYearList: any
  async showLaunchYear() {
    try {
      this.allLaunchYearList = await this.common.getAllVehicleLaunchYearComm()
      console.log("Vehicle All Launch Year", this.allLaunchYearList)

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
    this.launchYearForm.controls['launchYear'].setValue('')
    this.submitted = false
  }

  //create launch form
  createLaunchForm() {
    this.launchYearForm = new FormGroup({
      launchYear: new FormControl('', Validators.required)
    })
  }

  //form control
  get f() {
    return this.launchYearForm.controls
  }

  //add Launch year
  async addyear() {
    try {
      let data: any
      this.submitted = true

      if (this.launchYearForm.invalid) {
        console.log("empty")
        return
      }

      let year = this.launchYearForm.value.launchYear;

      data = await this.common.addNewLaunchydarComm(year)
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

        $('#exampleModal').modal('hide')
        this.closeModal()
        this.allLaunchYearList()

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

  //open update modal
  launchYearId: any
  updateModal(item: any) {

    this.launchYearId = item.id
    let year = item.year

    this.add = false
    this.update = true

    $('#exampleModal').modal('show')

    this.launchYearForm.patchValue({
      launchYear: year
    })

  }

  //update Vehicle Launch Year
  async updateYear() {
    try {
      let data: any
      this.submitted = true
      let year = this.launchYearForm.value.launchYear

      data = await this.common.updateLaunchYearComm(this.launchYearId, year)
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

        this.showLaunchYear()

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

  async deleteLaunchYear(id: any) {

    try {
      let data: any

      if (confirm("Do you wants to Delete?")) {
        console.log("access")
      }
      else {
        console.log("denied")
      }

      data = await this.common.deleteLaunchYearComm(id)

      if (data.Status == "Success") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });

        this.showLaunchYear()

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

}
