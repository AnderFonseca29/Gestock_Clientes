import { Routes } from '@angular/router';

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
];