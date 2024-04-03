import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit{

  empresa: Observable<EmpresaModel[]> | undefined;
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

    this.empresa = this.accionesService.obtenerempresa();
  }

  borrarEmpresa (id: string){
    this.accionesService.borrarempresa(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}

