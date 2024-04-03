import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { ClienteModel, EmpresaModel } from '../Tablas/shared/acciones.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  empresas: Observable<EmpresaModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;
  urlimagen: string;
  isLoggedIn: boolean = false; 
  public empresa !: Array<EmpresaModel[]>;
  public page !: number

  sidebarActive = false;

  constructor(private router: Router, private accionesService: AccionesService) {
    this.urlimagen = this.accionesService.BASE_URL + "/uploads/";
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    
  }

  ngOnInit(): void {
    const correoaid = this.accionesService.obtenerCorreoUsuario();
    this.isLoggedIn = correoaid !== null;
    this.obtenerEmpresas();
    this.obtenerInformacionCliente();
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio_sesion']);
  }

  private obtenerEmpresas(): void {
    const correo = this.accionesService.obtenerCorreo()!;
    this.empresas = this.accionesService.VerEmpresas(correo);
  }

  private obtenerInformacionCliente(): void {
    const correoUsuario = this.accionesService.obtenerCorreoUsuario()!;
    this.cliente = this.accionesService.informacionUsuario(correoUsuario);
  }
}
