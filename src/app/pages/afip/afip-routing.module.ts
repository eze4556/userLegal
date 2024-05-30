import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfipPage } from './afip.page';

const routes: Routes = [
  {
    path: '',
    component: AfipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfipPageRoutingModule {}
