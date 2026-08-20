import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  // Ruta raíz: Landing page informativa
  {
    path: '',
    loadComponent: () =>
      import('./pagina/pagina').then((m) => m.PaginaComponent),
  },

  // Ruta de Login
  { path: 'login', component: LoginComponent },

  // Ruta de Creación de Usuarios
  {
    path: 'creacion-usuarios',
    loadComponent: () =>
      import('./pages/creacion-usuarios/creacion-usuarios').then(
        (m) => m.CreacionUsuariosComponent
      ),
  },

  // Ruta del sistema interno con Sidebar/Layout
  {
    path: 'app',
    loadComponent: () =>
      import('./layout/layout/layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full',
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./pages/panel/panel').then((m) => m.Panel),
      },
      {
        path: 'envios',
        loadComponent: () =>
          import('./pages/envio/envio').then((m) => m.EnviosComponent),
      },
      /*
      // Pendientes de creación de componentes:
      {
        path: 'reportes',
        loadComponent: () =>
          import('./pages/reportes/reportes').then((m) => m.ReportesComponent),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./pages/configuracion/configuracion').then(
            (m) => m.ConfiguracionComponent
          ),
      },
      */
      {
        path: '**',
        redirectTo: 'panel',
      },
    ],
  },

  // Redirige URLs inexistentes a la landing page
  {
    path: '**',
    redirectTo: '',
  },
];