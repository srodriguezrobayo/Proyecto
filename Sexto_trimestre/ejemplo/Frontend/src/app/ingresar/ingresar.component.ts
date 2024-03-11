import { Component } from '@angular/core';
import { UsuarioModel,ComeLibrosModel,Usuario,Administrador } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

 Personaexistente: UsuarioModel = new UsuarioModel ('','','','');

 constructor (private usuarioService: UsuarioService, private router: Router){}

 entrarUsuario() {
  this.usuarioService.login(
    this.Personaexistente.Nombre,
    this.Personaexistente.Correo_electronico,
    this.Personaexistente.Password_usuario
  ).subscribe(
    response => {
      console.log('Persona iniciada exitosamente', response);
      alert('Inicio de sesión exitoso');
      sessionStorage.setItem('Correo_electronico', this.Personaexistente.Correo_electronico);
      this.Personaexistente = new UsuarioModel('', '', '', '');
      this.router.navigate(['/inicio']);
    },
    error => {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.');
    }
  );
}

  
formularioLleno():boolean{
 return(
  this.Personaexistente.Nombre !== '' &&
    this.Personaexistente.Correo_electronico !== '' &&
   this.Personaexistente.Password_usuario !== ''
  );
 }
}
