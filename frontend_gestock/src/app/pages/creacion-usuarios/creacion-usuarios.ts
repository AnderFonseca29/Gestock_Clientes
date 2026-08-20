import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-usuarios.html',
  styleUrl: './creacion-usuarios.css'
})
export class CreacionUsuariosComponent {
  nombre: string = '';
  email: string = '';
  rol: string = 'Empleado'; // Valor por defecto actualizado
  password: string = '';

  private router = inject(Router);

  registrarUsuario(): void {
    if (!this.nombre || !this.email || !this.password) {
      alert('Por favor complete todos los campos');
      return;
    }

    console.log('Usuario registrado:', {
      nombre: this.nombre,
      email: this.email,
      rol: this.rol,
      password: this.password
    });

    alert('¡Usuario creado con éxito!');
    this.router.navigate(['/login']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}