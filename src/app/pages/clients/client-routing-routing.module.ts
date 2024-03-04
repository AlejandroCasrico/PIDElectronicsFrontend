import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDashboardComponent } from './clients-dashboard/clients-dashboard.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormRetiroComponent } from './form-retiro/form-retiro.component';


const routes: Routes = [
  {
    path:"",
    component:ClientsDashboardComponent
  },
  {
    path:'form-movement',
    component:FormClientComponent
  },
  {
    path:'form-retiro',
    component:FormRetiroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingRoutingModule { }
