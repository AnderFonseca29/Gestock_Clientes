import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material Imports
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crear-inventario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './crear-inventario.html',
  styleUrl: './crear-inventario.css'
})
export class CrearInventarioComponent {
  inventoryForm: FormGroup;

  empresas = ['GESTOCK Inc.', 'Sucursal Norte', 'Bodega Principal'];
  bodegas = ['Bodega Central', 'Bodega B', 'Almacén 1'];
  responsables = ['Maicol Nore', 'Erick Ruiz', 'Administrador'];
  categorias = ['Electrónica', 'Accesorios', 'Periféricos', 'General'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearInventarioComponent>
  ) {
    this.inventoryForm = this.fb.group({
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      bodega: ['', Validators.required],
      fecha: ['', Validators.required],
      responsable: ['', Validators.required],
      categoria: ['', Validators.required],
      notas: ['']
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      console.log('Nuevo Inventario:', this.inventoryForm.value);
      this.dialogRef.close(this.inventoryForm.value);
    }
  }
}