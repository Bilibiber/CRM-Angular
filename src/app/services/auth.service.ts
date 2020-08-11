import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _url = 'http://localhost:90';
  constructor(private _http: HttpClient){}

  register(userData){
    console.log("services work")
    return this._http.post<any>(this._url + '/api/User/Register', userData)
  }
}
