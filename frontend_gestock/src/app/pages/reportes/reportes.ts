import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Importar CommonModule
import { KpiResumen, CategoriaReporte } from '../../models/reportes';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule // 2. Agregar aquí para habilitar *ngIf, *ngFor y DecimalPipe (| number)
  ],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css']
})
export class ReportesComponent implements OnInit {
  tabActiva: 'inventarios' | 'movimientos' | 'bodega' = 'inventarios';

  kpis: KpiResumen = {
    valorTotal: 52496,
    costeTotal: 34436,
    margenGanancia: 18060,
    porcentajeMargen: 34.4
  };

  categorias: CategoriaReporte[] = [
    { nombre: 'Electrónica', cantidadProductos: 8, totalValor: 34259, porcentaje: 63.4, colorHex: '#007bff' },
    { nombre: 'Mobiliario', cantidadProductos: 4, totalValor: 7710, porcentaje: 14.7, colorHex: '#ffc107' },
    { nombre: 'Periférico', cantidadProductos: 4, totalValor: 7369, porcentaje: 14.0, colorHex: '#28a745' },
    { nombre: 'Herramientas', cantidadProductos: 2, totalValor: 1372, porcentaje: 4.4, colorHex: '#dc3545' },
    { nombre: 'Limpieza', cantidadProductos: 1, totalValor: 828, porcentaje: 1.6, colorHex: '#9c27b0' }
  ];

  ngOnInit(): void {}

  cambiarTab(tab: 'inventarios' | 'movimientos' | 'bodega'): void {
    this.tabActiva = tab;
  }

  exportarReporte(): void {
    console.log('Exportando reporte...');
  }
}