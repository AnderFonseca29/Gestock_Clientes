import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Servicio
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
  
  usuario: any = null; // Cambio a 'any' para evitar el error de import
  menuAbierto: boolean = false;

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuario();
  }

  get inicialNombre(): string {
    return this.usuario?.nombre ? this.usuario.nombre.charAt(0).toUpperCase() : 'U';
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    window.location.href = '/login';
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }
}