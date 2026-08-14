import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html', // o './footer.component.html'
  styleUrl: './footer.css'      // o './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}