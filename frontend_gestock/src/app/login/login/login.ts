import { Component, inject } from '@angular/core';
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

  // Variables vinculadas con [(ngModel)] en la plantilla HTML
  email: string = '';
  password: string = '';

  // Inyección de dependencias usando inject() o constructor tradicional
  private router = inject(Router);
  private authService = inject(AuthService);

  // Se ejecuta al enviar el formulario (ngSubmit)="login()"
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

    // Redirección hacia el panel principal sin alertas intermitentes
    this.router.navigate(['/panel']).then((navegadoConExito) => {
      if (!navegadoConExito) {
        console.warn('La navegación a /panel fue bloqueada. Revisa la lógica de tu AuthGuard.');
      }
    }).catch((error) => {
      console.error('Error al intentar navegar a /panel:', error);
    });
  }

  // Redirección a la creación de usuarios
  irACreacion(): void {
    this.router.navigate(['/creacion-usuarios']);
  }

  // Autenticación con Google
  loginConGoogle(): void {
    console.log('Iniciando sesión con Google...');
    alert('Iniciando autenticación con Google');
  }
}