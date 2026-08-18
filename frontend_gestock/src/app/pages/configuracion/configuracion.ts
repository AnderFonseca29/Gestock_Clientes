import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionNotificaciones } from '../../models/configuracion';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule], // Necesario para *ngIf y [ngClass]
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.css']
})
export class ConfiguracionComponent implements OnInit {
  tabActiva: 'notificaciones' | 'seguridad' | 'backup' = 'notificaciones';

  notificaciones: ConfiguracionNotificaciones = {
    emailGeneral: true,
    alertasStockBajo: true,
    alertasMovimientos: true,
    reporteDiario: false
  };

  ngOnInit(): void {}

  cambiarTab(tab: 'notificaciones' | 'seguridad' | 'backup'): void {
    this.tabActiva = tab;
  }

  toggleNotificacion(clave: keyof ConfiguracionNotificaciones): void {
    this.notificaciones[clave] = !this.notificaciones[clave];
  }

  guardarCambios(): void {
    console.log('Guardando configuración de notificaciones:', this.notificaciones);
    // Lógica futura para enviar los datos al backend con un servicio HTTP
  }
}