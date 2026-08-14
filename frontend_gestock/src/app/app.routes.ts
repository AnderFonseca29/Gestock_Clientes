import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.LayoutComponent),
    children: [
      // Redirección automática si entras a localhost:4200/
      { 
        path: '', 
        redirectTo: 'gestion/auditorias', 
        pathMatch: 'full' 
      },
      {
        path: 'gestion/inventario',
        loadComponent: () => import('./pages/gestion/inventario/inventario').then(m => m.InventarioComponent)
      },
      {
        path: 'gestion/auditorias',
        loadComponent: () => import('./pages/gestion/auditorias/auditorias').then(m => m.AuditoriasComponent)
      },
      {
        path: 'gestion/roles-yusuarios',
        loadComponent: () => import('./pages/gestion/roles-yusuarios/roles-yusuarios').then(m => m.UsuariosComponent)
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: ''  
  }
=======
import { LoginComponent } from './login/login/login';
import { CreacionComponent } from './login/creacion/creacion';
import { LayoutComponent } from './layout/layout/layout';
import { EmpresasComponent } from './pages/empresas/empresas';
import { PanelComponent } from './pages/panel/panel';
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