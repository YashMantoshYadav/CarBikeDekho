import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  sideNavStatus: boolean = false
  addVehicleForm: FormGroup | any
  submitted: boolean = false
  add:boolean=false
  update:boolean=false


  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.getAllData()
    this.getAllTypeData()
    this.getAllbrandData()
    this.getAllLaunchYearData()
    this.getAllFuelTypeData()
    this.getAllColorTypeData()

    this.createForm()


  }


  createForm() {
    this.addVehicleForm = new FormGroup({
      vehicleType: new FormControl('', Validators.required),
      launchYear: new FormControl('', Validators.required),
      brandName: new FormControl('', Validators.required),
      fuelTypeName: new FormControl('', Validators.required),
      descriptionName: new FormControl('', Validators.required),
      colorName: new FormControl('', Validators.required),
      priceName: new FormControl('', Validators.required),
      ratingName: new FormControl('', Validators.required),
      imageLinkname: new FormControl('', Validators.required),
      vehicleName: new FormControl('',Validators.required)

    })
  }

  //open add vehicle modal
  openModal() {
    this.add=true
    this.update=false
    $('#exampleModal').modal('show');

  }


  //form control
  get f() {
    return this.addVehicleForm.controls;
  }


  //1.vehicle all list
  allVehicleList: any
  async getAllData() {
    try {


      let data = await this.common.getAllVehicleComm()

      if (data.Status == "Success") {
        this.allVehicleList = data.data
        console.log("Vehicle all list", this.allVehicleList)
      }


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
      console.log(error)
    }

  }

  //2.add new Vehicle
  async addNewVehicle() {
    try {
       console.log(this.addVehicleForm.value)
       
      this.submitted = true

      if (this.addVehicleForm.invalid) {
        console.log("empty")
        return
      }

      let type = this.addVehicleForm.value.vehicleType;
      let year = this.addVehicleForm.value.launchYear;
      let brand = this.addVehicleForm.value.brandName;
      let fuel = this.addVehicleForm.value.fuelTypeName;
      let description = this.addVehicleForm.value.descriptionName;
      let color = this.addVehicleForm.value.colorName;
      let rating = this.addVehicleForm.value.ratingName;
      let image = this.addVehicleForm.value.imageLinkname;
      let price = this.addVehicleForm.value.priceName;
      let name = this.addVehicleForm.value.vehicleName;

      console.log(type,year,brand,fuel,description,color,rating,image,price,name)

    


      let data = await this.common.addNewVehicleComm(type, year, brand, fuel, description, color, rating, image, price, name)
      console.log(data)
      if (data.Status == "Success") {
        this.getAllData()
        $('#exampleModal').modal('hide');

        //sweet alert popup
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Data has been Inserted Successfully!",
          showConfirmButton: false,
          timer: 2500
        });

        this.closeModal()
      }

    } catch (error) {
      console.log(error)
    }

  }

  closeModal() {
    this.addVehicleForm.controls['vehicleType'].setValue('');
    this.addVehicleForm.controls['launchYear'].setValue('');
    this.addVehicleForm.controls['brandName'].setValue('');
    this.addVehicleForm.controls['fuelTypeName'].setValue('');
    this.addVehicleForm.controls['descriptionName'].setValue('');
    this.addVehicleForm.controls['ratingName'].setValue('');
    this.addVehicleForm.controls['imageLinkname'].setValue('');
    this.addVehicleForm.controls['priceName'].setValue('');
    this.addVehicleForm.controls['colorName'].setValue('');
    this.addVehicleForm.controls['vehicleName'].setValue('');
    this.submitted = false
  }


  //3.Delete vehicle from list

  async deleteVehicle(item: any) {
    var vehicleId = item
    try {

      if (confirm("Do You wants to Delete?")) {
        console.log("access")
      }
      else {
        console.log("denied")
        return;
      }

      let data = await this.common.deleteVehicleComm(vehicleId)
      if (data.Status == "Success") {
        this.getAllData()

        //sweet alert popup
        Swal.fire({
          icon: "success",
          title: "Data has been Deleted Successfully!",
          showConfirmButton: false,
          timer: 2500
        })

      }


    } catch (error) {

    }

  }
  //4.Update Vehicle From list
  updateVehicleModal(item:any) {
    this.update=true
    this.add=false
    $('#exampleModal').modal('show');

    // console.log(item)
    this.addVehicleForm.patchValue({
      vehicleType:item.type,
      launchYear:item.launch_year,
      brandName:item.brand,
      fuelTypeName:item.fuel_type,
      descriptionName:item.description,
      ratingName:item.rating,
      imageLinkname:item.image,
      priceName:item.price,
      colorName:item.color,
      vehicleName:item.vehicle_name

    })

  
  }

  updateVehicleDetails(){
    this.submitted=true

    let type = this.addVehicleForm.value.vehicleType;
    let year = this.addVehicleForm.value.launchYear;
    let brand = this.addVehicleForm.value.brandName;
    let fuel = this.addVehicleForm.value.fuelTypeName;
    let description = this.addVehicleForm.value.descriptionName;
    let color = this.addVehicleForm.value.colorName;
    let rating = this.addVehicleForm.value.ratingName;
    let image = this.addVehicleForm.value.imageLinkname;
    let price = this.addVehicleForm.value.priceName;
    let name = this.addVehicleForm.value.vehicleName;

    // console.log(type,year,brand,fuel,description,color,rating,image,price,name)

    
    
  }

  //5. View Vehicle Detail
  viewVehicleDetails(item:any) {
    console.log(item)
    alert("Comming Soon......");

  }



  //vehicle type all list
  allTypeList: any
  async getAllTypeData() {
    try {
      this.allTypeList = await this.common.getAllVehicleTypeComm()
      console.log("Vehicle All Type", this.allTypeList)
    } catch (error) {

    }
  }


  //vehicle brand all list
  allBrandList: any
  async getAllbrandData() {
    try {
      this.allBrandList = await this.common.getAllVehicleBrandComm()
      console.log("Vehicle All Brand", this.allBrandList)

    } catch (error) {

    }
  }

  //vehicle Launch Year all list
  allLaunchYearList: any
  async getAllLaunchYearData() {
    try {
      this.allLaunchYearList = await this.common.getAllVehicleLaunchYearComm()
      console.log("Vehicle All Launch Year", this.allLaunchYearList)

    } catch (error) {

    }
  }

  //vehicle Fuel Type all list
  allFuelTypeList: any
  async getAllFuelTypeData() {
    try {
      this.allFuelTypeList = await this.common.getAllVehicleFuelTypeComm()
      console.log("Vehicle All Fuel Type", this.allFuelTypeList)

    } catch (error) {

    }
  }


  //vehicle Color Type all list
  allColorTypeList: any
  async getAllColorTypeData() {
    try {
      this.allColorTypeList = await this.common.getAllVehicleColorTypeComm()
      console.log("Vehicle All Color Type", this.allColorTypeList)

    } catch (error) {

    }
  }




}
