<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icono: string;
  nombre: string;
  ruta: string;
  disponible: boolean;
=======
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
interface MenuItem{
  icono:string;
  nombre:string;
  ruta:string;
  roles:string[];
>>>>>>> origin/develop
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {

<<<<<<< HEAD
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
=======
  constructor(private authService:AuthService){
    this.rolUsuario=this.authService.obtenerRol();
    this.cargarMenu();
  }
  rolUsuario:string='';
  menuVisible:MenuItem[]=[];
  menu:MenuItem[]=[
    {
      icono:'🛖',
      nombre:'Dasboard',
      ruta: '/dashboard',
      roles:[
        'Administrador'
      ]
    },
    {
      icono:'🤦‍♂️',
      nombre:'Usuarios',
      ruta:'/users',
      roles:[
        'Administrador',
        'Instructor'
      ]
    },
    {
      icono:'🛡️',
      nombre:'Roles',
      ruta:'/roles',
      roles:[
        'Administrador'
      ]
    },
    {
      icono:'📚',
      nombre:'Cursos',
      ruta:'/cursos',
      roles:[
        'Administrador',
        'Instructor',
        'Aprendiz'
      ]
    },
    {
      icono:'😎',
      nombre:'Comoponente dinamico',
      ruta:'/contenido',
      roles:[
        'Administrador',
        'Instructor',
        'Aprendiz'
      ]

    },
    {
      icono:'❤️',
      nombre:'Reserva de vuelos',
      ruta:'/reserva',
      roles:[
        'Administrador',
        'Instructor',
        'Aprendiz'
      ]
    },
  
    

  ];
 

  private cargarMenu():void{
    this.menuVisible=this.menu.filter(
      opcion=>opcion.roles.includes(this.rolUsuario))
  }
}
>>>>>>> origin/develop
