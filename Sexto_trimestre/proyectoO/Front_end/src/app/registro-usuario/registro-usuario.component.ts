

import { Component,OnInit } from '@angular/core';

import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
import { MD5 } from 'crypto-js';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuario = new UsuarioModel("","","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuario.Password_cliente = MD5(this.usuario.Password_cliente).toString();
    this.usuarioService.agregarUsuario(this.usuario).subscribe(data=>  {
      alert(data)
    })
  }

}
