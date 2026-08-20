import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  codigo: string;
  nombre: string;
  categoria: string;
  stock: number;
  stockMin: number;
  stockMax: number;
  ubicacion: string;
  fechaVencimiento: string;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class InventarioComponent {
  // Pestaña activa ('productos', 'registro', 'alertas')
  vistaActiva: 'productos' | 'registro' | 'alertas' = 'productos';

  // Formulario para registrar producto (HU020 - HU022)
  nuevoProducto: Producto = {
    id: 0,
    codigo: '',
    nombre: '',
    categoria: 'General',
    stock: 0,
    stockMin: 5,
    stockMax: 100,
    ubicacion: 'Bodega A-1',
    fechaVencimiento: ''
  };

  // Lista de productos en inventario (HU023, HU029, HU032)
  productos: Producto[] = [
    {
      id: 1,
      codigo: 'PROD-001',
      nombre: 'Empaque de Polietileno 500g',
      categoria: 'Empaques',
      stock: 120,
      stockMin: 20,
      stockMax: 200,
      ubicacion: 'Bodega A-12',
      fechaVencimiento: '2026-12-31'
    },
    {
      id: 2,
      codigo: 'PROD-002',
      nombre: 'Caja Cartón Corrugado T-3',
      categoria: 'Cajas',
      stock: 4, // Stock crítico
      stockMin: 15,
      stockMax: 150,
      ubicacion: 'Bodega B-04',
      fechaVencimiento: '2027-05-15'
    },
    {
      id: 3,
      codigo: 'PROD-003',
      nombre: 'Cinta Embalaje Industrial 100m',
      categoria: 'Insumos',
      stock: 85,
      stockMin: 10,
      stockMax: 100,
      ubicacion: 'Bodega A-02',
      fechaVencimiento: '2026-08-30' // Próximo a vencer
    }
  ];

  // HU021 & HU020: Validar código único y guardar producto
  guardarProducto(): void {
    if (!this.nuevoProducto.codigo || !this.nuevoProducto.nombre) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    const codigoExiste = this.productos.some(p => p.codigo === this.nuevoProducto.codigo);
    if (codigoExiste) {
      alert(`El código ${this.nuevoProducto.codigo} ya existe en el sistema.`);
      return;
    }

    this.productos.push({
      ...this.nuevoProducto,
      id: Date.now()
    });

    alert('Producto registrado exitosamente.');
    this.resetearFormulario();
    this.vistaActiva = 'productos';
  }

  resetearFormulario(): void {
    this.nuevoProducto = {
      id: 0,
      codigo: '',
      nombre: '',
      categoria: 'General',
      stock: 0,
      stockMin: 5,
      stockMax: 100,
      ubicacion: 'Bodega A-1',
      fechaVencimiento: ''
    };
  }

  // HU024: Notificación por stock bajo/máximo
  esStockBajo(producto: Producto): boolean {
    return producto.stock <= producto.stockMin;
  }

  esStockSobrepasado(producto: Producto): boolean {
    return producto.stock >= producto.stockMax;
  }

  // HU033: Verificar vencimientos próximos (ej. dentro de los próximos 30 días)
  esProximoAVencer(fechaStr: string): boolean {
    if (!fechaStr) return false;
    const fechaVenc = new Date(fechaStr);
    const hoy = new Date('2026-08-13'); // Fecha actual
    const diasDiferencia = (fechaVenc.getTime() - hoy.getTime()) / (1000 * 3600 * 24);
    return diasDiferencia >= 0 && diasDiferencia <= 30;
  }
}