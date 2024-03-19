import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MiddleService {

  constructor(private http: HttpClient, private endpoint: BaseService) { }


  //1.get all vehicle list data
  vehicleList() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.http.get(this.endpoint.getAllList, httpOption).toPromise()
  }

  //2.add new vehicle
  async addVehicle(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return await this.http.post(this.endpoint.addVehicle, inputData, httpOption).toPromise()

  }

  //3.delete vehicle
  async deleteVehicle(vehicleId: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return await this.http.post(this.endpoint.deleteVehicleApi, vehicleId, httpOption).toPromise()

  }


  //1.get all vehicle type list data
  vehicleTypeList() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.http.get(this.endpoint.getTypeListAll, httpOption).toPromise()
  }

  //2.add new Vehicle Type
  async addVehicleType(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return await this.http.post(this.endpoint.addVehicleType, inputData, httpOption).toPromise()
  }

  // 3.update vehicle type
  async updateVehicleType(inputData: any) {

    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return await this.http.patch(this.endpoint.updateVehicleType, inputData, httpOption).toPromise()
  }

  // 4. Delete Vehicle Type
  async deleteVehicleType(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return await this.http.post(this.endpoint.deleteVehicleType, inputData, httpOption).toPromise()
  }


  //1.get all vehicle Brand list data
  vehicleBrandList() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.http.get(this.endpoint.getBrandListAll, httpOption).toPromise()
  }

  //2.add Vehicle Brand
  async addVehicleBrand(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return await this.http.post(this.endpoint.addVehicleBrand, inputData, httpOption).toPromise()
  }

  //3.update Vehicle Brand
  async updatevehicleBrand(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return await this.http.post(this.endpoint.updateVehicleBrand, inputData, httpOption).toPromise()
  }

  //4.Delete Vehicle Brand
  deleteBrand(id: number) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.deleteVehicleBrand, id, httpOption).toPromise()
  }


  //1.get all vehicle Launch year list data
  vehicleLaunchYearList() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.get(this.endpoint.getLaunchYear, httpOption).toPromise()
  }

  //2.add new Vehicle Launch year
  vehicleLaunchYear(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.addVehicleLaunchYear, inputData, httpOption).toPromise()
  }

  //3.Update vehicle Launch year
  LaunchYearUpdate(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.updateVehicleLauchYear, inputData, httpOption).toPromise()
  }


  //4.Delete Vehicle Launch year

  LaunchYearDelete(id: number) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.deleteVehicleLaunchYear, id, httpOption).toPromise()
  }


  //1.get all vehicle Fuel list data
  vehicleFuelList() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.http.get(this.endpoint.getFuelTypeAll, httpOption).toPromise()
  }

  //2.add new fuel type
  VehiclFuelTypeAdd(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.addVehicleFuelType, inputData, httpOption).toPromise()
  }

  //3.Update Fuel Type
  VehicleFuelTypeUpdate(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.updateVehicleFuelType, inputData, httpOption).toPromise()
  }

  //4. Delete Fuel Type
  VehicleFuelTypeDelete(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.deleteVehicleFuelType, inputData, httpOption).toPromise()
  }


  //1.get all vehicle Color list data
  vehicleColorList() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.http.get(this.endpoint.getVehicleColorAll, httpOption).toPromise()
  }

  //2. add new color
  addVehicleColor(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(this.endpoint.addVehicleColorApi, inputData, httpOption).toPromise()
  }

  //3. Update color
  updateVehicleColor(inputData: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    return this.http.post(this.endpoint.updateVehicleColorApi, inputData, httpOption).toPromise()

  }

  //4. Delete Color
  deleteVehicleColor(inputData:any){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

   return this.http.post(this.endpoint.deleteVehicleColorApi,inputData, httpOption).toPromise()
  }

}
