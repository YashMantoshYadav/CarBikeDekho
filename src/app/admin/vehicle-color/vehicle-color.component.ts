import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-vehicle-color',
  templateUrl: './vehicle-color.component.html',
  styleUrls: ['./vehicle-color.component.css']
})
export class VehicleColorComponent implements OnInit {

  sideNavStatus: boolean = false
  add: boolean = false
  update: boolean = false
  vehicleColorForm: FormGroup | any
  submitted: boolean = false

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.showVehicleColor()
    this.createVehicleColorForm()

  }

  //vehicle Color Type all list
  allColorTypeList: any
  async showVehicleColor() {
    try {
      this.allColorTypeList = await this.common.getAllVehicleColorTypeComm()
      console.log("Vehicle All Color Type", this.allColorTypeList)

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

  //openModal
  openModal() {
    this.add = true
    this.update = false
    $('#exampleModal').modal('show')
  }

  //create form
  createVehicleColorForm() {
    this.vehicleColorForm = new FormGroup({
      colorTypeName: new FormControl('', Validators.required)
    })
  }

  //form Control
  get f() {
    return this.vehicleColorForm.controls
  }



  //add new color
  async addVehicleColor() {
    try {
      let color: any
      this.submitted = true
      let data: any

      if (this.vehicleColorForm.invalid) {
        return
      }

      color = this.vehicleColorForm.value.colorTypeName

      data = await this.common.addVehicleColorComm(color)

      if (data.Status == "Success") {

        $('#exampleModal').modal('hide')

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });

        this.showVehicleColor()

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

  //update modal and patch value
  colorId: any
  updateModal(item: any) {
    this.update = true
    this.add = false
    this.colorId = item.id

    $('#exampleModal').modal('show')

    this.vehicleColorForm.patchValue({
      colorTypeName: item.color
    })


  }

  //update Vehicle Color
  async updateVehicleColor() {
    try {
      this.submitted = true
      let color: any
      let data: any
      if (this.vehicleColorForm.invalid) {
        return
      }

      color = this.vehicleColorForm.value.colorTypeName;

      data = await this.common.updateVehicleColorComm(this.colorId, color)

      if (data.Status == "Success") {

        $('#exampleModal').modal('hide')

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2500
        });
        this.showVehicleColor()

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


  //Delete Vehicle color
  async deleteColorType(id: number) {

    try {
      let colorId = id
      let data: any

      if (confirm("Do you wants to Delete ?")) {
        console.log("access")
      }
      else {
        console.log("denied")
        return
      }

      data = await this.common.deleteVehicleColorComm(colorId)

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

        this.showVehicleColor()

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

}
