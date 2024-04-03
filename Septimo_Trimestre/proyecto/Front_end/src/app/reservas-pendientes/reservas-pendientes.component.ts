import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';
import { ClienteModel, TodoModel } from './../Tablas/shared/acciones.model';

@Component({
  selector: 'app-reservas-pendientes',
  templateUrl: './reservas-pendientes.component.html',
  styleUrls: ['./reservas-pendientes.component.css']
})
export class ReservasPendientesComponent implements OnInit {
  clientes: Observable<ClienteModel[]> | undefined;
  todo: Observable<TodoModel[]> | undefined;
  isLoggedIn: boolean = false; 

  constructor(private accionesService: AccionesService, private router: Router) {}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"

  setActiveLink(){

  }

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  ngOnInit() {

    const correoaid = this.accionesService.obtenerCorreoUsuario();
    this.isLoggedIn = correoaid !== null;
  
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    }

    const Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!;

    this.clientes = this.accionesService.informacionUsuario(Correoelectronico_cliente);

    this.todo = this.accionesService.VerReservasPendientes(Correoelectronico_cliente);
    this.todo.subscribe(reservas => {
      const reservasFiltradas = reservas.filter(reserva => {
        const fechaReserva = new Date(reserva.Fecha_reservacion);
        const hoy = new Date();
        const esRechazada = reserva.Estatus === 'rechazada';

        return (fechaReserva >= hoy && !esRechazada) || (esRechazada && this.esHoy(fechaReserva));
      });

      this.todo = new Observable(observer => {
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

  cerrarsesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio_sesion']);
  }

  borrarReservacion(id: string) {
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert(data);
    });
  }
}
