import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  codigo: string;
  nombre: string;
  categoria: string;
  ubicacion: string;
  stockActual: number;
  stockMinimo: number;
  estado: 'Óptimo' | 'Bajo Mínimo' | 'Crítico';
}

export interface Bodega {
  id: number;
  nombre: string;
  ciudad: string;
  responsable: string;
  telefono: string;
  ocupado: number;
  capacidad: number;
  activa: boolean;
  icono: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  // Signals base
  bodegas = signal<Bodega[]>([
    { id: 1, nombre: 'Bodega Central', ciudad: 'Bogotá', responsable: 'Erick Ruiz', telefono: '333-444-6565', ocupado: 8074, capacidad: 10000, activa: true, icono: '🏢' },
    { id: 2, nombre: 'Sucursal Norte', ciudad: 'Santa Marta', responsable: 'Anderson Fonseca', telefono: '333-444-6565', ocupado: 4765, capacidad: 10000, activa: true, icono: '🏭' },
    { id: 3, nombre: 'Sucursal Sur', ciudad: 'Yopal', responsable: 'Maicol Nore', telefono: '333-444-6565', ocupado: 7563, capacidad: 10000, activa: true, icono: '🏬' },
    { id: 4, nombre: 'Sucursal Temporal', ciudad: 'Catatumbo', responsable: 'Marlon', telefono: '333-444-6565', ocupado: 6315, capacidad: 10000, activa: false, icono: '📦' }
  ]);

  productos = signal<Producto[]>([
    { codigo: 'PROD-001', nombre: 'Empaque de Polietileno 500g', categoria: 'Empaques', ubicacion: 'Bodega Central', stockActual: 120, stockMinimo: 20, estado: 'Óptimo' },
    { codigo: 'PROD-002', nombre: 'Caja Cartón Corrugado T-3', categoria: 'Cajas', ubicacion: 'Sucursal Norte', stockActual: 4, stockMinimo: 15, estado: 'Bajo Mínimo' },
    { codigo: 'PROD-003', nombre: 'Cinta Embalaje Industrial 100m', categoria: 'Insumos', ubicacion: 'Sucursal Sur', stockActual: 85, stockMinimo: 10, estado: 'Óptimo' },
    { codigo: 'PROD-004', nombre: 'Lona de Embalaje 2x2', categoria: 'Insumos', ubicacion: 'Sucursal Temporal', stockActual: 50, stockMinimo: 5, estado: 'Óptimo' }
  ]);

  // Bodegas activas para el selector
  bodegasActivas = computed(() => this.bodegas().filter(b => b.activa));

  // Productos visibles en Existencias (solo de bodegas activas)
  productosVisibles = computed(() => {
    const nombresBodegasActivas = new Set(this.bodegasActivas().map(b => b.nombre));
    return this.productos().filter(p => nombresBodegasActivas.has(p.ubicacion));
  });

  // Comprobar si el código existe
  existeCodigo(codigo: string): boolean {
    const codigoLimpio = codigo.trim().toLowerCase();
    return this.productos().some(p => p.codigo.trim().toLowerCase() === codigoLimpio);
  }

  // Registrar producto y sumar ocupación
  registrarProducto(datos: {
    codigo: string;
    nombre: string;
    categoria: string;
    ubicacion: string;
    stockInicial: number;
    stockMinimo: number;
  }): void {
    let estado: 'Óptimo' | 'Bajo Mínimo' | 'Crítico' = 'Óptimo';
    if (datos.stockInicial === 0) {
      estado = 'Crítico';
    } else if (datos.stockInicial < datos.stockMinimo) {
      estado = 'Bajo Mínimo';
    }

    const nuevoProducto: Producto = {
      codigo: datos.codigo.trim().toUpperCase(),
      nombre: datos.nombre,
      categoria: datos.categoria,
      ubicacion: datos.ubicacion,
      stockActual: datos.stockInicial,
      stockMinimo: datos.stockMinimo,
      estado
    };

    this.productos.update(lista => [nuevoProducto, ...lista]);

    this.bodegas.update(lista =>
      lista.map(bodega => {
        if (bodega.nombre === datos.ubicacion) {
          return { ...bodega, ocupado: bodega.ocupado + datos.stockInicial };
        }
        return bodega;
      })
    );
  }

  // Activar / Desactivar Bodega
  toggleEstadoBodega(id: number): void {
    this.bodegas.update(lista =>
      lista.map(b => (b.id === id ? { ...b, activa: !b.activa } : b))
    );
  }
  // En inventario.service.ts, añade esto dentro de la clase:

// Variables de estado para filtros
filtroBusqueda = signal<string>('');
filtroCategoria = signal<string>('Todas');

// Filtro avanzado: Busca por código/nombre y filtra por categoría
productosFiltrados = computed(() => {
  const termino = this.filtroBusqueda().toLowerCase();
  const cat = this.filtroCategoria();
  
  return this.productosVisibles().filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(termino) || 
                            p.codigo.toLowerCase().includes(termino);
    const coincideCategoria = cat === 'Todas' || p.categoria === cat;
    
    return coincideBusqueda && coincideCategoria;
  });
});
// En inventario.service.ts
agregarBodega(nueva: Bodega): void {
  this.bodegas.update(lista => [...lista, { ...nueva, id: lista.length + 1, activa: true, ocupado: 0 }]);
}

}