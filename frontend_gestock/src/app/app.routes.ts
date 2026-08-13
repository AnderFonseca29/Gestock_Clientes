import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login';
import { CreacionComponent } from './login/creacion/creacion';
import { LayoutComponent } from './layout/layout/layout';
import { EmpresasComponent } from './pages/empresas/empresas';
import { PanelComponent } from './pages/panel/panel';
import { CrearInventarioComponent } from './pages/crear-inventario/crear-inventario';

export const routes: Routes = [
  // Redirección inicial a /app si se entra a la raíz
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },

  // Rutas públicas / Login
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'creacion-usuarios',
    component: CreacionComponent
  },

  // Layout Contenedor con sus Vistas Hijas
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'empresas',
        pathMatch: 'full'
      },
      {
        path: 'empresas',
        component: EmpresasComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      },
      {
        path: 'crear-inventario',
        component: CrearInventarioComponent
      }
    ]
  },

  // Redirección comodín
  {
    path: '**',
    redirectTo: 'login'
  }
];