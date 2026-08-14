import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // Inyección mediante la función 'inject()' recomendable para Standalone Components
  private router = inject(Router);
  private authService = inject(AuthService);
}