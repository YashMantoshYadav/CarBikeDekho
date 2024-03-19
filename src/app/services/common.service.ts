import { Injectable } from '@angular/core';
import { MiddleService } from './middle.service';
import { addBrand, addColorTypeModal, addFuelTypeModal, addNewVehicle, addyearModal, deleteType, deleteVehicle, updateBrand, updateColorModal, updateFuelTypeModal, updateYearModal, vehiclType } from '../admin/modal/modal';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private middle: MiddleService) { }


  //1.get all vehicle data
  async getAllVehicleComm() {
    let val: any
    try {
      await this.middle.vehicleList().then((result: any) => {
        if (result.Status == 'Success') {
          val = result
        }
      })
      return val
    }
    catch (error: any) {
      // return val = JSON.parse(JSON.stringify(error["error"]))
      console.log(error)
    }
  }

  //2.add new vehicle
  async addNewVehicleComm(type: any, year: any, brand: any, fuel: any, description: any, color: any, rating: any, image: any, price: any, vehiclename:any) {
    try {

      let data: any

      let inputData = new addNewVehicle();
      inputData.type = type;
      inputData.launch_year = year;
      inputData.brand = brand;
      inputData.fuel_type = fuel;
      inputData.description = description;
      inputData.color = color;
      inputData.rating = rating;
      inputData.image = image;
      inputData.price = price
      inputData.vehicle_name = vehiclename;
      // console.log("InputData--->",inputData)

    

      await this.middle.addVehicle(inputData).then((result: any) => {
        // console.log(result)
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)
      // return JSON.parse(JSON.stringify(error["error"]))
    }

  }

  //3.Delete Vehicle from list
  async deleteVehicleComm(id: any) {
    try {
      var data: any
      let InputData = new deleteVehicle()
      InputData.id = id
      await this.middle.deleteVehicle(InputData).then((result: any) => {
        if (result.Status == "Success") {
          data = result
        }
      })
      return data

    } catch (error: any) {

      console.log(error)

    }

  }



  //1.get all type data
  async getAllVehicleTypeComm() {
    let val: any
    try {
      await this.middle.vehicleTypeList().then((result: any) => {
        if (result.Status == 'Success') {
          val = result.data
        }
      })
      return val
    }
    catch (error: any) {
      // return val = JSON.parse(JSON.stringify(error["error"]))
      console.log(error)
    }
  }

  //2. add Vehicle Type
  async addNewVehicleTypeComm(type: any) {
    try {
      let inputData = new vehiclType()
      inputData.type = type
      let data: any

      await this.middle.addVehicleType(inputData).then((result: any) => {

        if (result.Status == "Success") {
          data = result
        }
      })
      return data

    } catch (error: any) {
      console.log(error)
    }
  }

  //3. update Vehicle Type
  async updateVehicleTypeComm(id: any, type: any) {
    try {
      let data: any
      let inputData = new vehiclType()
      inputData.id = id;
      inputData.type = type;

      await this.middle.updateVehicleType(inputData).then((result: any) => {
        data = result
      })

      return data

    } catch (error: any) {
      console.log(error)
    }
  }

  //4. Delete Vehicle Type
  async deleteVehicleType(id: any) {
    let data: any
    try {
      let inputData = new deleteType()
      inputData.id = id;
      await this.middle.deleteVehicleType(inputData).then((result: any) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)

    }

  }



  //1.get all brand data
  async getAllVehicleBrandComm() {
    let val: any
    try {
      await this.middle.vehicleBrandList().then((result: any) => {
        if (result.Status == 'Success') {
          val = result.data
        }
      })
      return val
    }
    catch (error: any) {
      // return val = JSON.parse(JSON.stringify(error["error"]))
      console.log(error)
    }
  }

  //2.Add new brand 
  async addNewBrandComm(brand: any) {
    try {

      let data: any
      let inputData = new addBrand()
      inputData.brand = brand

      await this.middle.addVehicleBrand(inputData).then((result) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)
    }
  }

  //3. Update brand name
  async updateBrandName(brand: any, id: any) {
    try {
      let data: any
      let inputData = new updateBrand()
      inputData.id = id;
      inputData.brand = brand;

      await this.middle.updatevehicleBrand(inputData).then((result) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)
    }
  }

  //4.Delete Brand Name
  async deleteVehicleBrandComm(id: number) {
    try {
      let data: any
      const idObject: any = { id: id };
      await this.middle.deleteBrand(idObject).then((result) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)

    }
  }


  //1.get all Launch year data
  async getAllVehicleLaunchYearComm() {
    let val: any
    try {
      await this.middle.vehicleLaunchYearList().then((result: any) => {
        if (result.Status == 'Success') {
          val = result.data
        }
      })
      return val
    }
    catch (error: any) {
      // return val = JSON.parse(JSON.stringify(error["error"]))
      console.log(error)
    }
  }

  //2. add new Launch year
  async addNewLaunchydarComm(year: number) {
    try {
      let data: any
      let inputData = new addyearModal()
      inputData.year = year

      await this.middle.vehicleLaunchYear(inputData).then((result) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)
    }
  }

  //3. update Launch Year
  async updateLaunchYearComm(id: any, year: any) {
    try {
      let data: any
      let inputData = new updateYearModal()
      inputData.id = id
      inputData.year = year

      await this.middle.LaunchYearUpdate(inputData).then((result) => {
        data = result
      })

      return data


    } catch (error: any) {
      console.log(error)

    }
  }

  //4. Delete Launch Year
  async deleteLaunchYearComm(yearId: number) {
    try {
      let data: any
      let IdObject: any = { id: yearId }

      await this.middle.LaunchYearDelete(IdObject).then((result) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)

    }

  }

  //1.get all Fuel List data
  async getAllVehicleFuelTypeComm() {
    let val: any
    try {
      await this.middle.vehicleFuelList().then((result: any) => {
        if (result.Status == 'Success') {
          val = result.data
        }
      })
      return val
    }
    catch (error: any) {
      // return val = JSON.parse(JSON.stringify(error["error"]))
      console.log(error)
    }
  }

  //2. add new Fuel Type
  async VehiclFuelTypeAddComm(fuelType: string) {
    try {
      let data: any
      let inputData = new addFuelTypeModal()
      inputData.fuel = fuelType

      await this.middle.VehiclFuelTypeAdd(inputData).then((result: any) => {
        data = result
      })
      return data

    } catch (error: any) {
      console.log(error)
    }
  }

  //3. update Fuel Type
  async VehicleFuelTypeUpdateComm(id: any, fuel: any) {
    try {
      let data: any
      let inputData = new updateFuelTypeModal()
      inputData.id = id
      inputData.fuel = fuel

      await this.middle.VehicleFuelTypeUpdate(inputData).then((result: any) => {
        data = result
      })

      return data

    } catch (error: any) {
      console.log(error)

    }
  }

  //4. Delete Fuel Type
  async VehicleFuelTypeDeleteComm(id: any) {
    try {

      const IdObject = { id: id }
      let data: any

      await this.middle.VehicleFuelTypeDelete(IdObject).then((result: any) => {
        data = result
      })

      return data

    } catch (error: any) {
      console.log(error)

    }
  }


  //1.get all Color List data
  async getAllVehicleColorTypeComm() {
    let val: any
    try {
      await this.middle.vehicleColorList().then((result: any) => {
        if (result.Status == 'Success') {
          val = result.data
        }
      })
      return val
    }
    catch (error: any) {
      // return val = JSON.parse(JSON.stringify(error["error"]))
      console.log(error)
    }
  }


  //2. add new vehicle Color
  async addVehicleColorComm(colorType: string) {
    try {
      let data: any
      const inputData = new addColorTypeModal()
      inputData.color = colorType

      await this.middle.addVehicleColor(inputData).then((result: any) => {
        data = result
      })

      return data

    } catch (error: any) {

      console.log(error)

    }
  }

  //3.update Vehicle Color
  async updateVehicleColorComm(id: any, color: any) {
    try {
      let data: any
      const inputData = new updateColorModal()
      inputData.id = id;
      inputData.color = color;

      await this.middle.updateVehicleColor(inputData).then((result: any) => {
        data = result
      })

      return data

    } catch (error) {

      console.log(error)

    }

  }


  //4.Delete Vehicle Color
  async deleteVehicleColorComm(id: number) {

    try {
      const idObject = { id: id }
      let data: any
      await this.middle.deleteVehicleColor(idObject).then((result: any) => {
        data = result
      })

      return data

    } catch (error) {

      console.log(error)

    }

  }




}
