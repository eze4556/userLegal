import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfipPageRoutingModule } from './afip-routing.module';

import { AfipPage } from './afip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfipPageRoutingModule
  ],
  declarations: [AfipPage]
})
export class AfipPageModule {}
