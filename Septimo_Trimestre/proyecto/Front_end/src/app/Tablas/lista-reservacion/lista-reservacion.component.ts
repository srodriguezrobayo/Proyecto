import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ReservacionModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-reservacion',
  templateUrl: './lista-reservacion.component.html',
  styleUrls: ['./lista-reservacion.component.css']
})
export class ListaReservacionComponent implements OnInit{

  reservacion: Observable<ReservacionModel[]> | undefined;
  isLoggedIn: boolean = false;

  constructor (private router: Router,private accionesService: AccionesService){}

  ngOnInit(){
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 

    this.reservacion = this.accionesService.obtenerreservacion();
  }

  borrarReservacion (id: string){
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
