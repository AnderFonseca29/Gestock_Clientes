import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Componente del Modal Crear Inventario
import { CrearInventarioComponent } from '../crear-inventario/crear-inventario';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class PanelComponent {

  // 1. Declaramos las Alertas de Stock Bajo que usa el HTML
  stockAlerts = [
    {
      product: 'Disco duro externo 1TB',
      location: 'Bodega central',
      current: 3,
      max: 10,
      percentage: 30
    },
    {
      product: 'Mouse inalambrico logitech',
      location: 'Sucursal Norte',
      current: 8,
      max: 20,
      percentage: 40
    }
  ];

  // 2. Declaramos los Últimos Movimientos que usa el HTML
  movements = [
    {
      title: 'Pc',
      description: '+10 unidades | Administrador',
      date: '20/01/2026',
      type: 'Entrada'
    },
    {
      title: 'Monitor',
      description: '-5 unidades | Maicol Nore (Gerente)',
      date: '24/01/2026',
      type: 'Salida'
    },
    {
      title: 'Mouse',
      description: '+8 unidades | Erick Ruiz (Operador)',
      date: '28/01/2026',
      type: 'Transferencia'
    }
  ];

  constructor(private dialog: MatDialog) {}

  // 3. Método para abrir la ventana modal
  openCrearInventario(): void {
    this.dialog.open(CrearInventarioComponent, {
      width: '850px',
      panelClass: 'custom-dialog-container',
      disableClose: false
    });
  }
}