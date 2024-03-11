import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  empresa = new EmpresaModel("","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {

  }

  onSubmit(){
    this.empresa.Password_empresa = MD5(this.empresa.Password_empresa).toString();
    this.usuarioService.agregarEmpresa(this.empresa).subscribe(data=>  {
      alert(data)
    })
  }

}
