import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======

// Servicio de autenticación
import { AuthService } from '../services/auth';
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule],
=======
  imports: [
    CommonModule,
    FormsModule
  ],
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

<<<<<<< HEAD
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {

    console.log('Correo ingresado:', this.email);
    console.log('Contraseña ingresada:', this.password);

    if (!this.email || !this.password) {
      alert('Por favor, ingresa el correo y la contraseña.');
      return;
    }

    if (
      this.email === 'admin@gestock.com' &&
      this.password === '123456'
    ) {

      localStorage.setItem('usuarioLogueado', 'true');
      localStorage.setItem('nombre', 'Administrador');
      localStorage.setItem('rol', 'Administrador');

      console.log('Login correcto');

      this.router.navigate(['/app']);

    } else {

      alert('Correo o contraseña incorrectos.');

    }
  }

  goToRegister(): void {

    this.router.navigate(['/creacion-usuarios']);
=======
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
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8

    const usuario = this.authService.obtenerUsuario();
    alert(`¡Bienvenido ${usuario?.nombre}!\nRol: ${usuario?.rol}`);

    // Redirecciona al dashboard de Gestock
    this.router.navigate(['/app/panel']);  }

  // Se ejecuta con el (click)="irACreacion()"
  irACreacion(): void {
    this.router.navigate(['/creacion-usuarios']);
  }

<<<<<<< HEAD
=======
  // Se ejecuta con el (click)="loginConGoogle()"
  loginConGoogle(): void {
    console.log('Iniciando sesión con Google...');
    alert('Iniciando autenticación con Google');
  }
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}