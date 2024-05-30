import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesPagoPageRoutingModule } from './planes-pago-routing.module';

import { PlanesPagoPage } from './planes-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesPagoPageRoutingModule
  ],
  declarations: [PlanesPagoPage]
})
export class PlanesPagoPageModule {}
