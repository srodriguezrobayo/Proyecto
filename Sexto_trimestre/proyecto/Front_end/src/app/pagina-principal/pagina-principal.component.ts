import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClienteModel, EmpresaModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit, OnDestroy {
  empresas: Observable<EmpresaModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;
  numeroPaginas: number[] = [];

  sidebarActive = false;

  constructor(private router: Router, private accionesService: AccionesService) {}

  toggleSidebar() {
  }

  setActiveLink() {
    // Lógica para activar el enlace según sea necesario
  }
  ngOnInit(): void {
    // Obtener la lista de empresas
    this.empresas = this.accionesService.VerEmpresas(this.accionesService.obtenerCorreo()!);

    // Calcular el número total de páginas
    this.empresas.subscribe(data => {
      const totalEmpresas = data.length;
      const totalPaginas = Math.ceil(totalEmpresas / 18);
      this.numeroPaginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);
    });

    // Obtener información del cliente
    this.cliente = this.accionesService.informacionUsuario(this.accionesService.obtenerCorreoUsuario()!);
  }

  ngOnDestroy(): void {
    // Lógica de limpieza (si es necesario)
  }

  cerrarsesion() {
    sessionStorage.removeItem("Correoelectronico_cliente");
    sessionStorage.removeItem("Cliente_id_Cliente");
    this.router.navigate(['/inicio_sesion']);
  }
}