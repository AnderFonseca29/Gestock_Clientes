import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventarioService } from '../inventario-service/inventario-service';

export interface MensajeToast {
  tipo: 'exito' | 'error';
  titulo: string;
  detalle: string;
}

@Component({
  selector: 'app-registrar-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-productos.html',
  styleUrl: './registrar-productos.css'
})
export class RegistrarProductosComponent {
  private inventarioService = inject(InventarioService);

  bodegasActivas = this.inventarioService.bodegasActivas;

  codigo = '';
  nombre = '';
  categoria = 'General';
  ubicacion = '';
  stockInicial = 0;
  stockMinimo = 5;

  // Estado del mensaje Toast
  mensajeToast = signal<MensajeToast | null>(null);
  errorCodigoDuplicado = signal<boolean>(false);

  validarCodigoEnTiempoReal(): void {
    if (this.codigo.trim() && this.inventarioService.existeCodigo(this.codigo)) {
      this.errorCodigoDuplicado.set(true);
    } else {
      this.errorCodigoDuplicado.set(false);
    }
  }

  guardarProducto(): void {
    const codigoFormateado = this.codigo.trim().toUpperCase();

    // ⛔ VERIFICACIÓN DE CÓDIGO DUPLICADO
    if (this.inventarioService.existeCodigo(codigoFormateado)) {
      this.errorCodigoDuplicado.set(true);
      this.mensajeToast.set({
        tipo: 'error',
        titulo: '¡Código Duplicado!',
        detalle: `El código "${codigoFormateado}" ya se encuentra asignado a otro producto.`
      });
      return;
    }

    if (!this.codigo.trim() || !this.nombre.trim()) {
      return;
    }

    // Validación de Bodega
    if (!this.ubicacion || !this.bodegasActivas().some(b => b.nombre === this.ubicacion)) {
      if (this.bodegasActivas().length > 0) {
        this.ubicacion = this.bodegasActivas()[0].nombre;
      } else {
        this.mensajeToast.set({
          tipo: 'error',
          titulo: 'Sin Bodegas Activas',
          detalle: 'Debes activar al menos una bodega para registrar productos.'
        });
        return;
      }
    }

    // Guardado exitoso
    this.inventarioService.registrarProducto({
      codigo: codigoFormateado,
      nombre: this.nombre,
      categoria: this.categoria,
      ubicacion: this.ubicacion,
      stockInicial: Number(this.stockInicial),
      stockMinimo: Number(this.stockMinimo)
    });

    this.mensajeToast.set({
      tipo: 'exito',
      titulo: '¡Producto Registrado!',
      detalle: `Se agregaron ${this.stockInicial} unidades de "${codigoFormateado}" a "${this.ubicacion}".`
    });

    setTimeout(() => {
      this.mensajeToast.set(null);
    }, 4500);

    // Resetear formulario
    this.codigo = '';
    this.nombre = '';
    this.ubicacion = '';
    this.stockInicial = 0;
    this.stockMinimo = 5;
    this.errorCodigoDuplicado.set(false);
  }

  cerrarMensaje(): void {
    this.mensajeToast.set(null);
  }
}