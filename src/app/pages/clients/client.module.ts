import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingRoutingModule } from './client-routing-routing.module';

import { FormClientComponent } from './form-client/form-client.component';
import { FormRetiroComponent } from './form-retiro/form-retiro.component';


@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    ClientRoutingRoutingModule,

  ]
})
export class ClientRoutingModule { }
