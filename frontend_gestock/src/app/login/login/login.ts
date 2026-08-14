import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Servicio de autenticación
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  // Variables vinculadas con [(ngModel)] en tu HTML
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // Se ejecuta con el (ngSubmit)="login()" del formulario
  login(): void {
    if (!this.email || !this.password) {
      alert('Por favor complete todos los campos');
      return;
    }

    const autenticado = this.authService.iniciarSesion(this.email, this.password);

    if (!autenticado) {
      alert('Correo o contraseña incorrectos');
      return;
    }

    const usuario = this.authService.obtenerUsuario();
    alert(`¡Bienvenido ${usuario?.nombre}!\nRol: ${usuario?.rol}`);

    // Redirecciona al dashboard de Gestock
    this.router.navigate(['/app/panel']);  }

  // Se ejecuta con el (click)="irACreacion()"
  irACreacion(): void {
    this.router.navigate(['/creacion-usuarios']);
  }

  // Se ejecuta con el (click)="loginConGoogle()"
  loginConGoogle(): void {
    console.log('Iniciando sesión con Google...');
    alert('Iniciando autenticación con Google');
  }
}