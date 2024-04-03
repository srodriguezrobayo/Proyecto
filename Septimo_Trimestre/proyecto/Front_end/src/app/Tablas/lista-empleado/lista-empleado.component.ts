import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit{

  empleado: Observable<EmpleadoModel[]> | undefined;
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

    this.empleado = this.accionesService.obtenerempleado();
  }

  borrarEmpleado (id: string){
    this.accionesService.borrarempleado(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}

