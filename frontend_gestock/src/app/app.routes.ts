import { Routes } from '@angular/router';
import { InventarioComponent } from './pages/gestion/inventario/inventario';
import { UsuariosComponent } from './pages/gestion/roles-yusuarios/roles-yusuarios';
import { AuditoriasComponent } from './pages/gestion/auditorias/auditorias';

export const routes: Routes = [
  { path: '', redirectTo: 'app/inventario', pathMatch: 'full' },
  {
    path: 'app',
    children: [
      { path: 'inventario', component: InventarioComponent },
      { path: 'roles-usuarios', component: UsuariosComponent },
      { path: 'auditorias', component: AuditoriasComponent }
    ]
  },
  { path: '**', redirectTo: 'app/inventario' }
];