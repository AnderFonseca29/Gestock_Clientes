import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './services/services';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './roles-yusuarios.html',
  styleUrl: './roles-yusuarios.css'
})
<<<<<<< HEAD
export class RolesUsuariosComponent {

  rolesDisponibles: string[] = [
    'Administrador',
    'Auxiliar de Bodega',
    'Cajero',
    'Auditor'
  ];
=======
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
>>>>>>> origin/develop

  // KPIs de ejemplo (puedes enlazarlos a tu servicio si ya los tienes calculados)
  totalUsuarios = 12;
  usuariosActivos = 8;
  horasTotalesHoy = '64h';

<<<<<<< HEAD
  modalAbierto = false;

  esModoEdicion = false;

  idUsuarioEditando: number | null = null;

  formData = {
    nombre: '',
    email: '',
    rol: 'Auxiliar de Bodega'
  };


  // ==========================================
  // KPIs
  // ==========================================

  get totalUsuarios(): number {
    return this.usuarios.length;
  }


  get usuariosActivos(): number {
    return this.usuarios.filter(
      usuario => usuario.activo
    ).length;
  }


  get horasTotalesHoy(): string {

    let minutosTotales = 0;

    this.usuarios.forEach(usuario => {

      const match =
        usuario.tiempoTrabajadoHoy.match(
          /(\d+)h\s*(\d+)m/
        );

      if (match) {

        minutosTotales +=
          parseInt(match[1]) * 60 +
          parseInt(match[2]);

      }

    });

    const horas =
      Math.floor(minutosTotales / 60);

    const minutos =
      minutosTotales % 60;

    return `${horas}h ${minutos}m`;
  }


  // ==========================================
  // CREAR USUARIO
  // ==========================================

=======
>>>>>>> origin/develop
  abrirModalCrear(): void {

    this.esModoEdicion = false;
<<<<<<< HEAD

    this.idUsuarioEditando = null;

    this.formData = {
      nombre: '',
      email: '',
      rol: 'Auxiliar de Bodega'
    };

    this.modalAbierto = true;
  }


  // ==========================================
  // EDITAR USUARIO
  // ==========================================

  abrirModalEditar(
    usuario: UsuarioEmpleado
  ): void {

    this.esModoEdicion = true;

    this.idUsuarioEditando =
      usuario.id;

    this.formData = {
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    };

    this.modalAbierto = true;
  }


  // ==========================================
  // CERRAR MODAL
  // ==========================================

  cerrarModal(): void {

    this.modalAbierto = false;

    this.idUsuarioEditando = null;
  }


  // ==========================================
  // GUARDAR USUARIO
  // ==========================================

  guardarUsuario(): void {

    if (
      !this.formData.nombre ||
      !this.formData.email
    ) {
      return;
    }


    // EDITAR

    if (
      this.esModoEdicion &&
      this.idUsuarioEditando !== null
    ) {

      const usuario =
        this.usuarios.find(
          u =>
            u.id ===
            this.idUsuarioEditando
        );

      if (usuario) {

        usuario.nombre =
          this.formData.nombre;

        usuario.email =
          this.formData.email;

        usuario.rol =
          this.formData.rol;
      }

    }

    // CREAR

    else {

      const nuevoUsuario: UsuarioEmpleado = {

        id: Date.now(),

        nombre:
          this.formData.nombre,

        email:
          this.formData.email,

        rol:
          this.formData.rol,

        activo: false,

        tiempoTrabajadoHoy:
          '0h 0m',

        avatarColor:
          '#0F172A'
      };

      this.usuarios.push(
        nuevoUsuario
      );
    }


    this.cerrarModal();
  }


  // ==========================================
  // ACTIVAR / DESACTIVAR
  // ==========================================

  toggleEstado(
    usuario: UsuarioEmpleado
  ): void {

    usuario.activo =
      !usuario.activo;

    if (
      usuario.activo &&
      usuario.tiempoTrabajadoHoy ===
      '0h 0m'
    ) {

      usuario.tiempoTrabajadoHoy =
        '0h 01m';
    }
  }


  // ==========================================
  // CAMBIAR ROL
  // ==========================================

  cambiarRolDirecto(
    usuario: UsuarioEmpleado,
    nuevoRol: string
  ): void {

    usuario.rol = nuevoRol;
=======
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
>>>>>>> origin/develop
  }

}