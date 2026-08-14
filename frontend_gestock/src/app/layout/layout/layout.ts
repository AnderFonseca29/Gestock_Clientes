import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
=======
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';

// Componentes del Layout
import { HeaderComponent } from '../header/header'; // Ajusta la ruta a '../header/header' si tus archivos no usan .component
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
import { SidebarComponent } from '../sidebar/sidebar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
<<<<<<< HEAD
    RouterOutlet,
=======
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
<<<<<<< HEAD
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {
=======
  templateUrl: './layout.html', // Ajusta si se llama ./layout.component.html
  styleUrl: './layout.css'     // Ajusta si se llama ./layout.component.css
})
export class LayoutComponent {
  // Título inicial del módulo activo
  titleModule: string = 'Empresas';
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}