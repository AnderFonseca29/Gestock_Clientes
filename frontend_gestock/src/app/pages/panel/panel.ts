import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
<<<<<<< HEAD
interface Producto {
  codigo: string;
  nombre: string;
  categoria: string;
  stock: number;
  ubicacion: string;
  vencimiento: string;
  estado: string;
}
=======
// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
=======
// Módulos de Angular Material
>>>>>>> origin/develop
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Componentes modales
import { CrearInventarioComponent } from '../crear-inventario/crear-inventario';
<<<<<<< HEAD
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
=======
import { CambiarInventarioComponent, InventarioItem } from '../cambiar-inventario/cambiar-inventario';
>>>>>>> origin/develop

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
<<<<<<< HEAD
    CommonModule
=======
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
<<<<<<< HEAD
    MatDialogModule
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
=======
    MatProgressBarModule,
    CrearInventarioComponent,
    CambiarInventarioComponent
>>>>>>> origin/develop
  ],
  templateUrl: './panel.html',
  styleUrls: ['./panel.css']
})
export class PanelComponent {

<<<<<<< HEAD
<<<<<<< HEAD
  productos: Producto[] = [
    {
      codigo: 'PROD-001',
      nombre: 'Empaque de Polietileno 500g',
      categoria: 'Empaques',
      stock: 120,
      ubicacion: 'Bodega A-12',
      vencimiento: '2026-12-31',
      estado: 'Óptimo'
    },
    {
      codigo: 'PROD-002',
      nombre: 'Mouse Logitech',
      categoria: 'Electrónica',
      stock: 35,
      ubicacion: 'Bodega B-04',
      vencimiento: 'No aplica',
      estado: 'Óptimo'
    },
    {
      codigo: 'PROD-003',
      nombre: 'Teclado Mecánico',
      categoria: 'Electrónica',
      stock: 12,
      ubicacion: 'Bodega B-06',
      vencimiento: 'No aplica',
      estado: 'Bajo'
    },
    {
      codigo: 'PROD-004',
      nombre: 'Monitor 24 pulgadas',
      categoria: 'Electrónica',
      stock: 7,
      ubicacion: 'Bodega C-02',
      vencimiento: 'No aplica',
      estado: 'Bajo'
    }
  ];


  get totalProductos(): number {
    return this.productos.length;
  }


  get stockTotal(): number {
    return this.productos.reduce(
      (total, producto) => total + producto.stock,
      0
    );
  }


  get productosBajoStock(): number {
    return this.productos.filter(
      producto => producto.stock <= 15
    ).length;
  }


  get productosOptimos(): number {
    return this.productos.filter(
      producto => producto.estado === 'Óptimo'
    ).length;
  }

=======
  // 1. Declaramos las Alertas de Stock Bajo que usa el HTML
=======
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
>>>>>>> origin/develop
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
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}