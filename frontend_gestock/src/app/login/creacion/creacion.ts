import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion.html',
  styleUrl: './creacion.css'
})
export class CreacionComponent {

  // Control de pasos (1: Datos Personales, 2: Credenciales)
  pasoActual: number = 1;

  // Datos Paso 1: Personales
  nombres: string = '';
  apellidos: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  tipoDocumento: string = '';
  numeroDocumento: string = '';

  // Datos Paso 2: Credenciales de Acceso
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  // Ir al Paso 2
  siguientePaso(): void {
    if (!this.nombres || !this.apellidos || !this.numeroDocumento) {
      alert('Por favor completa los datos personales obligatorios.');
      return;
    }
    this.pasoActual = 2;
  }

  // Regresar al Paso 1
  atrasPaso(): void {
    this.pasoActual = 1;
  }

  // Finalizar Registro y Mandar al Login
  completarRegistro(): void {
    if (!this.username || !this.password) {
      alert('Por favor crea un nombre de usuario y una contraseña.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Alerta de éxito y redirección
    alert('¡Usuario registrado con éxito! Redirigiendo al inicio de sesión...');
    this.router.navigate(['/login']);
  }
}