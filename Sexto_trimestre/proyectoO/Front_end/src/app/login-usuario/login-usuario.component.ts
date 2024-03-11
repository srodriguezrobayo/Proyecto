import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  usuario = new UsuarioModel("","","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuarioService.loginUsuario(this.usuario).subscribe(data=>  {
      if(data=='Bienvenido'){
        alert(data)
        this.router.navigate(['/principal']);
      }else{
        alert(data)

      }
    })
  }

}


