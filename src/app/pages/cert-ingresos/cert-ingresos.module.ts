import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertIngresosPageRoutingModule } from './cert-ingresos-routing.module';

import { CertIngresosPage } from './cert-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertIngresosPageRoutingModule
  ],
  declarations: [CertIngresosPage]
})
export class CertIngresosPageModule {}
