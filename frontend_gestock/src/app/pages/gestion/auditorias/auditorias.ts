import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RegistroAuditoria {
  id: number;
  usuario: string;
  rol: string;
  accion: string;
  modulo: string;
  fechaHora: string;
  detalles: string;
}

@Component({
  selector: 'app-auditorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auditorias.html',
  styleUrl: './auditorias.css'
})
export class AuditoriasComponent {
  // Filtros
  filtroUsuario: string = '';
  filtroAccion: string = '';
  filtroFecha: string = '';

  // Datos de prueba (Registro de actividades - HU017 / HU018)
  registros: RegistroAuditoria[] = [
    {
      id: 101,
      usuario: 'Anderson Rodelo',
      rol: 'Administrador',
      accion: 'Creación',
      modulo: 'Inventario',
      fechaHora: '2026-08-13 10:15',
      detalles: 'Registró nuevo producto COD-9948'
    },
    {
      id: 102,
      usuario: 'Carlos Mendoza',
      rol: 'Auxiliar de Bodega',
      accion: 'Modificación',
      modulo: 'Movimientos',
      fechaHora: '2026-08-13 09:30',
      detalles: 'Ajustó stock de 50 a 45 unidades'
    },
    {
      id: 103,
      usuario: 'Maria Gomez',
      rol: 'Supervisión / Auditor',
      accion: 'Asignación',
      modulo: 'Roles y Permisos',
      fechaHora: '2026-08-12 16:45',
      detalles: 'Asignó permiso HU015 a Auxiliar'
    },
    {
      id: 104,
      usuario: 'Anderson Rodelo',
      rol: 'Administrador',
      accion: 'Eliminación',
      modulo: 'Usuarios',
      fechaHora: '2026-08-12 11:20',
      detalles: 'Revocó usuario inactivo ID-40'
    }
  ];

  // HU019: Filtrado dinámico por tipo de acción, usuario o fecha
  get registrosFiltrados(): RegistroAuditoria[] {
    return this.registros.filter(reg => {
      const coincideUsuario = !this.filtroUsuario || 
        reg.usuario.toLowerCase().includes(this.filtroUsuario.toLowerCase());
      
      const coincideAccion = !this.filtroAccion || 
        reg.accion === this.filtroAccion;

      const coincideFecha = !this.filtroFecha || 
        reg.fechaHora.startsWith(this.filtroFecha);

      return coincideUsuario && coincideAccion && coincideFecha;
    });
  }

  limpiarFiltros(): void {
    this.filtroUsuario = '';
    this.filtroAccion = '';
    this.filtroFecha = '';
  }
}