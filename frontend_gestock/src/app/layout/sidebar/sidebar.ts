import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent implements OnInit {

  // DATOS DEL USUARIO
  nombreUsuario: string = 'Administrador';
  rolUsuario: string = 'Administrador';

  // MENÚ LATERAL (rutas activas del proyecto)
  menuItems: MenuItem[] = [
    {
      label: 'Panel',
      icon: 'dashboard',
      route: '/app/panel'
    },
    {
      label: 'Empresas',
      icon: 'business',
      route: '/app/empresas'
    },
    {
      label: 'Productos',
      icon: 'inventory_2',
      route: '/app/productos'
    },
    {
      label: 'Bodegas',
      icon: 'warehouse',
      route: '/app/bodegas'
    },
    {
      label: 'Movimientos',
      icon: 'sync_alt',
      route: '/app/movimientos'
    },
    {
      label: 'Usuarios',
      icon: 'people',
      route: '/app/roles-usuarios'
    },
    {
      label: 'Auditorías',
      icon: 'fact_check',
      route: '/app/auditorias'
    },
    {
      label: 'Reportes',
      icon: 'bar_chart',
      route: '/app/reportes'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('nombre') || 'Administrador';
    this.rolUsuario = localStorage.getItem('rol') || 'Administrador';
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('nombre');
    localStorage.removeItem('rol');

    this.router.navigate(['/login']);
  }
}