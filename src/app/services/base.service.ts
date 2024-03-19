import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

   baseUrl:string ="http://localhost:8000";

   //vehicle
   getAllList : string = `${this.baseUrl}/vehicleList`;
   getSingle : string = `${this.baseUrl}/singleVehicleDetails`;
   addVehicle : string  = `${this.baseUrl}/insertVehicle`;
   updateVehicle : string =`${this.baseUrl}/updateVehicle`;
   deleteVehicleApi : string =`${this.baseUrl}/deleteVehicle`;

   //vehicle type api
   getTypeListAll:string = `${this.baseUrl}/list`;
   getSingleType:string = `${this.baseUrl}/single`;
   addVehicleType = `${this.baseUrl}/addtype`;
   updateVehicleType = `${this.baseUrl}/updateType`;
   deleteVehicleType = `${this.baseUrl}/deleteData`;


   //vehicle Brand api
   getBrandListAll: string = `${this.baseUrl}/bradLlist`;
   addVehicleBrand:string =`${this.baseUrl}/addBrand`;
   updateVehicleBrand:string=`${this.baseUrl}/updateBrand`;
   deleteVehicleBrand:string=`${this.baseUrl}/deleteBrand`;


   //Vehicle Launch Year api
   getLaunchYear:string = `${this.baseUrl}/yearList`;
   addVehicleLaunchYear = `${this.baseUrl}/addYear`;
   updateVehicleLauchYear =`${this.baseUrl}/updateLaunchYear`;
   deleteVehicleLaunchYear = `${this.baseUrl}/deleteLaunchYear`;

   //Vehicle Fuel Type api
   getFuelTypeAll:string = `${this.baseUrl}/fuelList`;
   addVehicleFuelType:string=`${this.baseUrl}/addFuel`;
   updateVehicleFuelType:string=`${this.baseUrl}/updateFuel`;
   deleteVehicleFuelType:string=`${this.baseUrl}/deleteFuelType`;

   //Vehicle Color api
   getVehicleColorAll:string = `${this.baseUrl}/colorList`;
   addVehicleColorApi:string = `${this.baseUrl}/addColor`;
   updateVehicleColorApi:string =`${this.baseUrl}/updateColor`;
   deleteVehicleColorApi:string = `${this.baseUrl}/deleteColor`;







}
