import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductoStock {
  id: number;
  nombre: string;
  categoria: string;
  stock: number;
  precio: number;
  estado: 'Disponible' | 'Bajo Stock' | 'Agotado';
}

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-list.html',
  styleUrls: ['./stock-list.css']
})
export class StockListComponent implements OnInit {
  productos = signal<ProductoStock[]>([]);

  ngOnInit(): void {
    this.cargarStock();
  }

  cargarStock() {
    // Datos independientes exclusivos de inventario/stock
    const mockStock: ProductoStock[] = [
      { id: 1, nombre: 'Lector de Código de Barras USB', categoria: 'Hardware', stock: 24, precio: 125000, estado: 'Disponible' },
      { id: 2, nombre: 'Papel Térmico 80x80mm', categoria: 'Consumibles', stock: 5, precio: 18000, estado: 'Bajo Stock' },
      { id: 3, nombre: 'Gaveta Dinero Metálica', categoria: 'Hardware', stock: 12, precio: 220000, estado: 'Disponible' },
      { id: 4, nombre: 'Etiquetadora Manual de Precios', categoria: 'Accesorios', stock: 0, precio: 35000, estado: 'Agotado' }
    ];
    this.productos.set(mockStock);
  }
}