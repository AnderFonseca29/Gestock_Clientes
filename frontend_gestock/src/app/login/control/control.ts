import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Session {
  id: string;
  device: string;
  browser: string;
  ip: string;
  lastActive: string;
  isCurrent: boolean;
}

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './control.html',
  styleUrl: './control.css'
})
export class ControlComponent implements OnInit {
  sessions: Session[] = [];

  ngOnInit(): void {
    // Datos de ejemplo simulando una respuesta del backend
    this.sessions = [
      {
        id: '1',
        device: 'Windows PC',
        browser: 'Chrome 122.0',
        ip: '192.168.1.45',
        lastActive: 'Hace un momento',
        isCurrent: true
      },
      {
        id: '2',
        device: 'iPhone 13',
        browser: 'Safari Mobile',
        ip: '186.102.45.12',
        lastActive: 'Hace 2 horas',
        isCurrent: false
      },
      {
        id: '3',
        device: 'MacBook Pro',
        browser: 'Firefox 120.0',
        ip: '201.180.22.90',
        lastActive: 'Ayer a las 18:30',
        isCurrent: false
      }
    ];
  }

  revokeSession(sessionId: string): void {
    if (confirm('¿Estás seguro de que deseas cerrar esta sesión?')) {
      this.sessions = this.sessions.filter(s => s.id !== sessionId);
      console.log(`Sesión ${sessionId} cerrada.`);
    }
  }

  revokeAllOthers(): void {
    if (confirm('¿Deseas cerrar todas las demás sesiones excepto la actual?')) {
      this.sessions = this.sessions.filter(s => s.isCurrent);
      console.log('Se cerraron todas las demás sesiones.');
    }
  }
}