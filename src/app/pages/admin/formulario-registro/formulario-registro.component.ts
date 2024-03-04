import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(private userService:UsersService,private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {

  }


  public form:FormGroup = this.fb.group({
    name :['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    rol:['',Validators.required]
  });

  addUser(): void {
    this.userService.createUsers(this.form.value).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin']);
    });
  }

}
