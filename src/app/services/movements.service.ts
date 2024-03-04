import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movements } from '../interfaces/movements';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  public url:string = "http://localhost:3000/api/movements/"

  constructor(private _http:HttpClient) { }


  getAllMovements():Observable<Movements[]>{
    return this._http.get<Movements[]>(`${this.url}`);
  }
  makeTransaction(movement:Movements):Observable<Movements[]>{
    return this._http.post<Movements[]>(`${this.url}`,movement)
  }
  makewithdrawal(movement:Movements):Observable<Movements[]>{
    return this._http.post<Movements[]>(`${this.url}retiro`,movement)
  }
}
