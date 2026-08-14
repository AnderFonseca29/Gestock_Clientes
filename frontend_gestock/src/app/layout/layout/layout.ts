import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar'; // Ajusta la ruta según tu proyecto
import { HeaderComponent } from '../header/header';   // Ajusta la ruta según tu proyecto


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {}