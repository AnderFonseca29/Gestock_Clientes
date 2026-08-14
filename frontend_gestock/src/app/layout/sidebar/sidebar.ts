<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  nombre: string;
  icono: string;
  ruta: string;
=======
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
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
<<<<<<< HEAD
    RouterLinkActive
=======
    RouterLinkActive,
    MatListModule,
    MatIconModule
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
<<<<<<< HEAD
export class SidebarComponent implements OnInit {

  // ==============================
  // DATOS DEL USUARIO
  // ==============================

  nombreUsuario: string = 'Administrador';
  rolUsuario: string = 'Administrador';


  // ==============================
  // MENÚ LATERAL
  // ==============================

  menu: MenuItem[] = [

    {
      nombre: 'Empresas',
      icono: '🏢',
      ruta: '/app/empresas'
    },

    {
      nombre: 'Panel',
      icono: '▦',
      ruta: '/app/panel'
    },

    {
      nombre: 'Productos',
      icono: '📦',
      ruta: '/app/productos'
    },

    {
      nombre: 'Bodegas',
      icono: '🏭',
      ruta: '/app/bodegas'
    },

    {
      nombre: 'Movimientos',
      icono: '↔',
      ruta: '/app/movimientos'
    },

    {
      nombre: 'Usuarios',
      icono: '👥',
      ruta: '/app/roles-usuarios'
    },

    {
      nombre: 'Reportes',
      icono: '▥',
      ruta: '/app/reportes'
    },

    {
      nombre: 'Configuración',
      icono: '⚙',
      ruta: '/app/configuracion'
    }

  ];


  // ==============================
  // CONSTRUCTOR
  // ==============================

  constructor(
    private router: Router
  ) {}


  // ==============================
  // CARGAR DATOS DEL USUARIO
  // ==============================

  ngOnInit(): void {

    this.nombreUsuario =
      localStorage.getItem('nombre') || 'Administrador';

    this.rolUsuario =
      localStorage.getItem('rol') || 'Administrador';

  }


  // ==============================
  // CERRAR SESIÓN
  // ==============================

  cerrarSesion(): void {

    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('nombre');
    localStorage.removeItem('rol');

    this.router.navigate(['/login']);

  }

=======
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

>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}