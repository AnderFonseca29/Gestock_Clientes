import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Ruta de Login
  { path: 'login', component: LoginComponent },
  
  // Ruta de Creación de Usuarios
  { 
    path: 'creacion-usuarios', 
    loadComponent: () => import('./pages/creacion-usuarios/creacion-usuarios')
      .then(m => m.CreacionUsuariosComponent) 
  },

  // Ruta principal de la app con el Layout (Header, Sidebar, Footer)
  {
    path: 'app',
    loadComponent: () => import('./layout/layout/layout').then(m => m.LayoutComponent),
    children: [
      {
        path: 'panel',
        loadComponent: () => import('./pages/panel/panel').then(m => m.Panel)
      },
      { path: '', redirectTo: 'panel', pathMatch: 'full' }
    ]
  },

  // Ruta comodín para redirigir en caso de URL no encontrada
  { path: '**', redirectTo: 'login' }
];