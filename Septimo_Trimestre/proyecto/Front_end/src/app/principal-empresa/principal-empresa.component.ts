import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';

import { ClienteModel, EmpresaModel, LugarReservacionModel, ReservacionModel, ServicioModel, TodoModel } from '../Tablas/shared/acciones.model';

@Component({
  selector: 'app-principal-empresa',
  templateUrl: './principal-empresa.component.html',
  styleUrls: ['./principal-empresa.component.css']
})
export class PrincipalEmpresaComponent implements OnInit {
  empresa: Observable<EmpresaModel[]> | undefined;
  pendiente: Observable<TodoModel[]> | undefined;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private accionesService: AccionesService) {}

  urlimagen = this.accionesService.BASE_URL + "/uploads/";

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {}

  ngOnInit() {

    const nitaid = this.accionesService.obtenerCorreo();
    this.isLoggedIn = nitaid !== null;
    if (!this.isLoggedIn){
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion_empresa']);
    }

    // Ver reservas pendientes
    let Correoelectronico_empresa = this.accionesService.obtenerCorreo()!;

    this.empresa = this.accionesService.informacionEmpresa(Correoelectronico_empresa);

    // Obtener reservas pendientes y filtrarlas por el día actual
    this.pendiente = this.accionesService.informacionReservasPendientes(Correoelectronico_empresa);
    this.pendiente.subscribe(reservas => {
      // Filtrar las reservas pendientes por el día actual y por reservas rechazadas
      const reservasFiltradas = reservas.filter(reserva => {
        const fechaReserva = new Date(reserva.Fecha_reservacion);
        const hoy = new Date();
        const esRechazada = reserva.Estatus === 'rechazada';

        return (fechaReserva >= hoy && !esRechazada) || (esRechazada && this.esHoy(fechaReserva));
      });

      this.pendiente = new Observable(observer => {
        observer.next(reservasFiltradas);
        observer.complete();
      });
    });
  }

  esHoy(fecha: Date): boolean {
    const hoy = new Date();
    return fecha.getDate() === hoy.getDate() &&
           fecha.getMonth() === hoy.getMonth() &&
           fecha.getFullYear() === hoy.getFullYear();
  }

  obtenerDia(fecha: string): string {
    const date = new Date(fecha);
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  borrarReservacion(id: string) {
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert(data);
      window.location.reload();
    });
  }

  cerrarsesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio_sesion']);
  }
}
