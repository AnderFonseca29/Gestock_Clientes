import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Alerta {
  id: string;
  tipo: 'stock' | 'vencimiento';
  titulo: string;
  mensaje: string;
  severidad: 'warning' | 'danger';
}

@Component({
  selector: 'app-alertas-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alertas-control.html',
  styleUrl: './alertas-control.css'
})
export class AlertasControlComponent {
  alertas = signal<Alerta[]>([
    {
      id: '1',
      tipo: 'stock',
      titulo: 'Mínimos y Máximos de Stock',
      mensaje: 'Caja Cartón Corrugado T-3: Stock actual de 4 unidades (Mínimo requerido: 15).',
      severidad: 'warning'
    },
    {
      id: '2',
      tipo: 'vencimiento',
      titulo: 'Control de Próximos Vencimientos',
      mensaje: 'Cinta Embalaje Industrial 100m: Vence el 2026-08-30.',
      severidad: 'danger'
    }
  ]);
}