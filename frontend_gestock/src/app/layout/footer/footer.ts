import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
=======

>>>>>>> origin/develop
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
<<<<<<< HEAD
  templateUrl: './footer.html',
  styleUrl: './footer.css'
=======
  templateUrl: './footer.html', // o './footer.component.html'
  styleUrl: './footer.css'      // o './footer.component.css'
>>>>>>> origin/develop
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}