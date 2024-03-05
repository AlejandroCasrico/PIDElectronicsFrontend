import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private loginService:LoginService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  public form:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  });

  login():void{
    this.loginService.login(this.form.value).subscribe((response) => {
      if (response && response.rol) {
        const rol = response.rol;
        if (rol === 'admin') {
          this.router.navigate(['/admin']);
        } else if (rol === 'Client') {
          this.router.navigate(['/clients']);
        }
      } else {

      }
    });
  }
}
