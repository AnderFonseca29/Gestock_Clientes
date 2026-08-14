import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  nombre: string;
  icono: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
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

}