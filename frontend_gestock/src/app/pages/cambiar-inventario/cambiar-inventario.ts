import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface InventarioItem {
  id: number;
  nombre: string;
  ubicacion: string; // Representa la Bodega / Almacén
  responsable: string;
  estado: string;
  esActivo: boolean;
}

@Component({
  selector: 'app-cambiar-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambiar-inventario.html',
  styleUrls: ['./cambiar-inventario.css']
})
export class CambiarInventarioComponent {

  // Recibe la lista completa de inventarios desde el Panel
  @Input() listaInventarios: InventarioItem[] = [];
  
  // Recibe cuál es la bodega/ubicación seleccionada actualmente (opcional para filtrar)
  @Input() bodegaFiltro: string = 'todas';

  @Output() inventarioSeleccionado = new EventEmitter<InventarioItem>();
  @Output() cerrarModal = new EventEmitter<void>();

  // Si quieres filtrar por bodega
  get inventariosFiltrados(): InventarioItem[] {
    if (this.bodegaFiltro === 'todas') {
      return this.listaInventarios;
    }
    return this.listaInventarios.filter(inv => inv.ubicacion === this.bodegaFiltro);
  }

  seleccionar(inv: InventarioItem): void {
    this.inventarioSeleccionado.emit(inv);
    this.cerrarModal.emit();
  }

  cancelar(): void {
    this.cerrarModal.emit();
  }
}