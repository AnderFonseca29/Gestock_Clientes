import { Injectable, signal, computed } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: 'En línea' | 'Inactivo';
  horasTrabajadas: string;
  minutosHoy: number; // Útil para filtrar por tiempo trabajado si lo deseas
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  usuarios = signal<Usuario[]>([
    { id: 1, nombre: 'Carlos Mendoza', email: 'carlos.mendoza@gestock.com', rol: 'Auxiliar de Bodega', estado: 'En línea', horasTrabajadas: '6h 15m', minutosHoy: 375 },
    { id: 2, nombre: 'María Paula Gómez', email: 'maria.gomez@gestock.com', rol: 'Cajero', estado: 'En línea', horasTrabajadas: '4h 50m', minutosHoy: 290 },
    { id: 3, nombre: 'John Alexander Pérez', email: 'john.perez@gestock.com', rol: 'Auditor', estado: 'Inactivo', horasTrabajadas: '0h 01m', minutosHoy: 1 }
  ]);

  // Filtros
  filtroBusqueda = signal<string>('');
  filtroEstado = signal<string>('Todos'); // 'Todos', 'En línea', 'Inactivo'

  // Lista filtrada y ordenada automáticamente (Activos arriba, Inactivos abajo)
  usuariosFiltrados = computed(() => {
    const term = this.filtroBusqueda().toLowerCase();
    const estado = this.filtroEstado();

    // 1. Filtrar
    const filtrados = this.usuarios().filter(u => {
      const coincideTexto = u.nombre.toLowerCase().includes(term) || 
                            u.email.toLowerCase().includes(term) || 
                            u.rol.toLowerCase().includes(term);
      const coincideEstado = estado === 'Todos' || u.estado === estado;
      return coincideTexto && coincideEstado;
    });

    // 2. Ordenar automáticamente: 'En línea' primero, 'Inactivo' al final
    return filtrados.sort((a, b) => {
      if (a.estado === 'En línea' && b.estado === 'Inactivo') return -1;
      if (a.estado === 'Inactivo' && b.estado === 'En línea') return 1;
      return 0;
    });
  });

  toggleEstadoUsuario(id: number) {
    this.usuarios.update(lista => 
      lista.map(u => u.id === id ? { ...u, estado: u.estado === 'En línea' ? 'Inactivo' : 'En línea' } : u)
    );
  }
}