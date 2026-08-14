import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// MÓDULOS DE ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// IMPORTACIÓN DE COMPONENTES DE MODALES DESDE LA CARPETA PAGINAS
import { CambiarInventarioComponent } from '../cambiar-inventario/cambiar-inventario';
import { CrearInventarioComponent } from '../crear-inventario/crear-inventario';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    CambiarInventarioComponent,
    CrearInventarioComponent
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class PanelComponent {

  // 1. VARIABLES PARA CONTROLAR LOS MODALES
  mostrarModalCambiar: boolean = false;
  mostrarModalCrear: boolean = false;

  // 2. DATOS DE INVENTARIOS
  inventarios: any[] = [
    { id: 1, nombre: 'Bodega Principal' },
    { id: 2, nombre: 'Bodega Norte' }
  ];

  inventarioActivo = {
    id: 1,
    nombre: 'Bodega Principal'
  };

  // 3. MÉTRICAS Y KPIS DEL DASHBOARD
  kpis = {
    totalPrecios: 120,
    activos: 115,
    valorInventario: 45000000,
    porcentajeMesAnterior: 12,
    alertasTotal: 5,
    alertasBajo: 3,
    alertasAgotado: 2,
    bodegasActivas: 4,
    usuariosActivos: 8,
    tasaOcupacion: 78
  };

  // 4. LISTADO DE ALERTAS DE STOCK BAJO
  stockAlerts = [
    { product: 'Aceite de Motor 20W50', location: 'Estante A-12', current: 2, max: 20, percentage: 10 },
    { product: 'Filtro de Aire Universal', location: 'Estante B-04', current: 5, max: 30, percentage: 16 }
  ];

  // 5. MOVIMIENTOS RECIENTES
  movements = [
    { title: 'Entrada de mercancía', description: '50 unidades de Pastillas de Freno', date: 'Hoy, 10:30 AM', type: 'Entrada' },
    { title: 'Salida de bodega', description: '2 unidades de Kit de Arrastre 520', date: 'Ayer, 04:15 PM', type: 'Salida' }
  ];

  // 6. MÉTODOS PARA ABRIR/CERRAR MODALES
  openCambiarInventario(): void {
    this.mostrarModalCambiar = true;
  }

  openCrearInventario(): void {
    this.mostrarModalCrear = true;
  }

  cerrarModal(): void {
    this.mostrarModalCambiar = false;
    this.mostrarModalCrear = false;
  }

  // 7. MANEJADORES DE EVENTOS
  onInventarioSeleccionado(inventario: any): void {
    this.inventarioActivo = inventario;
    this.cerrarModal();
  }

  onInventarioCreado(nuevoInventario: any): void {
    this.inventarios.push(nuevoInventario);
    this.inventarioActivo = nuevoInventario;
    this.cerrarModal();
  }
}