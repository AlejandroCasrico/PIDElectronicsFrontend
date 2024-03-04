import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movements } from 'src/app/interfaces/movements';
import { MovementsService } from 'src/app/services/movements.service';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  constructor(private movementService:MovementsService,private fb:FormBuilder,
     private router: Router) { }

  public form: FormGroup = this.fb.group({
    user_id: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });
  ngOnInit(): void {
  }
  makeTransaction(){
    if (this.form.valid) {
      const formData = this.form.value;
      const movement: Movements = {
        id_movement: 0,
        type_movement: "",
        amount: formData.amount,
        dateTime: new Date(),
        user_id: formData.user_id,
      };

      this.movementService.makeTransaction(movement).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/clients']);
        },
        error => {
          console.error('Error al realizar el depósito:', error);
        }
      );
    }
  }



  }

