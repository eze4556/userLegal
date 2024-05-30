import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanesPagoPage } from './planes-pago.page';

const routes: Routes = [
  {
    path: '',
    component: PlanesPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesPagoPageRoutingModule {}
