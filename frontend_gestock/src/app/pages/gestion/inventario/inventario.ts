import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importación correcta de cada componente hijo según su nombre de clase real:
import { ListaProductos } from './lista-productos/lista-productos'; 
import { BodegasComponent } from './bodegas/bodegas'; 
import { RegistrarProductos } from './registrar-productos/registrar-productos';
import { AlertasControl } from './alertas-control/alertas-control';

export type TabType = 'stock' | 'bodegas' | 'registrar' | 'alertas';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule,
    ListaProductos,
    BodegasComponent,
    RegistrarProductos,
    AlertasControl
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