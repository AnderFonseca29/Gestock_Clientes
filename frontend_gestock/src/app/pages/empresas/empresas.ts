<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Empresa {
  id: number;
  nombre: string;
  nit: string;
  telefono: string;
  correo: string;
  ciudad: string;
  estado: boolean;
}
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [
    CommonModule,
<<<<<<< HEAD
    FormsModule
  ],
  templateUrl: './empresas.html',
  styleUrl: './empresas.css'
})
export class EmpresasComponent {

  // ==========================================
  // CONTROL DEL MODAL
  // ==========================================

  modalAbierto: boolean = false;
  modoEdicion: boolean = false;
  empresaEditando: number | null = null;


  // ==========================================
  // FORMULARIO
  // ==========================================

  formulario = {
    nombre: '',
    nit: '',
    telefono: '',
    correo: '',
    ciudad: ''
  };


  // ==========================================
  // EMPRESAS
  // ==========================================

  empresas: Empresa[] = [
    {
      id: 1,
      nombre: 'Gestock S.A.S.',
      nit: '901234567-1',
      telefono: '320 456 7890',
      correo: 'contacto@gestock.com',
      ciudad: 'Yopal',
      estado: true
    },
    {
      id: 2,
      nombre: 'Distribuciones Casanare',
      nit: '900876543-2',
      telefono: '311 222 3344',
      correo: 'ventas@distribuciones.com',
      ciudad: 'Yopal',
      estado: true
    },
    {
      id: 3,
      nombre: 'Comercializadora del Llano',
      nit: '901456789-3',
      telefono: '315 555 6677',
      correo: 'admin@comercializadora.com',
      ciudad: 'Villavicencio',
      estado: false
    }
  ];


  // ==========================================
  // ESTADÍSTICAS
  // ==========================================

  get totalEmpresas(): number {
    return this.empresas.length;
  }

  get empresasActivas(): number {
    return this.empresas.filter(e => e.estado).length;
  }

  get empresasInactivas(): number {
    return this.empresas.filter(e => !e.estado).length;
  }


  // ==========================================
  // ABRIR MODAL CREAR
  // ==========================================

  abrirModalCrear(): void {

    this.modoEdicion = false;
    this.empresaEditando = null;

    this.formulario = {
      nombre: '',
      nit: '',
      telefono: '',
      correo: '',
      ciudad: ''
    };

    this.modalAbierto = true;
  }


  // ==========================================
  // ABRIR MODAL EDITAR
  // ==========================================

  editarEmpresa(empresa: Empresa): void {

    this.modoEdicion = true;
    this.empresaEditando = empresa.id;

    this.formulario = {
      nombre: empresa.nombre,
      nit: empresa.nit,
      telefono: empresa.telefono,
      correo: empresa.correo,
      ciudad: empresa.ciudad
    };

    this.modalAbierto = true;
  }


  // ==========================================
  // CERRAR MODAL
  // ==========================================

  cerrarModal(): void {

    this.modalAbierto = false;
    this.empresaEditando = null;

  }


  // ==========================================
  // GUARDAR EMPRESA
  // ==========================================

  guardarEmpresa(): void {

    if (
      !this.formulario.nombre ||
      !this.formulario.nit ||
      !this.formulario.correo
    ) {
      return;
    }


    // EDITAR
    if (
      this.modoEdicion &&
      this.empresaEditando !== null
    ) {

      const empresa = this.empresas.find(
        e => e.id === this.empresaEditando
      );

      if (empresa) {

        empresa.nombre = this.formulario.nombre;
        empresa.nit = this.formulario.nit;
        empresa.telefono = this.formulario.telefono;
        empresa.correo = this.formulario.correo;
        empresa.ciudad = this.formulario.ciudad;

      }

    }

    // CREAR
    else {

      const nuevaEmpresa: Empresa = {

        id: Date.now(),

        nombre: this.formulario.nombre,

        nit: this.formulario.nit,

        telefono: this.formulario.telefono,

        correo: this.formulario.correo,

        ciudad: this.formulario.ciudad,

        estado: true

      };

      this.empresas.push(nuevaEmpresa);

    }

    this.cerrarModal();
  }


  // ==========================================
  // CAMBIAR ESTADO
  // ==========================================

  cambiarEstado(empresa: Empresa): void {

    empresa.estado = !empresa.estado;

  }


  // ==========================================
  // ELIMINAR
  // ==========================================

  eliminarEmpresa(empresa: Empresa): void {

    const confirmar = confirm(
      `¿Deseas eliminar la empresa "${empresa.nombre}"?`
    );

    if (!confirmar) {
      return;
    }

    this.empresas = this.empresas.filter(
      e => e.id !== empresa.id
    );

  }

=======
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
>>>>>>> 5bf402a4f6f32522712376ec401ed193930e7fc8
}