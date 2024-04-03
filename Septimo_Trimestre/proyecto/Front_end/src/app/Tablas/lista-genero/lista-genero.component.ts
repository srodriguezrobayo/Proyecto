import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { GeneroModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent implements OnInit{

  genero: Observable<GeneroModel[]> | undefined
  isLoggedIn: boolean = false;

  constructor (private router: Router,private accionesService: AccionesService){}

  ngOnInit() {    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 

    this.genero = this.accionesService.obtenergenero();
  }

  borrarGenero (id: string){
    this.accionesService.borrargenero(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
