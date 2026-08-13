import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './empresas.html', // Ajusta si tus archivos usan .component.html
  styleUrl: './empresas.css'      // Ajusta si tus archivos usan .component.css
})
export class EmpresasComponent implements OnInit {
  companyForm!: FormGroup;

  // Opciones para los selectores
  currencies = [
    { value: 'USD', label: 'USD - Dólar' },
    { value: 'COP', label: 'COP - Peso Colombiano' },
    { value: 'EUR', label: 'EUR - Euro' }
  ];

  dateFormats = [
    { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
    { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
    { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: ['GESTOCK Inc.', [Validators.required]],
      contactEmail: ['contacto@gestock.com', [Validators.required, Validators.email]],
      currency: ['USD', [Validators.required]],
      dateFormat: ['DD/MM/YYYY', [Validators.required]]
    });
  }

  saveChanges(): void {
    if (this.companyForm.valid) {
      console.log('Datos guardados:', this.companyForm.value);
      // Aquí conectaremos luego con el servicio backend
    }
  }
}