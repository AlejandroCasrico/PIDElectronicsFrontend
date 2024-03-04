import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url:string = "http://localhost:3000/api/users/"
  constructor(private _http:HttpClient) { }

  getUsers():Observable<User[]>{
  return this._http.get<User[]>(`${this.url}`);
  }
  createUsers(user: User):Observable<User[]>{
  return this._http.post<User[]>(`${this.url}`,user);
  }







}
