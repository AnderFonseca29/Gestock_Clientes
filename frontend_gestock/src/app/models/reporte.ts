//Modelo de datos para el módulo de Reportes y análisis (HU044-HU055)

export interface CategoriaInventario {
    nombre: string;
    color: string;
    productos: number;
    valor: number;
    porcentaje: number;
}

export interface MetricasInventario {
    valorTotal: number;
    costeTotal: number;
    margenGanancia: number;
}

//Vistas disponibles dentro del panel de reportes (HU053-HU054)
export type VistaReporte = 'inventario' | 'movimientos' | 'bodega';

//Formatos soportados para exportación (HU045, HU050, HU051)
export type FormatoExportacion = 'PDF' | 'Excel';

export interface Bodega {
    id: string;
    nombre: string;
}