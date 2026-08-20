import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertas-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alertas-control.html',
  styleUrls: ['./alertas-control.css']
})
export class AlertasControl {
  alertas = signal([
    { id: 1, severidad: 'danger', titulo: 'Stock Crítico', mensaje: 'Quedan pocas unidades.' }
  ]);
}