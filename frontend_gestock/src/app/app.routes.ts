import { Routes } from '@angular/router';
<<<<<<< HEAD
=======
import { LayoutComponent } from './layout/layout/layout';
>>>>>>> develop

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
<<<<<<< HEAD
      { 
        path: '', 
        redirectTo: 'gestion/inventario', 
        pathMatch: 'full' 
=======
      {
        path: '',
        redirectTo: 'reportes',
        pathMatch: 'full'
>>>>>>> develop
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./pages/reportes/reportes').then(m => m.ReportesComponent)
      },
      {
<<<<<<< HEAD
        path: 'gestion/auditorias',
        loadComponent: () => import('./pages/gestion/auditorias/auditorias').then(m => m.AuditoriasComponent)
      },
      {
        path: 'gestion/roles-yusuarios',
        loadComponent: () => import('./pages/gestion/roles-yusuarios/roles-yusuarios').then(m => m.UsuariosComponent) // <-- Apunta a UsuariosComponent
=======
        path: 'configuracion',
        loadComponent: () =>
          import('./pages/configuracion/configuracion').then(m => m.ConfiguracionComponent)
>>>>>>> develop
      }
    ]
  },
  {
    path: '**',
    redirectTo: '' // Redirige a la raíz para que tome la redirección a 'reportes' dentro del Layout
  }
];