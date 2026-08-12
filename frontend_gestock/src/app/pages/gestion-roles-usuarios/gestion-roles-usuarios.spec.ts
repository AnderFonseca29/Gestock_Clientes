import { Routes } from '@angular/router';
import { GestionRolesUsuariosComponent } from './pages/gestion-roles-usuarios/gestion-roles-usuarios';

export const routes: Routes = [
  { path: 'gestion-roles-usuarios', component: GestionRolesUsuariosComponent },
  { path: '', redirectTo: 'gestion-roles-usuarios', pathMatch: 'full' }
];