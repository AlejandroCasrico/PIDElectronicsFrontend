import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

const routes: Routes = [
 {
  path: '',
  component:AdminDashboardComponent
 },
 {
  path:'createUser',
  component:FormularioRegistroComponent
 },
 {
  path:'dashboard-admin',
  component:AdminDashboardComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingRoutingModule { }
