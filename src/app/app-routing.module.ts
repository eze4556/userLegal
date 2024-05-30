import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'afip',
    loadChildren: () => import('./pages/afip/afip.module').then( m => m.AfipPageModule)
  },
  {
    path: 'cert-ingresos',
    loadChildren: () => import('./pages/cert-ingresos/cert-ingresos.module').then( m => m.CertIngresosPageModule)
  },
  {
    path: 'info-personal',
    loadChildren: () => import('./pages/info-personal/info-personal.module').then( m => m.InfoPersonalPageModule)
  },
  {
    path: 'facturacion',
    loadChildren: () => import('./pages/facturacion/facturacion.module').then( m => m.FacturacionPageModule)
  },
  {
    path: 'declaracion-jurada',
    loadChildren: () => import('./pages/declaracion-jurada/declaracion-jurada.module').then( m => m.DeclaracionJuradaPageModule)
  },
  {
    path: 'planes-pago',
    loadChildren: () => import('./pages/planes-pago/planes-pago.module').then( m => m.PlanesPagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
