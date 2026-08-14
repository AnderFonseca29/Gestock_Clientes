import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  codigo: string;
  nombre: string;
  categoria: string;
  stock: number;
  ubicacion: string;
  vencimiento: string;
  estado: string;
}

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class PanelComponent {

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

}