import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.css']
})
export class ReservasClienteComponent {
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    
  }



}
