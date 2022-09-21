import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http :HttpClient) {
   }
   SaveNewuser(user : object){
    console.log(user)
    return this._http.post("https://text-base-c2c2e-default-rtdb.firebaseio.com/data.json",user)

   }
}
