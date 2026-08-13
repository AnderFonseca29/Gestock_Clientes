import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  // Título dinámico que se puede cambiar según la página
  @Input() title: string = 'Empresas';

  // Datos del usuario logueado
  userName: string = 'Administrador';
  userRole: string = 'Administrador';
  userInitial: string = 'A';
  notificationCount: number = 3;
}