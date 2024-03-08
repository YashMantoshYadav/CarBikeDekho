import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MiddleService {

  constructor(private http:HttpClient, private endpoint:BaseService) { }


//get all vehicle list data
  vehicleList(){
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }

   return this.http.get(this.endpoint.getAllList,httpOption).toPromise()
  }
}
