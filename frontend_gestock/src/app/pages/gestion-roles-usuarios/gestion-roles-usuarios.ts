import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-gestion-roles-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './gestion-roles-usuarios.html',
  styleUrl: './gestion-roles-usuarios.css'
})
export class GestionRolesUsuariosComponent {
  filtroTipoAccion: string = 'TODAS';

  aplicarFiltros() {
    console.log('Filtro seleccionado:', this.filtroTipoAccion);
  }
}