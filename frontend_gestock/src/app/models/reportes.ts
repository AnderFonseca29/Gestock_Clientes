export interface KpiResumen {
  valorTotal: number;
  costeTotal: number;
  margenGanancia: number;
  porcentajeMargen: number;
}

export interface CategoriaReporte {
  nombre: string;
  cantidadProductos: number;
  totalValor: number;
  porcentaje: number;
  colorHex: string;
}