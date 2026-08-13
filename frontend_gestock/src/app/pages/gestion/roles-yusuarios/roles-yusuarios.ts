import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface UsuarioEmpleado {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  activo: boolean;
  tiempoTrabajadoHoy: string;
  avatarColor: string;
}

@Component({
  selector: 'app-roles-yusuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles-yusuarios.html',
  styleUrl: './roles-yusuarios.css'
})
export class RolesYusuariosComponent {
  
  rolesDisponibles: string[] = [
    'Administrador',
    'Auxiliar de Bodega',
    'Cajero',
    'Auditor'
  ];

  usuarios: UsuarioEmpleado[] = [
    {
      id: 1,
      nombre: 'Carlos Mendoza',
      email: 'carlos.mendoza@gestock.com',
      rol: 'Auxiliar de Bodega',
      activo: true,
      tiempoTrabajadoHoy: '6h 15m',
      avatarColor: '#2563EB'
    },
    {
      id: 2,
      nombre: 'María Paula Gómez',
      email: 'maria.gomez@gestock.com',
      rol: 'Cajero',
      activo: true,
      tiempoTrabajadoHoy: '4h 50m',
      avatarColor: '#10B981'
    },
    {
      id: 3,
      nombre: 'John Alexander Pérez',
      email: 'john.perez@gestock.com',
      rol: 'Auditor',
      activo: false,
      tiempoTrabajadoHoy: '0h 0m',
      avatarColor: '#64748B'
    }
  ];

  // Control del Modal
  modalAbierto: boolean = false;
  esModoEdicion: boolean = false;
  idUsuarioEditando: number | null = null;

  // Formulario vinculado
  formData = {
    nombre: '',
    email: '',
    rol: 'Auxiliar de Bodega'
  };

  // KPIs
  get totalUsuarios(): number {
    return this.usuarios.length;
  }

  get usuariosActivos(): number {
    return this.usuarios.filter(u => u.activo).length;
  }

  get horasTotalesHoy(): string {
    let minutosTotales = 0;
    this.usuarios.forEach(u => {
      const match = u.tiempoTrabajadoHoy.match(/(\d+)h\s*(\d+)m/);
      if (match) {
        minutosTotales += parseInt(match[1]) * 60 + parseInt(match[2]);
      }
    });
    const horas = Math.floor(minutosTotales / 60);
    const mins = minutosTotales % 60;
    return `${horas}h ${mins}m`;
  }

  // --- MÉTODOS DEL MODAL ---
  abrirModalCrear(): void {
    this.esModoEdicion = false;
    this.idUsuarioEditando = null;
    this.formData = { nombre: '', email: '', rol: 'Auxiliar de Bodega' };
    this.modalAbierto = true;
  }

  abrirModalEditar(usuario: UsuarioEmpleado): void {
    this.esModoEdicion = true;
    this.idUsuarioEditando = usuario.id;
    this.formData = {
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    };
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.idUsuarioEditando = null;
  }

  guardarUsuario(): void {
    if (!this.formData.nombre || !this.formData.email) return;

    if (this.esModoEdicion && this.idUsuarioEditando !== null) {
      // Editar usuario existente
      const usuario = this.usuarios.find(u => u.id === this.idUsuarioEditando);
      if (usuario) {
        usuario.nombre = this.formData.nombre;
        usuario.email = this.formData.email;
        usuario.rol = this.formData.rol;
      }
    } else {
      // Crear nuevo usuario
      const nuevo: UsuarioEmpleado = {
        id: Date.now(),
        nombre: this.formData.nombre,
        email: this.formData.email,
        rol: this.formData.rol,
        activo: false,
        tiempoTrabajadoHoy: '0h 0m',
        avatarColor: '#0F172A'
      };
      this.usuarios.push(nuevo);
    }

    this.cerrarModal();
  }

  toggleEstado(usuario: UsuarioEmpleado): void {
    usuario.activo = !usuario.activo;
    if (usuario.activo && usuario.tiempoTrabajadoHoy === '0h 0m') {
      usuario.tiempoTrabajadoHoy = '0h 01m';
    }
  }

  cambiarRolDirecto(usuario: UsuarioEmpleado, nuevoRol: string): void {
    usuario.rol = nuevoRol;
  }
}