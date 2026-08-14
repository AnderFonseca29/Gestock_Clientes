import { Injectable } from '@angular/core';
import { UsuarioAuth } from '../models/usuario-auth';

export interface UsuarioAuth {
  nombre: string;
  correo: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'UsuarioSistema';
  private usuarioActual: UsuarioAuth | null = null;

  constructor() {
    // Recupera la sesión guardada al iniciar o recargar la app
    const usuarioGuardado = localStorage.getItem(this.STORAGE_KEY);
    if (usuarioGuardado) {
      this.usuarioActual = JSON.parse(usuarioGuardado);
    }
  }

  // Método para validar credenciales y guardar la sesión persistente
  iniciarSesion(email: string, pass: string): boolean {
    let usuarioEncontrado: UsuarioAuth | null = null;

    if (email === 'admin@gestock.com' && pass === '123456') {
      usuarioEncontrado = {
        nombre: 'Maicol',
        correo: email,
        rol: 'Administrador'
      };
    } else if (email && pass) {
      // Permite acceso a cualquier otro correo digitado (ej: maicolnore10@gmail.com)
      usuarioEncontrado = {
        nombre: email.split('@')[0], // Usa la primera parte del correo como nombre
        correo: email,
        rol: 'Operador'
      };
    }

    if (usuarioEncontrado) {
      this.usuarioActual = usuarioEncontrado;
      // Guardamos en el almacenamiento local para que el AuthGuard lo detecte
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuarioEncontrado));
      return true;
    }

    return false;
  }

  // Obtener usuario activo
  obtenerUsuario(): UsuarioAuth | null {
    if (!this.usuarioActual) {
      const usuarioGuardado = localStorage.getItem(this.STORAGE_KEY);
      if (usuarioGuardado) {
        this.usuarioActual = JSON.parse(usuarioGuardado);
      }
    }
    return this.usuarioActual;
  }

  // Cerrar sesión
  cerrarSesion(): void {
    this.usuarioActual = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }
}