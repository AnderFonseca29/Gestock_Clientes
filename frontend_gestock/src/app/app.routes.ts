import { Routes } from '@angular/router';
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
];