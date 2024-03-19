import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent implements OnInit {

  sideNavStatus: boolean = false
  vehicleTypeForm: FormGroup | any
  update: boolean = false
  add: boolean = false

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.getAllTypeData()
    this.createForm()
  }

  //vehicle type all list
  allTypeList: any
  async getAllTypeData() {
    try {
      this.allTypeList = await this.common.getAllVehicleTypeComm()
      console.log("Vehicle All Type", this.allTypeList)


      //dataTable function 
      $('#example').DataTable().destroy()
      $(document).ready(function () {
        $('#example').DataTable({
          layout: {
            top1: {
              searchBuilder: {
                logic: 'OR'
              }
            },
            
          },
        });
      })
      
    } catch (error) {

    }
  }

  //open modal
  openModal() {
    this.update = false
    this.add = true
    $('#exampleModal').modal('show')
  }


  //close modal
  closeModal() {
    this.vehicleTypeForm.controls['vehicleType'].setValue('')
    this.submitted = false
  }

  //create form
  createForm() {
    this.vehicleTypeForm = new FormGroup({
      vehicleType: new FormControl('', Validators.required)
    });
  }

  //add new vehicle type
  submitted: boolean = false
  async formSubmit() {
    try {
      this.submitted = true

      if (this.vehicleTypeForm.invalid) {
        return
      }

      let type = this.vehicleTypeForm.value.vehicleType

      let data = await this.common.addNewVehicleTypeComm(type)

      if (data.Status == "Success") {
        $('#exampleModal').modal('hide')

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Data has been Inserted Successfully!",
          showConfirmButton: false,
          timer: 2500
        });
        this.closeModal()
        this.getAllTypeData()

      }

      if(data.Status=="error"){

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

  //form control
  get f() {
    return this.vehicleTypeForm.controls

  }


  //update open modal
  vehicleId: any
  updateOpenModal(item: any) {
    this.vehicleId = item.id

    $('#exampleModal').modal('show')
    this.update = true
    this.add = false

    this.vehicleTypeForm.patchValue({
      vehicleType: item.type
    })

  }

  //update vehicle type
  async updateVehicleType() {
    try {
      this.submitted = true

      if (this.vehicleTypeForm.invalid) {
        return
      }

      let type = this.vehicleTypeForm.value.vehicleType

      let result = await this.common.updateVehicleTypeComm(this.vehicleId, type)

      if (result.Status == "Success") {

        $('#exampleModal').modal('hide')

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Data has been Updated Successfully!",
          showConfirmButton: false,
          timer: 2500
        });

        this.getAllTypeData()

      }

      if(result.Status=="error"){

         //sweet alert popup
         Swal.fire({
          // position: "top-end",
          icon: "success",
          title: result.message,
          showConfirmButton: false,
          timer: 2500
        });

        return

      }

    } catch (error: any) {
      console.log(error.message)

    }

  }


  //delete Vehicle Type
  async deleteVehicleType(id: any) {
    let data: any
    try {
      let typeId = id;

      if (confirm("Do You wants to Delete?")) {
        console.log("access")
      }
      else {
        console.log("denied")
        return;
      }

      data = await this.common.deleteVehicleType(typeId)

      console.log(data)

      if (data.Status == "Success") {

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Data has been Deleted Successfully!",
          showConfirmButton: false,
          timer: 2500
        });

        this.getAllTypeData()

      }

      if(data.Status=="error"){

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

    }

  }

}
