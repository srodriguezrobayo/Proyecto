import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit{

  cliente: Observable<ClienteModel[]> | undefined;
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
    this.cliente = this.accionesService.obtenercliente();
  }

  borrarCliente (id: string){
    this.accionesService.borrarcliente(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
