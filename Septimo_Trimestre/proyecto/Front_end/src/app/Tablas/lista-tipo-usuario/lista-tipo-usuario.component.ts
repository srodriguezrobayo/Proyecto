import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo_usuarioModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-tipo-usuario',
  templateUrl: './lista-tipo-usuario.component.html',
  styleUrls: ['./lista-tipo-usuario.component.css']
})
export class ListaTipoUsuarioComponent implements OnInit{

  tipo_usuarios: Observable<Tipo_usuarioModel[]> | undefined;
  isLoggedIn: boolean = false;

  constructor(private router: Router,private accionesService: AccionesService){}

  ngOnInit(){
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 

    this.tipo_usuarios = this.accionesService.obtenerTipoUsuario();
  }

  borrarTipoUsuario(id: string){
    this.accionesService.borrarTipoUsuario(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
