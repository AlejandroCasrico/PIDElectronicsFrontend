import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioRegistroComponent } from './pages/admin/formulario-registro/formulario-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsDashboardComponent } from './pages/clients/clients-dashboard/clients-dashboard.component';
import { FormClientComponent } from './pages/clients/form-client/form-client.component';
import { FormRetiroComponent } from './pages/clients/form-retiro/form-retiro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminDashboardComponent,
    FormularioRegistroComponent,
    ClientsDashboardComponent,
    FormClientComponent,
    FormRetiroComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
