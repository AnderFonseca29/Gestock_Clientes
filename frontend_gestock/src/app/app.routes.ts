import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';
import { LoginComponent } from './pages/login/login/login'; // O la ruta correcta de tu login

export const routes: Routes = [
  // Ruta pública de Login
  {
    path: 'login',
    component: LoginComponent
  },

  // Ruta principal del sistema con Layout / Sidebar
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./pages/panel/panel').then((m) => m.Panel),
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./pages/reportes/reportes').then((m) => m.ReportesComponent),
      },
      {
        path: 'gestion/auditorias',
        loadComponent: () =>
          import('./pages/gestion/auditorias/auditorias').then((m) => m.AuditoriasComponent),
      },
      {
        path: 'gestion/roles-yusuarios',
        loadComponent: () =>
          import('./pages/gestion/roles-yusuarios/roles-yusuarios').then((m) => m.UsuariosComponent),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./pages/configuracion/configuracion').then((m) => m.ConfiguracionComponent),
      }
    ]
  },

  // Ruta comodín para redireccionar URLs no encontradas
  {
    path: '**',
    redirectTo: ''
  }
];