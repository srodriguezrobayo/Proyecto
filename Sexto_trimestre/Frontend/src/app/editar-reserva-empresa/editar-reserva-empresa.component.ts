import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-reserva-empresa',
  templateUrl: './editar-reserva-empresa.component.html',
  styleUrls: ['./editar-reserva-empresa.component.css']
})
export class EditarReservaEmpresaComponent {
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    
  }


}
