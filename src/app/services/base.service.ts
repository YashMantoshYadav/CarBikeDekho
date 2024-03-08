import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

   baseUrl:string ="http://localhost:8000";

   getAllList : string = `${this.baseUrl}/vehicleList`;
   getSingle : string = `${this.baseUrl}/singleVehicleDetails`;
   addVehicle : string  = `${this.baseUrl}/insertVehicle`;
   updateVehicle : string =`${this.baseUrl}/updateVehicle`;
   deleteVehicleApi : string =`${this.baseUrl}/deleteVehicle`



}
