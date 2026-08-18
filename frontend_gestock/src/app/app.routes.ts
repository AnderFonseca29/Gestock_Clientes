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
<<<<<<< HEAD
    },

    // =========================
    // RUTAS PÚBLICAS
    // =========================

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'creacion-usuarios',
        component: CreacionComponent
    },

    // =========================
    // RUTAS PRIVADAS
    // =========================

    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [

            {
                path: 'empresas',
                component: EmpresasComponent
            },

            {
                path: 'crear-inventario',
                component: CrearInventarioComponent
            },

            {
                path: 'panel',
                component: PanelComponent
            }

        ]
    },

    // Cualquier ruta que no exista
    {
        path: '**',
        redirectTo: 'login'
    }
=======
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
>>>>>>> origin/develop
];