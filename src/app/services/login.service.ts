import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }
  public url :string = "http://localhost:3000/auth/login"

  login(user:User):Observable<User>{
    return this._http.post<User>(`${this.url}`,user);
  }
}
