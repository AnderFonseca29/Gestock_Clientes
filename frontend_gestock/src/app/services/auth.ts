import { Injectable } from '@angular/core';
import { UsuarioAuth } from '../models/usuario-auth';

// Interfaz opcional para manejar la empresa del usuario
export interface EmpresaInfo {
  nombre: string;
  email: string;
  moneda: string;
  formatoFecha: string;
}

interface UsuarioSistema extends UsuarioAuth {
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'UsuarioSistema';
  private readonly EMPRESA_KEY = 'EmpresaGestock';

  // Usuarios de prueba para simular la autenticación
  private usuariosSistema: UsuarioSistema[] = [
    {
      nombre: 'Administrador',
      correo: 'maicolnore@gmail.com',
      password: '123456',
      rol: 'Administrador'
    },
    {
      nombre: 'Fabian Instructor',
      correo: 'instructor@sena.edu.co',
      password: '123456',
      rol: 'Instructor'
    },
    {
      nombre: 'Pasta Aprendiz',
      correo: 'aprendiz@sena.edu.co',
      password: '123456',
      rol: 'Aprendiz'
    }
  ];

  constructor() {}

  /**
   * Inicia sesión buscando credenciales en la lista local de usuarios.
   */
  iniciarSesion(correo: string, password: string): boolean {
    const usuario = this.usuariosSistema.find(
      u => u.correo.toLowerCase() === correo.trim().toLowerCase()
    );

    if (!usuario || usuario.password !== password) {
      return false;
    }

    const usuarioAuth: UsuarioAuth = {
      nombre: usuario.nombre,
      correo: usuario.correo,
      rol: usuario.rol
    };

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuarioAuth));
    return true;
  }

  /**
   * Elimina la sesión del usuario guardada en el almacenamiento local.
   */
  cerrarSesion(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.EMPRESA_KEY);
  }

  /**
   * Verifica si existe una sesión activa.
   */
  estaAutenticado(): boolean {
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  }

  /**
   * Obtiene el objeto completo del usuario actualmente autenticado.
   */
  obtenerUsuario(): UsuarioAuth | null {
    const usuarioStr = localStorage.getItem(this.STORAGE_KEY);
    if (!usuarioStr) {
      return null;
    }
    try {
      return JSON.parse(usuarioStr) as UsuarioAuth;
    } catch (e) {
      this.cerrarSesion();
      return null;
    }
  }

  /**
   * Obtiene el rol del usuario autenticado o una cadena vacía.
   */
  obtenerRol(): string {
    return this.obtenerUsuario()?.rol ?? '';
  }

  /**
   * Obtiene el nombre del usuario autenticado o una cadena vacía.
   */
  obtenerNombre(): string {
    return this.obtenerUsuario()?.nombre ?? '';
  }

  /**
   * Obtiene el correo del usuario autenticado o una cadena vacía.
   */
  obtenerCorreo(): string {
    return this.obtenerUsuario()?.correo ?? '';
  }

  /**
   * Cambia dinámicamente el rol del usuario en la sesión activa.
   */
  cambiarRol(rol: string): void {
    const usuario = this.obtenerUsuario();
    if (!usuario) {
      return;
    }
    usuario.rol = rol;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));
  }

  /* ========================================================================
   * GESTIÓN DE LA EMPRESA (NUEVA FUNCIONALIDAD)
   * ======================================================================== */

  /**
   * Guarda los datos de la empresa en el localStorage.
   */
  guardarEmpresa(datosEmpresa: EmpresaInfo): void {
    localStorage.setItem(this.EMPRESA_KEY, JSON.stringify(datosEmpresa));
  }

  /**
   * Obtiene la configuración guardada de la empresa o devuelve valores por defecto.
   */
  obtenerEmpresa(): EmpresaInfo {
    const empresaStr = localStorage.getItem(this.EMPRESA_KEY);
    if (!empresaStr) {
      return {
        nombre: 'GESTOCK Inc.',
        email: 'contacto@gestock.com',
        moneda: 'COP',
        formatoFecha: 'YYYY-MM-DD'
      };
    }
    try {
      return JSON.parse(empresaStr) as EmpresaInfo;
    } catch {
      return {
        nombre: 'GESTOCK Inc.',
        email: 'contacto@gestock.com',
        moneda: 'COP',
        formatoFecha: 'YYYY-MM-DD'
      };
    }
  }
}