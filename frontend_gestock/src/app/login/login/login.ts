import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {

    console.log('Correo ingresado:', this.email);
    console.log('Contraseña ingresada:', this.password);

    if (!this.email || !this.password) {
      alert('Por favor, ingresa el correo y la contraseña.');
      return;
    }

    if (
      this.email === 'admin@gestock.com' &&
      this.password === '123456'
    ) {

      localStorage.setItem('usuarioLogueado', 'true');
      localStorage.setItem('nombre', 'Administrador');
      localStorage.setItem('rol', 'Administrador');

      console.log('Login correcto');

      this.router.navigate(['/app']);

    } else {

      alert('Correo o contraseña incorrectos.');

    }
  }

  goToRegister(): void {

    this.router.navigate(['/creacion-usuarios']);

  }

}