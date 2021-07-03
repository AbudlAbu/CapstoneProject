import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import {HttpClient} from '@angular/common/http'
 

@ Injectable({
  providedIn: 'root'
})
export class RegistrationService
 {
  

  constructor( private _http : HttpClient) {
   }

   //Method is used to send the gogin data to different Origin
   public loginUserFromRemote(user:User):Observable<any>{
     return this._http.post<any>("http://localhost:8085/login",user)
   }

   //Method for posting the data to the different origin
   public registerUserFromRemote(user :User):Observable<any>
   {
     return this._http.post<any>("http://localhost:8085/registeruser",user);
   }
   handleError(error : Response)
   { }
}
