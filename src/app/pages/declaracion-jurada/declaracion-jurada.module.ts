import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclaracionJuradaPageRoutingModule } from './declaracion-jurada-routing.module';

import { DeclaracionJuradaPage } from './declaracion-jurada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclaracionJuradaPageRoutingModule
  ],
  declarations: [DeclaracionJuradaPage]
})
export class DeclaracionJuradaPageModule {}
