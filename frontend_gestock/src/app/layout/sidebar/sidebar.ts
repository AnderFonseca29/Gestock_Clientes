import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icono: string;
  nombre: string;
  ruta: string;
  disponible: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {

  //"disponible: false" son las secciones del Figma que todavía no tienen
  //componente creado. Cuando armes cada página, cambia su ruta real y
  //pon disponible en true para que se vuelva un link funcional.
  menu: MenuItem[] = [
    { icono: '🏢', nombre: 'Empresas', ruta: '/empresas', disponible: false },
    { icono: '📋', nombre: 'Panel', ruta: '/panel', disponible: false },
    { icono: '📦', nombre: 'Productos', ruta: '/productos', disponible: false },
    { icono: '🏬', nombre: 'Bodegas', ruta: '/bodegas', disponible: false },
    { icono: '🔄', nombre: 'Movimientos', ruta: '/movimientos', disponible: false },
    { icono: '👥', nombre: 'Usuarios', ruta: '/usuarios', disponible: false },
    { icono: '📊', nombre: 'Reportes', ruta: '/reportes', disponible: true },
    { icono: '⚙️', nombre: 'Configuración', ruta: '/configuracion', disponible: false }
  ];
}