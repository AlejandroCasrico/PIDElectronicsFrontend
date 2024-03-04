import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./pages/admin/admin.module').then(m=>m.AdminRoutingModule)
  },
  {
    path:'clients',
    loadChildren:()=>import('./pages/clients/client-routing-routing.module').then(m=>m.ClientRoutingRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
