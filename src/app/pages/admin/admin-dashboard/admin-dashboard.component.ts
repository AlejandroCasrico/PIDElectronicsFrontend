import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/interfaces/user';
import { MovementsService } from 'src/app/services/movements.service';
import { Movements } from 'src/app/interfaces/movements';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',

})
export class AdminDashboardComponent implements OnInit {

  constructor(private usersService:UsersService,private movementService:MovementsService,private excel:ExcelService) { }
  public userData: User[]= [];
  public movementData:Movements[]=[];
  ngOnInit(): void {
  this.getAllUsers();
  this.getAllMovements();
  }
  getAllUsers() {
    this.usersService.getUsers().subscribe(
      (response: any) => {
        if (Array.isArray(response.obj)) {
          this.userData = response.obj;
        } else {
          console.error('La respuesta del servicio no contiene un array de usuarios:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }


  getAllMovements(){
    this.movementService.getAllMovements().subscribe(
      (response:any)=>{
        if (Array.isArray(response.obj)) {
          this.movementData = response.obj;
        } else {
          console.error('La respuesta del servicio no contiene un array de movimientos:', response);
        }
      },
      (error) => {
        console.error('Error al obtener los movimientos:', error);
      }
    )
    }
    exportToExcel() {
      this.excel.exportToExcel().subscribe((data: Blob) => {
            const url = window.URL.createObjectURL(data);
              const a = document.createElement('a');
                document.body.appendChild(a);
                  a.href = url;
                  a.download = 'movimientos.xlsx';
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
        }, error => {
        console.error('Error al exportar a Excel', error);
      });
    }
  }


