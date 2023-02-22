import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { loginData } from '../modals/loginData';
import { RegisterForm } from '../modals/register_modal';

const url="http://localhost:8000/store-data"
const loginurl="http://localhost:8000/login"

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(data:RegisterForm):Observable<any>{
    console.log(data);
    return this.http.post(url,data)
  }

  login(data:loginData):Observable<any>{
    return this.http.post(loginurl,data,httpOptions)
  }

}
