import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerporecetaComponent } from './cuerporeceta/cuerporeceta.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EncabezadoComponent,CuerporecetaComponent,PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receta';
}
