import { Routes } from '@angular/router';

import { LoginComponent } from './login/login/login';
import { CreacionComponent } from './login/creacion/creacion';

import { LayoutComponent } from './layout/layout/layout';

import { ReportesComponent } from './pages/reportes/reportes';
import { AuditoriasComponent } from './pages/gestion/auditorias/auditorias';
import { InventarioComponent } from './pages/gestion/inventario/inventario';
import { RolesUsuariosComponent } from './pages/gestion/roles-yusuarios/roles-yusuarios';
import { PanelComponent } from './pages/panel/panel';
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

];