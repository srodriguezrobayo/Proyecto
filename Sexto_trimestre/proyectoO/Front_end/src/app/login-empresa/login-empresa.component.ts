import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit  {

  empresa = new EmpresaModel("","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuarioService.loginEmpresa(this.empresa).subscribe(data=>  {
      if(data=='Bienvenido'){
        alert(data)
        this.router.navigate(['/principal_empresa']);
      }else{
        alert(data)

      }
    })
  }

}



