<<<<<<< HEAD
import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
=======
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-header',
<<<<<<< HEAD

  standalone: true,

  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule
  ],

  templateUrl: './header.html',

  styleUrl: './header.css'
})
export class HeaderComponent
  implements OnInit, OnDestroy {


  @Input()
  title: string = 'Panel';


  nombreSistema: string =
    'Gestock';


  descripcionSistema: string =
    'Sistema de gestión de inventario y bodegas';


  usuario: string =
    'Administrador';


  rol: string =
    'Administrador';


  userName: string =
    'Administrador';


  userRole: string =
    'Administrador';


  userInitial: string =
    'A';


  notificationCount: number =
    3;


  fechaActual =
    signal('');


  horaActual =
    signal('');


  private intervalo: any;


  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {

    this.usuario =
      localStorage.getItem('nombre')
      ?? 'Administrador';


    this.rol =
      localStorage.getItem('rol')
      ?? 'Administrador';


    this.userName =
      this.usuario;


    this.userRole =
      this.rol;


    this.userInitial =
      this.usuario
        .charAt(0)
        .toUpperCase();


    this.actualizarFechaHora();


    this.intervalo =
      setInterval(() => {

        this.actualizarFechaHora();

      }, 1000);
  }


  actualizarFechaHora(): void {

    const ahora =
      new Date();


    this.fechaActual.set(

      ahora.toLocaleDateString(
        'es-CO',
        {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )

    );


    this.horaActual.set(

      ahora.toLocaleTimeString(
        'es-CO',
        {
          hour12: false
        }
      )

    );

  }


  cerrarSesion(): void {

    localStorage.removeItem(
      'usuarioLogueado'
    );

    localStorage.removeItem(
      'nombre'
    );

    localStorage.removeItem(
      'rol'
    );


    this.router.navigate([
      '/login'
    ]);

  }


  ngOnDestroy(): void {

    if (this.intervalo) {

      clearInterval(
        this.intervalo
      );

    }

  }

=======
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  // Título dinámico que se puede cambiar según la página
  @Input() title: string = 'Empresas';

  // Datos del usuario logueado
  userName: string = 'Administrador';
  userRole: string = 'Administrador';
  userInitial: string = 'A';
  notificationCount: number = 3;
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}