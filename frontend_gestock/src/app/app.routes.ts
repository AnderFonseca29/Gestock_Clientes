import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login';
import { CreacionComponent } from './login/creacion/creacion';

import { LayoutComponent } from './layout/layout/layout';
import { authGuard } from './guards/auth-guard';

import { PanelComponent } from './pages/panel/panel';
import { EmpresasComponent } from './pages/empresas/empresas';
import { InventarioComponent } from './pages/gestion/inventario/inventario';
import { RolesUsuariosComponent } from './pages/gestion/roles-yusuarios/roles-yusuarios';
import { AuditoriasComponent } from './pages/gestion/auditorias/auditorias';
import { ReportesComponent } from './pages/reportes/reportes';
import { CrearInventarioComponent } from './pages/crear-inventario/crear-inventario';




export const routes: Routes = [

  /* =========================
     INICIO / REDIRECCIÓN
  ========================= */
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  /* =========================
     RUTAS PÚBLICAS
  ========================= */
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'creacion-usuarios',
    component: CreacionComponent
  },

  /* =========================
     RUTAS PRIVADAS (PROTEGIDAS)
  ========================= */
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [authGuard],
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
      },
      {
        path: 'crear-inventario',
        component: CrearInventarioComponent
      }
    ]
  },

  /* =========================
     RUTA COMODÍN (NOT FOUND)
  ========================= */
  {
    path: '**',
    redirectTo: 'login'
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
];