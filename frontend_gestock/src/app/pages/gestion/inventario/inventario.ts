import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
// Importaciones relativas exactas basadas en tu estructura de carpetas:
import { StockListComponent } from './stock-list/stock-list';
import { BodegasComponent } from './bodegas/bodegas';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos';
import { AlertasControlComponent } from './alertas-control/alertas-control';
=======
// Importación correcta de cada componente hijo según su nombre de clase real:
import { ListaProductos } from './lista-productos/lista-productos'; 
import { BodegasComponent } from './bodegas/bodegas'; 
import { RegistrarProductos } from './registrar-productos/registrar-productos';
import { AlertasControl } from './alertas-control/alertas-control';
>>>>>>> 1f065a6 (reorden de archivos)

export type TabType = 'stock' | 'bodegas' | 'registrar' | 'alertas';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule,
<<<<<<< HEAD
    StockListComponent,
    BodegasComponent,
    RegistrarProductosComponent,
    AlertasControlComponent
=======
    ListaProductos,
    BodegasComponent,
    RegistrarProductos,
    AlertasControl
>>>>>>> 1f065a6 (reorden de archivos)
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