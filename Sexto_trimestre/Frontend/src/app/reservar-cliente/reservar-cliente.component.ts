import { Component } from '@angular/core';

@Component({
  selector: 'app-reservar-cliente',
  templateUrl: './reservar-cliente.component.html',
  styleUrls: ['./reservar-cliente.component.css']
})
export class ReservarClienteComponent {

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    
  }

}
