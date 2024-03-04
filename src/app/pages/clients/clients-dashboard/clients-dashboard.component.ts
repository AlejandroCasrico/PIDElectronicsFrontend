import { Component, OnInit } from '@angular/core';
import { Movements } from 'src/app/interfaces/movements';
import { ExcelService } from 'src/app/services/excel.service';
import { MovementsService } from 'src/app/services/movements.service';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.css']
})
export class ClientsDashboardComponent implements OnInit {

  constructor(private movement:MovementsService, private excel:ExcelService) { }
public movementData:Movements[] = []
  ngOnInit(): void {
    this.getAllMovements()
  }
  getAllMovements(){
    this.movement.getAllMovements().subscribe(
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
