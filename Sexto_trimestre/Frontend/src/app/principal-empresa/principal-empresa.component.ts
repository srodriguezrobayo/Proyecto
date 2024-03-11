import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-empresa',
  templateUrl: './principal-empresa.component.html',
  styleUrls: ['./principal-empresa.component.css']
})
export class PrincipalEmpresaComponent {
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }
}
