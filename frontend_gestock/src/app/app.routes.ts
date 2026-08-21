import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LayoutComponent } from './layout/layout/layout';
import { LoginComponent } from './pages/login/login/login'; // O la ruta correcta de tu login

export const routes: Routes = [
  // Ruta pública de Login
  {
    path: 'login',
    component: LoginComponent
  },

  // Ruta principal del sistema con Layout / Sidebar
=======
import { InventarioComponent } from './pages/gestion/inventario/inventario';
import { UsuariosComponent } from './pages/gestion/roles-yusuarios/roles-yusuarios';
import { AuditoriasComponent } from './pages/gestion/auditorias/auditorias';

export const routes: Routes = [
  { path: '', redirectTo: 'app/inventario', pathMatch: 'full' },
>>>>>>> 1f065a6 (reorden de archivos)
  {
    path: 'app',
    children: [
<<<<<<< HEAD
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
=======
      { path: 'inventario', component: InventarioComponent },
      { path: 'roles-usuarios', component: UsuariosComponent },
      { path: 'auditorias', component: AuditoriasComponent }
    ]
  },
  { path: '**', redirectTo: 'app/inventario' }
>>>>>>> 1f065a6 (reorden de archivos)
];