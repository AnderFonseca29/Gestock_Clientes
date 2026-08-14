import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Componente del Modal Crear Inventario
import { CrearInventarioComponent } from '../crear-inventario/crear-inventario';
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
<<<<<<< HEAD
    CommonModule
=======
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class PanelComponent {

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
  stockAlerts = [
    {
      product: 'Disco duro externo 1TB',
      location: 'Bodega central',
      current: 3,
      max: 10,
      percentage: 30
    },
    {
      product: 'Mouse inalambrico logitech',
      location: 'Sucursal Norte',
      current: 8,
      max: 20,
      percentage: 40
    }
  ];

  // 2. Declaramos los Últimos Movimientos que usa el HTML
  movements = [
    {
      title: 'Pc',
      description: '+10 unidades | Administrador',
      date: '20/01/2026',
      type: 'Entrada'
    },
    {
      title: 'Monitor',
      description: '-5 unidades | Maicol Nore (Gerente)',
      date: '24/01/2026',
      type: 'Salida'
    },
    {
      title: 'Mouse',
      description: '+8 unidades | Erick Ruiz (Operador)',
      date: '28/01/2026',
      type: 'Transferencia'
    }
  ];

  constructor(private dialog: MatDialog) {}

  // 3. Método para abrir la ventana modal
  openCrearInventario(): void {
    this.dialog.open(CrearInventarioComponent, {
      width: '850px',
      panelClass: 'custom-dialog-container',
      disableClose: false
    });
  }
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}