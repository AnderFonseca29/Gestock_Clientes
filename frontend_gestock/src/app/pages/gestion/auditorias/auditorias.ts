import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AuditoriaRegistro {
  id: number;
  usuario: string;
  accion: string;
  modulo: string;
  detalles: string;
  ip: string;
  created_at: string;
}

@Component({
  selector: 'app-auditorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditorias.html',
  styleUrls: ['./auditorias.css']
})
export class AuditoriasComponent implements OnInit {
  listaAuditorias = signal<AuditoriaRegistro[]>([]);
  cargando = signal<boolean>(false);

  ngOnInit(): void {
    this.cargarAuditorias();
  }

  cargarAuditorias() {
    this.cargando.set(true);
    
    // Datos independientes de auditoría
    const mockAuditorias: AuditoriaRegistro[] = [
      {
        id: 1,
        usuario: 'Anderson Rodelo',
        accion: 'MODIFICAR_ROL',
        modulo: 'Roles y Usuarios',
        detalles: 'Se actualizó el acceso del usuario Juan Pérez a Administrador.',
        ip: '192.168.1.15',
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        usuario: 'Maria Gomez',
        accion: 'REGISTRAR_STOCK',
        modulo: 'Inventario',
        detalles: 'Se ingresó el lote #104 de suministros de oficina.',
        ip: '192.168.1.22',
        created_at: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: 3,
        usuario: 'Carlos Vives',
        accion: 'LOGIN',
        modulo: 'Seguridad',
        detalles: 'Inicio de sesión exitoso en la plataforma GESTOCK.',
        ip: '192.168.1.8',
        created_at: new Date(Date.now() - 7200000).toISOString()
      }
    ];

    setTimeout(() => {
      this.listaAuditorias.set(mockAuditorias);
      this.cargando.set(false);
    }, 200);
  }
}