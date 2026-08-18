<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { UsuarioAuth } from '../../models/usuario-auth';
=======
import { Component } from '@angular/core';
>>>>>>> develop

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
  usuario: UsuarioAuth | null = null;
  menuAbierto = false;

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
    console.log(this.menuAbierto);
  }
}
=======
export class HeaderComponent {}
>>>>>>> develop
