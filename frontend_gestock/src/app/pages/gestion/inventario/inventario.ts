import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones relativas exactas basadas en tu estructura de carpetas:
import { StockListComponent } from './stock-list/stock-list';
import { BodegasComponent } from './bodegas/bodegas';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos';
import { AlertasControlComponent } from './alertas-control/alertas-control';

export type TabType = 'stock' | 'bodegas' | 'registrar' | 'alertas';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule,
    StockListComponent,
    BodegasComponent,
    RegistrarProductosComponent,
    AlertasControlComponent
  ],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class InventarioComponent {
  public tabActiva = signal<TabType>('stock');

  public setTab(tab: TabType): void {
    this.tabActiva.set(tab);
  }
}