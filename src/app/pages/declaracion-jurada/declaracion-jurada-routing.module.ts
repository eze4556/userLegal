import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclaracionJuradaPage } from './declaracion-jurada.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracionJuradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclaracionJuradaPageRoutingModule {}
