import { Component } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  isLoggedIn: boolean = false; 

  constructor(
    private router: Router,
    private accionesService: AccionesService
  ) {}

  ngOnInit(){
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
  
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 
  }
}
