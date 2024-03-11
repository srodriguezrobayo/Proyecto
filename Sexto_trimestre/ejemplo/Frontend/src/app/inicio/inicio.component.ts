import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  nuevoUsuario: UsuarioModel = new UsuarioModel('','','','');

  constructor (private usuarioService : UsuarioService, private router: Router ){}

  agregarNuevoUsuario(){
    this.usuarioService.agregarpersona(this.nuevoUsuario).subscribe(
      response => {
        console.log('Persona Registrada exitosamente',response)
        alert('Persona resgistrada')
        this.nuevoUsuario = new UsuarioModel ('','','','');
        this.router.navigate(['/login']);
      },
      error =>{
        console.error('Error al agregar usuario')
        alert('Error al registrar')
      }
    )
  }
  formularioLleno():boolean{
    return(
      this.nuevoUsuario.Nombre !== '' &&
      this.nuevoUsuario.Correo_electronico !== '' &&
      this.nuevoUsuario.Password_usuario !== ''
    );
  }

}
