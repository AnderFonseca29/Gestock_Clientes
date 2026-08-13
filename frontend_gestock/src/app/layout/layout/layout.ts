import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';

// Componentes del Layout
import { HeaderComponent } from '../header/header'; // Ajusta la ruta a '../header/header' si tus archivos no usan .component
import { SidebarComponent } from '../sidebar/sidebar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './layout.html', // Ajusta si se llama ./layout.component.html
  styleUrl: './layout.css'     // Ajusta si se llama ./layout.component.css
})
export class LayoutComponent {
  // Título inicial del módulo activo
  titleModule: string = 'Empresas';
}