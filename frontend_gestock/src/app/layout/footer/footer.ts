import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
<<<<<<< HEAD
  version: string = '1.0.0';
  anio: number = new Date().getFullYear();
}
=======
  nombreSistema:string='Sistema ADSO';
  institucion:string= 'Servicio Nacional de Aprendizaje- SENA'
  version:string='1.0.0'
  anio:number= new Date().getFullYear();
  desarrollador: string='CAFEC'
}
>>>>>>> origin/develop
