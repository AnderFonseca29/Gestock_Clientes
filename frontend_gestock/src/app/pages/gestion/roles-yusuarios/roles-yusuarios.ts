import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './services/services';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles-yusuarios.html',
  styleUrl: './roles-yusuarios.css'
})
export class UsuariosComponent {
  private usuariosService = inject(UsuariosService);

  // Conexión directa a las señales del servicio
  usuarios = this.usuariosService.usuariosFiltrados;
  busqueda = this.usuariosService.filtroBusqueda;
  filtroEstado = this.usuariosService.filtroEstado;

  // Estados locales para modales y formularios
  modalFormularioAbierto = false;
  modalConfirmacionAbierto = false;
  esModoEdicion = false;
  
  rolesDisponibles = ['Administrador', 'Encargado de Bodega', 'Personal de Inventario'];
  formData: any = { nombre: '', email: '', rol: '' };

  // KPIs de ejemplo (puedes enlazarlos a tu servicio si ya los tienes calculados)
  totalUsuarios = 12;
  usuariosActivos = 8;
  horasTotalesHoy = '64h';

  abrirModalCrear(): void {
    this.esModoEdicion = false;
    this.formData = { nombre: '', email: '', rol: this.rolesDisponibles[0] };
    this.modalFormularioAbierto = true;
  }

  abrirModalEditar(usuario: any): void {
    this.esModoEdicion = true;
    this.formData = { ...usuario };
    this.modalFormularioAbierto = true;
  }

  cerrarModales(): void {
    this.modalFormularioAbierto = false;
    this.modalConfirmacionAbierto = false;
  }

  solicitarGuardado(): void {
    if (this.esModoEdicion) {
      this.modalConfirmacionAbierto = true;
    } else {
      // Lógica directa para crear si lo deseas
      this.cerrarModales();
    }
  }

  confirmarEdicion(): void {
    // Aquí ejecutas la lógica para guardar los cambios
    this.cerrarModales();
  }

  toggleEstado(usuarioOrId: any): void {
    const id = typeof usuarioOrId === 'object' ? usuarioOrId.id : usuarioOrId;
    this.usuariosService.toggleEstadoUsuario(id);
  }
}