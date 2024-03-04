import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
private url:string = 'http://localhost:3000/api/excel-export'
constructor(private _http:HttpClient) { }


exportToExcel() {
  return this._http.get(this.url, { responseType: 'blob' });
}
}
