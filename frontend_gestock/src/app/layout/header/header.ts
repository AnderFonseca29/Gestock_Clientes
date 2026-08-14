import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  signal,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

// 1. AGREGA ESTAS DOS IMPORTACIONES
import { authGuard } from '../../guards/auth-guard'; // O verifica la ruta exacta a auth.service
import { AuthService } from '../../login/services/auth'; 
import { UsuarioAuth } from '../../models/usuario-auth';



@Component({
  selector: 'app-header',
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
export class HeaderComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);

  @Input() title: string = 'Panel';

  nombreSistema: string = 'Gestock';
  descripcionSistema: string = 'Sistema de gestión de inventario y bodegas';

  // Usuario autenticado mediante AuthService / LocalStorage
  usuarioAuth: UsuarioAuth | null = null;
  userName: string = 'Administrador';
  userRole: string = 'Administrador';
  userInitial: string = 'A';
  notificationCount: number = 3;
  menuAbierto: boolean = false;

  // Reactividad para fecha y hora
  fechaActual = signal('');
  horaActual = signal('');
  private intervalo: any;

 ngOnInit(): void {
  // Cargar usuario desde localStorage
  const nombreGuardado = localStorage.getItem('nombre') || localStorage.getItem('usuarioLogueado');
  const rolGuardado = localStorage.getItem('rol');

  if (nombreGuardado) {
    this.userName = nombreGuardado;
    this.userInitial = this.userName.charAt(0).toUpperCase();
  }

  if (rolGuardado) {
    this.userRole = rolGuardado;
  }

  // Reloj
  this.actualizarFechaHora();
  this.intervalo = setInterval(() => {
    this.actualizarFechaHora();
  }, 1000);
}

  get inicialNombre(): string {
    return this.userName ? this.userName.charAt(0).toUpperCase() : 'A';
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
      ahora.toLocaleTimeString('es-CO', {
        hour12: false
      })
    );
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarSesion(): void {
  localStorage.removeItem('usuarioLogueado');
  localStorage.removeItem('nombre');
  localStorage.removeItem('rol');
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}