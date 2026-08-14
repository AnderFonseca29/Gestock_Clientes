import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [
    RouterOutlet,
    RouterLink
  ],
=======
  standalone: true,
  imports: [RouterOutlet],
>>>>>>> origin/develop
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}