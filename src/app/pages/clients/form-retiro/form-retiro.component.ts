import { Component, OnInit } from '@angular/core';
import { MovementsService } from 'src/app/services/movements.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movements } from 'src/app/interfaces/movements';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-retiro',
  templateUrl: './form-retiro.component.html',
  styleUrls: ['./form-retiro.component.css']
})
export class FormRetiroComponent implements OnInit {


  constructor(private movementService:MovementsService,private fb:FormBuilder,private router: Router) { }

  public form: FormGroup = this.fb.group({
    user_id: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }
  retirarDinero(){
    if (this.form.valid) {
      const formData = this.form.value;
      const movement: Movements = {
        id_movement: 0,
        type_movement: "",
        amount: formData.amount,
        dateTime: new Date(),
        user_id: formData.user_id,
      };

      this.movementService.makewithdrawal(movement).subscribe(
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
