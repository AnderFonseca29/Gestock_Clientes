import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService, EmpresaInfo } from '../../services/auth'; 

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css'
})
export class EmpresasComponent implements OnInit {

  empresa: EmpresaInfo = {
    nombre: '',
    email: '',
    moneda: 'COP',
    formatoFecha: 'YYYY-MM-DD'
  };

  guardando: boolean = false;
  mensajeExito: string = '';
  mensajeError: string = '';

  // Inyección de dependencias
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.cargarEmpresaGuardada();
  }

  cargarEmpresaGuardada(): void {
    const datosGuardados = this.authService.obtenerEmpresa();
    if (datosGuardados) {
      this.empresa = { ...datosGuardados };
    }
  }

  guardarCambios(): void {
    if (!this.empresa.nombre.trim() || !this.empresa.email.trim()) {
      this.mensajeError = 'Por favor completa los campos requeridos.';
      return;
    }

    this.guardando = true;
    this.mensajeError = '';

    try {
      this.authService.guardarEmpresa(this.empresa);

      setTimeout(() => {
        this.guardando = false;
        // Redirección directa hacia el Panel
        this.router.navigate(['/panel']);
      }, 300);

    } catch (error) {
      this.guardando = false;
      this.mensajeError = 'Ocurrió un error al guardar los cambios.';
    }
  }

  cancelar(): void {
    this.mensajeError = '';
    this.router.navigate(['/panel']);
  }
}