

import { Component,OnInit } from '@angular/core';


import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { ClienteModel } from '../Tablas/shared/acciones.model';




@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuario = new ClienteModel("","","","","","","","")
  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuario.Password_cliente = (this.usuario.Password_cliente).toString();
    this.accionesService.agregarUsuario(this.usuario).subscribe(data=>  {
      alert(data)
      this.router.navigate(['/inicio_sesion']);
    })
  }

}
