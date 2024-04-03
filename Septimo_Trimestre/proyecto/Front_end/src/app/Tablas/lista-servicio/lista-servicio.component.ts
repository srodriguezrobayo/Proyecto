import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.component.html',
  styleUrls: ['./lista-servicio.component.css']
})
export class ListaServicioComponent implements OnInit{

  servicio: Observable<ServicioModel[]> | undefined
  isLoggedIn: boolean = false;

  constructor (private router: Router,private accionesService: AccionesService){}

  ngOnInit() {
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 

    this.servicio = this.accionesService.obtenerservicio();
  }

  borrarServicio (id: string){
    this.accionesService.borrarservicio(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
