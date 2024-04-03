import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LugarReservacionModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-lugarreserva',
  templateUrl: './lista-lugarreserva.component.html',
  styleUrls: ['./lista-lugarreserva.component.css']
})
export class ListaLugarreservaComponent implements OnInit{

  lugar_reserva: Observable<LugarReservacionModel[]> | undefined
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

    this.lugar_reserva = this.accionesService.obtenerlugarreserva();
  }

  borrarLugarReserva (id: string){
    this.accionesService.borrarlugarreserva(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}