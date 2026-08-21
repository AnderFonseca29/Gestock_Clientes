import { Component, inject, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '@angular/core'; 


@Component({
  selector: 'app-bodegas',
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe],
  templateUrl: './bodegas.html',
  styleUrl: './bodegas.css'
})
export class BodegasComponent {
  private inventarioService = inject(Service);

  // Signals y datos del servicio
  bodegas = this.inventarioService.bodegas;

  // Estado del Modal de Nueva Bodega
  mostrarModal = signal<boolean>(false);

  // Formulario reactivo para nueva bodega con campos vacíos
  nuevaBodega = {
    nombre: '',
    codigo: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    responsable: '',
    capacidad: null as number | null
  };

  // Activar o desactivar bodega
  toggleEstado(id: number): void {
    this.inventarioService.toggleEstadoBodega(id);
  }

  // Calcular porcentaje de ocupación
  getPorcentaje(ocupado: number, capacidad: number): number {
    if (!capacidad || capacidad === 0) return 0;
    return Math.round((ocupado / capacidad) * 100);
  }

  // Guardar nueva bodega con validación de todos los campos obligatorios
  crearBodega(): void {
    const esValido = 
      this.nuevaBodega.nombre.trim() !== '' &&
      this.nuevaBodega.codigo.trim() !== '' &&
      this.nuevaBodega.direccion.trim() !== '' &&
      this.nuevaBodega.ciudad.trim() !== '' &&
      this.nuevaBodega.telefono.trim() !== '' &&
      this.nuevaBodega.responsable.trim() !== '' &&
      this.nuevaBodega.capacidad !== null;

    if (!esValido) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    this.inventarioService.agregarBodega(this.nuevaBodega as any);
    
    // Cerrar modal y limpiar formulario
    this.mostrarModal.set(false);
    this.nuevaBodega = { 
      nombre: '', 
      codigo: '', 
      direccion: '', 
      ciudad: '', 
      telefono: '', 
      responsable: '', 
      capacidad: null 
    };
  }
}