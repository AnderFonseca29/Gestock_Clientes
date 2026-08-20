import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css']
})
export class ListaProductos {
  // Datos de ejemplo para que no dé error de compilación si usa una signal
  productos = signal([
    { id: 1, nombre: 'Producto Ejemplo', categoria: 'General', stock: 10, precio: 50000, estado: 'Disponible' }
  ]);
}