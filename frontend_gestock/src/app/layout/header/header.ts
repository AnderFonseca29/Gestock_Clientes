import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy {

  nombreSistema: string = 'Gestock';
  descripcionSistema: string = 'Sistema de gestión de inventario y bodegas';

  //Mientras no exista login en este proyecto, se dejan valores fijos.
  //Cuando armes autenticación, reemplaza esto por lo que devuelva tu AuthService.
  usuario: string = 'Administrador';
  rol: string = 'Admin';

  fechaActual = signal('');
  horaActual = signal('');

  private intervalo: any;

  ngOnInit(): void {
    this.actualizarFechaHora();
    this.intervalo = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

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
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  cerrarSesion(): void {
    //Sin login todavía en este proyecto; cuando lo agregues, aquí va
    //la limpieza de sesión y el router.navigate(['/login']).
    alert('Cerrando sesión...');
  }
}