import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuario.model'
import { UsuarioService } from '../shared/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entro',
  templateUrl: './entro.component.html',
  styleUrls: ['./entro.component.css']
})
export class EntroComponent implements OnInit {
  usuario: Observable<UsuarioModel[]> | undefined
  isLoggedIn: boolean = false; 
  constructor (private router: Router, private usuarioService: UsuarioService){}
  ngOnInit() {
    const correoaid = this.usuarioService.obtenercorreo();
    this.isLoggedIn = correoaid !== null;

    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/login']);
    }
    let Correo_electronico = this.usuarioService.obtenercorreo()!
    this.usuario = this.usuarioService.informacionpersona(Correo_electronico)
    console.log (this.usuario)
  }

  Cerrarsession(){
    sessionStorage.removeItem('Correo_electronico')
    //sessionStorage.clear()
    this.router.navigate(['/registrar'])
  }
}
