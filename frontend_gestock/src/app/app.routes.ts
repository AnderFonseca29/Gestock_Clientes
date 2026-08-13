import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';
import { ReportesComponent } from './pages/reportes/reportes';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'reportes',
                pathMatch: 'full'
            },
            {
                path: 'reportes',
                component: ReportesComponent
            }
        ]
    }
];