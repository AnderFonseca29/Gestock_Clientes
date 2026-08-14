import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, EmpresaInfo } from '../../services/auth'; // Ajusta la ruta a tu AuthService

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css'
})
export class EmpresasComponent implements OnInit {

  // Iniciamos campos de texto vacíos para que NO estorben al escribir
  empresa: EmpresaInfo = {
    nombre: '',
    email: '',
    moneda: 'COP',
    formatoFecha: 'YYYY-MM-DD'
  };

  guardando: boolean = false;
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.cargarEmpresaGuardada();
  }

  cargarEmpresaGuardada(): void {
    const datosGuardados = this.authService.obtenerEmpresa();
    // Solo asignamos si hay datos reales guardados previamente
    if (datosGuardados) {
      this.empresa = { ...datosGuardados };
    }
  }

  guardarCambios(): void {
    if (!this.empresa.nombre.trim() || !this.empresa.email.trim()) {
      this.mensajeError = 'Por favor completa los campos requeridos.';
      this.mensajeExito = '';
      return;
    }

    this.guardando = true;
    this.mensajeError = '';
    this.mensajeExito = '';

    try {
      // Guardar en AuthService / LocalStorage
      this.authService.guardarEmpresa(this.empresa);

      // Desactivar estado "Guardando..." en 300ms
      setTimeout(() => {
        this.guardando = false;
        this.mensajeExito = '¡Configuración guardada exitosamente!';
        
        setTimeout(() => this.mensajeExito = '', 3000);
      }, 300);

    } catch (error) {
      this.guardando = false;
      this.mensajeError = 'Ocurrió un error al guardar los cambios.';
    }
  }

  // Acción del botón Cancelar
  cancelar(): void {
    this.mensajeError = '';
    this.mensajeExito = '';
    this.cargarEmpresaGuardada(); // Restaura los datos anteriores
  }
}