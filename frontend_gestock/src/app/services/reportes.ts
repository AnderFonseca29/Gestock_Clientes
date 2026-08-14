import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor() {}

  obtenerBodegas(): any[] {
    return [
      {
        id: '1',
        nombre: 'Bodega Principal'
      },
      {
        id: '2',
        nombre: 'Bodega Secundaria'
      },
      {
        id: '3',
        nombre: 'Bodega de Tecnología'
      }
    ];
  }

  obtenerMetricas(bodegaId: string): any {

    if (bodegaId === 'todas') {
      return {
        valorTotal: 12500000,
        costeTotal: 8500000,
        margenGanancia: 4000000
      };
    }

    if (bodegaId === '1') {
      return {
        valorTotal: 6500000,
        costeTotal: 4300000,
        margenGanancia: 2200000
      };
    }

    if (bodegaId === '2') {
      return {
        valorTotal: 3500000,
        costeTotal: 2500000,
        margenGanancia: 1000000
      };
    }

    if (bodegaId === '3') {
      return {
        valorTotal: 2500000,
        costeTotal: 1700000,
        margenGanancia: 800000
      };
    }

    return {
      valorTotal: 0,
      costeTotal: 0,
      margenGanancia: 0
    };
  }

  obtenerCategorias(bodegaId: string): any[] {

    if (bodegaId === 'todas') {
      return [
        {
          id: '1',
          nombre: 'Tecnología',
          cantidad: 35,
          valor: 4500000
        },
        {
          id: '2',
          nombre: 'Accesorios',
          cantidad: 50,
          valor: 2500000
        },
        {
          id: '3',
          nombre: 'Periféricos',
          cantidad: 30,
          valor: 3000000
        },
        {
          id: '4',
          nombre: 'Componentes',
          cantidad: 20,
          valor: 2500000
        }
      ];
    }

    if (bodegaId === '1') {
      return [
        {
          id: '1',
          nombre: 'Tecnología',
          cantidad: 20,
          valor: 2500000
        },
        {
          id: '2',
          nombre: 'Accesorios',
          cantidad: 30,
          valor: 1500000
        },
        {
          id: '3',
          nombre: 'Periféricos',
          cantidad: 15,
          valor: 2500000
        }
      ];
    }

    if (bodegaId === '2') {
      return [
        {
          id: '1',
          nombre: 'Tecnología',
          cantidad: 10,
          valor: 1500000
        },
        {
          id: '2',
          nombre: 'Accesorios',
          cantidad: 20,
          valor: 1000000
        }
      ];
    }

    if (bodegaId === '3') {
      return [
        {
          id: '1',
          nombre: 'Componentes',
          cantidad: 20,
          valor: 2500000
        }
      ];
    }

    return [];
  }

  exportarReporte(
    bodegaId: string,
    formato: string
  ): boolean {

    const metricas = this.obtenerMetricas(bodegaId);
    const categorias = this.obtenerCategorias(bodegaId);

    if (!metricas || categorias.length === 0) {
      return false;
    }

    console.log('Reporte exportado');
    console.log('Bodega:', bodegaId);
    console.log('Formato:', formato);
    console.log('Métricas:', metricas);
    console.log('Categorías:', categorias);

    return true;
  }

    // ==========================================
    // DATOS DE MOVIMIENTOS
    // ==========================================

    movimientos = [
    {
        producto: 'Resma de Papel A4 500h',
        codigo: 'PAPEL-A4-500',
        entradas: 100,
        salidas: 0,
        movimiento: 100
    },
    {
        producto: 'Batería Portátil 20000mAh',
        codigo: 'BAT-POR-20K',
        entradas: 20,
        salidas: 0,
        movimiento: 20
    },
    {
        producto: 'Mouse Inalámbrico Logitech',
        codigo: 'MOU-LOG-001',
        entradas: 0,
        salidas: 12,
        movimiento: -12
    },
    {
        producto: 'Laptop Dell Inspiron 15',
        codigo: 'LAP-DELL-001',
        entradas: 0,
        salidas: 5,
        movimiento: -5
    }
    ];

    totalEntradas = 130;
    totalSalidas = 17;
}