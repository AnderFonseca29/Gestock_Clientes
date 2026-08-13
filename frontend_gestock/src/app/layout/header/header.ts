<<<<<<< HEAD
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
=======
import { Component, OnInit, OnDestroy, signal, Signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
>>>>>>> origin/develop

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
<<<<<<< HEAD

  nombreSistema: string = 'Gestock';
  descripcionSistema: string = 'Sistema de gestión de inventario y bodegas';

  //Mientras no exista login en este proyecto, se dejan valores fijos.
  //Cuando armes autenticación, reemplaza esto por lo que devuelva tu AuthService.
  usuario: string = 'Administrador';
  rol: string = 'Admin';

  fechaActual = signal('');
  horaActual = signal('');
=======
  constructor(private router: Router){}

  nombreSistema: string= 'Sistema ADSO';
  DescripcionSistema: string= 'Plataforma Academica';
  Usuario: string= '';
  rol: string= '';
  fechaActual= signal('');
  horaActual= signal('');
>>>>>>> origin/develop

  private intervalo: any;

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.Usuario=localStorage.getItem('nombre')??'';
    this.rol=localStorage.getItem('rol')??'';
>>>>>>> origin/develop
    this.actualizarFechaHora();
    this.intervalo = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

<<<<<<< HEAD
  actualizarFechaHora(): void {
    const ahora = new Date();
    this.fechaActual.set(
      ahora.toLocaleDateString('es-CO', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    );
    this.horaActual.set(
      ahora.toLocaleTimeString('es-CO', { hour12: false })
    );
=======
  

  actualizarFechaHora(): void {
    const ahora = new Date();
    this.fechaActual.set (ahora.toLocaleDateString(
      'es-CO',
      {
        weekday: 'long',
        day:'2-digit',
        month:'long',
        year:'numeric'
      }
    ));
    this.horaActual.set (ahora.toLocaleTimeString(  
      'es-CO',
      {
        hour12: false
      }
    ));
>>>>>>> origin/develop
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
<<<<<<< HEAD

  cerrarSesion(): void {
    //Sin login todavía en este proyecto; cuando lo agregues, aquí va
    //la limpieza de sesión y el router.navigate(['/login']).
    alert('Cerrando sesión...');
  }
}
=======
  cerrarSesion(): void {
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/login']);
    alert('Sesión cerrada');
  }
}
>>>>>>> origin/develop
