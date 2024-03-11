import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private router: Router){}

  cerrarsesion() {
    sessionStorage.removeItem('Nom_empleado');
    this.router.navigate(['/inicio_sesion']);
  }

}
