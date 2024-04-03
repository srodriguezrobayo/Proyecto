import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-ciudad',
  templateUrl: './lista-ciudad.component.html',
  styleUrls: ['./lista-ciudad.component.css']
})
export class ListaCiudadComponent implements OnInit{

  ciudad: Observable<CiudadModel[]> | undefined
  isLoggedIn: boolean = false;

  constructor (private router: Router, private accionesService: AccionesService){}

  ngOnInit() {
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 
    this.ciudad = this.accionesService.obtenerciudad();
  }

  borrarCiudad (id: string){
    this.accionesService.borrarciudad(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
