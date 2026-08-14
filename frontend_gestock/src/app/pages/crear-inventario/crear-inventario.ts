import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-inventario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-inventario.html',
  styleUrls: ['./crear-inventario.css']
})
export class CrearInventarioComponent implements OnInit {

  @Output() inventarioCreado = new EventEmitter<any>();
  @Output() cerrarModal = new EventEmitter<void>();

  inventarioForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.inventarioForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaCreacion: [new Date().toISOString().substring(0, 10), Validators.required],
      responsable: ['', Validators.required],
      ubicacion: ['', Validators.required],
      descripcion: [''],
      estadoInicial: ['en_proceso'],
      metodoConteo: ['conteo_total'],
      tipoInventario: [''],
      moneda: ['COP'],
      incluirInactivos: [false],
      registrarMovimientos: [true],
      observaciones: ['']
    });
  }

  cancelar(): void {
    // Emite el evento para ocultar la ventana en el panel
    this.cerrarModal.emit();
  }

  guardarInventario(): void {
    if (this.inventarioForm.valid) {
      const nuevoInventario = this.inventarioForm.value;
      
      // 1. Enviar datos al Panel
      this.inventarioCreado.emit(nuevoInventario);
      
      // 2. Notificar al Panel que se debe cerrar la ventana
      this.cerrarModal.emit();
    }
  }
}