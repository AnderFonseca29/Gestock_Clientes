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
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css',
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

  // Bodega cuyo detalle se está mostrando
  bodegaSeleccionadaDetalle: Bodega | null = null;

  // Controla si el detalle está abierto
  mostrarDetalleBodega: boolean = false;


  // =========================================================
  // VISTA ACTIVA
  // =========================================================

  vistaActiva: VistaReporte = 'inventario';


  // =========================================================
  // MÉTRICAS
  // =========================================================

  metricas: MetricasInventario = {
    valorTotal: 0,
    costeTotal: 0,
    margenGanancia: 0
  };


  // =========================================================
  // CATEGORÍAS
  // =========================================================

  categorias: CategoriaInventario[] = [];


  // Índice de la categoría con el detalle abierto
  // HU053
  categoriaSeleccionada: number | null = null;


  // =========================================================
  // MODAL DE EXPORTACIÓN
  // =========================================================

  // HU045 / HU050 / HU051
  mostrarModalExportar: boolean = false;

  mensajeExportacion: string = '';


  // =========================================================
  // INICIO
  // =========================================================

  ngOnInit(): void {

    this.bodegas = this.reportesService.obtenerBodegas();

    this.cargarDatos();

  }


  // =========================================================
  // CARGAR DATOS
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
  // HU054
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

    // Cuando entramos a "Por bodega"
    // cerramos cualquier detalle anterior
    if (vista === 'bodega') {

      this.mostrarDetalleBodega = false;

      this.bodegaSeleccionadaDetalle = null;

    }

  }


  // =========================================================
  // DETALLE DE BODEGA
  // =========================================================

  abrirDetalleBodega(bodega: Bodega): void {

    this.bodegaSeleccionadaDetalle = bodega;

    this.mostrarDetalleBodega = true;

  }


  cerrarDetalleBodega(): void {

    this.mostrarDetalleBodega = false;

    this.bodegaSeleccionadaDetalle = null;

  }


  // =========================================================
  // DETALLE DE CATEGORÍA
  // HU053
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
  // MODAL DE EXPORTACIÓN
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
  // HU045 / HU050 / HU051 / HU052
  // =========================================================

  exportar(formato: FormatoExportacion): void {

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