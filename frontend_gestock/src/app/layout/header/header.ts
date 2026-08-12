import { Component, OnInit, OnDestroy, signal, Signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private router: Router){}

  nombreSistema: string= 'Sistema ADSO';
  DescripcionSistema: string= 'Plataforma Academica';
  Usuario: string= '';
  rol: string= '';
  fechaActual= signal('');
  horaActual= signal('');

  private intervalo: any;

  ngOnInit(): void {
    this.Usuario=localStorage.getItem('nombre')??'';
    this.rol=localStorage.getItem('rol')??'';
    this.actualizarFechaHora();
    this.intervalo = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  

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
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
  cerrarSesion(): void {
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/login']);
    alert('Sesión cerrada');
  }
}
