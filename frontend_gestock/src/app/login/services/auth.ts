import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: { nombre: string; rol: string } | null = null;

  constructor() { }

  // Método para validar credenciales y guardar la sesión simulada
  iniciarSesion(email: string, pass: string): boolean {
    if (email === 'admin@gestock.com' && pass === '123456') {
      this.usuarioActual = {
        nombre: 'Maicol',
        rol: 'Administrador'
      };
      return true;
    }
    
    if (email && pass) {
      this.usuarioActual = {
        nombre: 'Usuario Gestock',
        rol: 'Operador'
      };
      return true;
    }

    return false;
  }

  // Método que faltaba en el servicio
  obtenerUsuario() {
    return this.usuarioActual;
  }
}