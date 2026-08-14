import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportesService } from '../../services/reportes';

import {
  Bodega,
  CategoriaInventario,
  FormatoExportacion,
  MetricasInventario,
  VistaReporte
} from '../../models/reporte';


@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class ReportesComponent implements OnInit {

  constructor(
    private reportesService: ReportesService
  ) {}

  // =========================================================
  // BODEGAS
  // =========================================================

  bodegas: Bodega[] = [];

  bodegaSeleccionada: string = 'todas';

  // Bodega cuyo detalle está abierto
  bodegaSeleccionadaDetalle: Bodega | null = null;

  // Controla si el detalle está abierto
  mostrarDetalleBodega: boolean = false;


  // =========================================================
  // DATOS ESPECÍFICOS DE LA BODEGA ABIERTA
  // =========================================================

  metricasBodega: MetricasInventario = {
    valorTotal: 0,
    costeTotal: 0,
    margenGanancia: 0
  };

  categoriasBodega: CategoriaInventario[] = [];


  // =========================================================
  // VISTA ACTIVA
  // =========================================================

  vistaActiva: VistaReporte = 'inventario';


  // =========================================================
  // MÉTRICAS GENERALES
  // =========================================================

  metricas: MetricasInventario = {
    valorTotal: 0,
    costeTotal: 0,
    margenGanancia: 0
  };


  // =========================================================
  // CATEGORÍAS GENERALES
  // =========================================================

  categorias: CategoriaInventario[] = [];


  // Índice de categoría abierta
  categoriaSeleccionada: number | null = null;


  // =========================================================
  // MODAL EXPORTACIÓN
  // =========================================================

  mostrarModalExportar: boolean = false;

  mensajeExportacion: string = '';


  // =========================================================
  // INICIO
  // =========================================================

  ngOnInit(): void {

    this.bodegas =
      this.reportesService.obtenerBodegas();

    this.cargarDatos();

  }


  // =========================================================
  // CARGAR DATOS GENERALES
  // =========================================================

  cargarDatos(): void {

    this.metricas =
      this.reportesService.obtenerMetricas(
        this.bodegaSeleccionada
      );

    this.categorias =
      this.reportesService.obtenerCategorias(
        this.bodegaSeleccionada
      );

    this.categoriaSeleccionada = null;

  }


  // =========================================================
  // CAMBIAR BODEGA
  // =========================================================

  cambiarBodega(bodegaId: string): void {

    this.bodegaSeleccionada = bodegaId;

    this.cargarDatos();

  }


  // =========================================================
  // CAMBIAR VISTA
  // =========================================================

  cambiarVista(vista: VistaReporte): void {

    this.vistaActiva = vista;

    // Si entramos nuevamente a "Por bodega",
    // cerramos el detalle anterior.
    if (vista === 'bodega') {

      this.mostrarDetalleBodega = false;

      this.bodegaSeleccionadaDetalle = null;

      this.metricasBodega = {
        valorTotal: 0,
        costeTotal: 0,
        margenGanancia: 0
      };

      this.categoriasBodega = [];

    }

  }


  // =========================================================
  // ABRIR DETALLE DE BODEGA
  // =========================================================

  abrirDetalleBodega(bodega: Bodega): void {

    // Guardamos la bodega seleccionada
    this.bodegaSeleccionadaDetalle = bodega;

    // Cargamos las métricas SOLO de esa bodega
    this.metricasBodega =
      this.reportesService.obtenerMetricas(
        bodega.id
      );

    // Cargamos las categorías SOLO de esa bodega
    this.categoriasBodega =
      this.reportesService.obtenerCategorias(
        bodega.id
      );

    // Abrimos el detalle
    this.mostrarDetalleBodega = true;

  }


  // =========================================================
  // CERRAR DETALLE DE BODEGA
  // =========================================================

  cerrarDetalleBodega(): void {

    this.mostrarDetalleBodega = false;

    this.bodegaSeleccionadaDetalle = null;

    this.metricasBodega = {
      valorTotal: 0,
      costeTotal: 0,
      margenGanancia: 0
    };

    this.categoriasBodega = [];

  }


  // =========================================================
  // DETALLE DE CATEGORÍA
  // =========================================================

  verDetalleCategoria(indice: number): void {

    this.categoriaSeleccionada =
      this.categoriaSeleccionada === indice
        ? null
        : indice;

  }


  // =========================================================
  // COSTO PROMEDIO
  // =========================================================

  costoPromedio(
    categoria: CategoriaInventario
  ): number {

    if (categoria.productos <= 0) {

      return 0;

    }

    return Math.round(
      categoria.valor / categoria.productos
    );

  }


  // =========================================================
  // MODAL EXPORTAR
  // =========================================================

  abrirModalExportar(): void {

    this.mostrarModalExportar = true;

    this.mensajeExportacion = '';

  }


  cerrarModalExportar(): void {

    this.mostrarModalExportar = false;

    this.mensajeExportacion = '';

  }


  // =========================================================
  // EXPORTAR
  // =========================================================

  exportar(
    formato: FormatoExportacion
  ): void {

    const exportacionValida =
      this.reportesService.exportarReporte(
        this.bodegaSeleccionada,
        formato
      );

    if (!exportacionValida) {

      this.mensajeExportacion =
        'No hay datos para exportar con este filtro.';

      return;

    }

    this.mostrarModalExportar = false;

    alert(
      `Reporte exportado en formato ${formato}.`
    );

  }

}