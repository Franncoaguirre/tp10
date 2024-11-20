import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  Nombre: string="tu nombre";
Edad:number =30;
Ocupacion:string="Desarrollador web"

}
