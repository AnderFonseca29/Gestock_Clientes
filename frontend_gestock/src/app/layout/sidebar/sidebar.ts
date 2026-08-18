import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Angular Material Imports
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { label: 'Empresas', icon: 'business', route: '/app/empresas' },
    { label: 'Panel', icon: 'dashboard', route: '/app/dashboard' },
    { label: 'Productos', icon: 'inventory_2', route: '/app/productos' },
    { label: 'Bodegas', icon: 'store', route: '/app/bodegas' },
    { label: 'Movimientos', icon: 'swap_horiz', route: '/app/movimientos' },
    { label: 'Usuarios', icon: 'group', route: '/app/usuarios' },
    { label: 'Reportes', icon: 'bar_chart', route: '/app/reportes' },
    { label: 'Configuración', icon: 'settings', route: '/app/configuracion' }
  ];
}