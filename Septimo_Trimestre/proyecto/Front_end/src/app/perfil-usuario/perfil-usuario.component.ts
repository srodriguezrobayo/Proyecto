import { Component, OnInit } from '@angular/core';
import { UsuarioperfilModel } from '../Tablas/shared/acciones.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  cliente: Observable<UsuarioperfilModel[]> | undefined;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private accionesService: AccionesService) {}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  ngOnInit(): void {
    const correoaid = this.accionesService.obtenerCorreoUsuario();
    this.isLoggedIn = correoaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    }

    const correoElectronico = this.accionesService.obtenerCorreoUsuario();

    if (correoElectronico) {
      this.cliente = this.accionesService.PerfilCliente(correoElectronico);
      // this.cliente.subscribe(data => {
      //   // Log the user profile information
      //   console.log(data);
      // });
    }
  }

  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }
  
}
