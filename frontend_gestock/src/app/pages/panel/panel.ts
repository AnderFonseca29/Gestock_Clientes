import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos de Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Componentes modales
import { CrearInventarioComponent } from '../crear-inventario/crear-inventario';
import { CambiarInventarioComponent, InventarioItem } from '../cambiar-inventario/cambiar-inventario';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    CrearInventarioComponent,
    CambiarInventarioComponent
  ],
  templateUrl: './panel.html',
  styleUrls: ['./panel.css']
})
export class PanelComponent {

  // Modales
  mostrarModalCrear: boolean = false;
  mostrarModalCambiar: boolean = false;

  // 1. OBJETO KPIS
  kpis = {
    totalPrecios: 19,
    activos: 19,
    valorInventario: 29997,
    porcentajeMesAnterior: 12,
    alertasTotal: 4,
    alertasBajo: 2,
    alertasAgotado: 2,
    bodegasActivas: 3,
    usuariosActivos: 4,
    tasaOcupacion: 63
  };

  // 2. ARREGLO STOCK ALERTS
  stockAlerts = [
    { product: 'Disco duro externo 1TB', location: 'Bodega central', current: 3, max: 10, percentage: 30 },
    { product: 'Mouse inalambrico logitech', location: 'Sucursal Norte', current: 8, max: 20, percentage: 40 }
  ];

  // 3. ARREGLO MOVIMIENTOS
  movements = [
    { title: 'Pc', description: '+10 unidades | Administrador', date: '20/01/2026', type: 'Entrada' },
    { title: 'Monitor', description: '-5 unidades | Maicol Nore (Gerente)', date: '24/01/2026', type: 'Salida' },
    { title: 'Mouse', description: '+8 unidades | Erick Ruiz (Operador)', date: '28/01/2026', type: 'Transferencia' }
  ];

  // Lista de inventarios simulada
  inventarios: InventarioItem[] = [
    { id: 1, nombre: 'Inventario General Bodega 1', ubicacion: 'Bodega 1', responsable: 'Maicol Nore', estado: 'En proceso', esActivo: true },
    { id: 2, nombre: 'Inventario Dispositivos - Almacén Principal', ubicacion: 'Almacén Principal', responsable: 'Administrador', estado: 'Borrador', esActivo: false },
    { id: 3, nombre: 'Stock Componentes PC', ubicacion: 'Bodega 1', responsable: 'Erick Ruiz', estado: 'En proceso', esActivo: false }
  ];

  // VARIABLE PARA EL INVENTARIO ACTIVO (Inicializa con el primero de la lista)
  inventarioActivo: InventarioItem = this.inventarios[0];

  // Métodos para abrir/cerrar modales
  openCrearInventario(): void {
    this.mostrarModalCrear = true;
  }

  openCambiarInventario(): void {
    this.mostrarModalCambiar = true;
  }

  cerrarModales(): void {
    this.mostrarModalCrear = false;
    this.mostrarModalCambiar = false;
  }

  cerrarModal(): void {
    this.cerrarModales();
  }

  // Eventos de modales
  onInventarioCreado(nuevo: any): void {
    this.kpis.totalPrecios += 1;
    this.kpis.activos += 1;

    const hoy = new Date();
    const fechaActual = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;

    // Crear el nuevo objeto inventario
    const nuevoItem: InventarioItem = {
      id: Date.now(),
      nombre: nuevo.nombre || 'Nuevo Inventario',
      ubicacion: nuevo.ubicacion || 'Bodega General',
      responsable: nuevo.responsable || 'Maicol Nore',
      estado: nuevo.estadoInicial || 'En proceso',
      esActivo: true
    };

    // Desmarcar todos y agregar el nuevo al inicio
    this.inventarios.forEach(inv => inv.esActivo = false);
    this.inventarios.unshift(nuevoItem);

    // Actualizar el título activo
    this.inventarioActivo = nuevoItem;

    this.movements.unshift({
      title: nuevo.nombre || 'Nuevo Inventario',
      description: `+1 unidad | ${nuevo.responsable || 'Maicol Nore'}`,
      date: fechaActual,
      type: 'Entrada'
    });

    this.cerrarModales();
  }

  onInventarioSeleccionado(invSeleccionado: InventarioItem): void {
    // Marcar como activo en el arreglo
    this.inventarios.forEach(inv => inv.esActivo = (inv.id === invSeleccionado.id));
    
    // Asignar al inventario activo para cambiar la interfaz
    this.inventarioActivo = invSeleccionado;

    this.cerrarModales();
  }

  onModalesCancelado(): void {
    this.cerrarModales();
  }
}