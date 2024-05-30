import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertIngresosPage } from './cert-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: CertIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertIngresosPageRoutingModule {}
