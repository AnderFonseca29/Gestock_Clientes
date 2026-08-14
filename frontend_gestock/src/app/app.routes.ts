import { Routes } from '@angular/router';

import { LoginComponent } from './login/login/login';
import { CreacionComponent } from './login/creacion/creacion';

import { LayoutComponent } from './layout/layout/layout';

import { ReportesComponent } from './pages/reportes/reportes';
import { AuditoriasComponent } from './pages/gestion/auditorias/auditorias';
import { InventarioComponent } from './pages/gestion/inventario/inventario';
import { RolesUsuariosComponent } from './pages/gestion/roles-yusuarios/roles-yusuarios';
import { PanelComponent } from './pages/panel/panel';
<<<<<<< HEAD
import { EmpresasComponent } from './pages/empresas/empresas';


export const routes: Routes = [

  /* =========================
     LOGIN
  ========================= */

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'creacion-usuarios',
    component: CreacionComponent
  },


  /* =========================
     APLICACIÓN
  ========================= */

  {
    path: 'app',
    component: LayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      },

      {
        path: 'panel',
        component: PanelComponent
      },

      {
        path: 'empresas',
        component: EmpresasComponent
      },

      {
        path: 'productos',
        component: InventarioComponent
      },

      {
        path: 'bodegas',
        component: InventarioComponent
      },

      {
        path: 'movimientos',
        component: InventarioComponent
      },

      {
        path: 'roles-usuarios',
        component: RolesUsuariosComponent
      },

      {
        path: 'auditorias',
        component: AuditoriasComponent
      },

      {
        path: 'reportes',
        component: ReportesComponent
      }

    ]

  },

  /* =========================
     CUALQUIER RUTA DESCONOCIDA
  ========================= */

  {
    path: '**',
    redirectTo: 'login'
  }

=======
import { CrearInventarioComponent } from './pages/crear-inventario/crear-inventario';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    // Al entrar a localhost:4200/
    // enviamos al usuario directamente al login
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    // =========================
    // RUTAS PÚBLICAS
    // =========================

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'creacion',
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
>>>>>>> origin/develop
];