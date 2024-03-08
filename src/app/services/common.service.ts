import { Injectable } from '@angular/core';
import { MiddleService } from './middle.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private middle: MiddleService) { }


  //get all vehicle data
  async getAllVehicleComm() {

    let val: any
    try {

      await this.middle.vehicleList().then((result: any) => {

        if (result.Status == 'Success') {
          val = result.data
        }

      })
      return val
    }

    catch (error: any) {
      return val = JSON.parse(JSON.stringify(error["error"]))
    }

  }



  
}
