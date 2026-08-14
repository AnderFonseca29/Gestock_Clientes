import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'Gestión de Usuarios', route: '/gestion/roles-yusuarios', icon: '👥' },
    { label: 'Inventario', route: '/inventario', icon: '📦' },
    { label: 'Auditoría', route: '/auditoria', icon: '📋' }
  ];
}