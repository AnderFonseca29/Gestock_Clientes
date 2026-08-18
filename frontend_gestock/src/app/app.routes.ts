import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'reportes',
        pathMatch: 'full'
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./pages/reportes/reportes').then(m => m.ReportesComponent)
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./pages/configuracion/configuracion').then(m => m.ConfiguracionComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '' // Redirige a la raíz para que tome la redirección a 'reportes' dentro del Layout
  }
];