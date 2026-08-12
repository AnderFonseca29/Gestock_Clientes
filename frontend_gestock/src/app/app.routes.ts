import { Routes } from '@angular/router';

// Importación de componentes de Login y submódulos
import { LoginComponent } from './login/login';
import { CreacionComponent } from './login/creacion/creacion';
import { RecuperacionComponent } from './login/recuperacion/recuperacion';
import { VerificacionComponent } from './login/verificacion/verificacion';
import { ControlComponent } from './login/control/control';

// Definición de rutas de la aplicación
export const routes: Routes = [
  // Ruta principal que redirige al login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Ruta del componente login principal
  {
    path: 'login',
    component: LoginComponent
  },

  // Rutas de los submódulos de login
  {
    path: 'creacion-usuarios',
    component: CreacionComponent
  },
  {
    path: 'recuperacion-clave',
    component: RecuperacionComponent
  },
  {
    path: 'verificacion-2fa',
    component: VerificacionComponent
  },
  {
    path: 'control-sesiones',
    component: ControlComponent
  },

  // Comodín para redirigir cualquier ruta no encontrada
  {
    path: '**',
    redirectTo: 'login'
  }
];