import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaModel, ReservacionModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';

@Component({
  selector: 'app-editar-reservaciones-pendientes',
  templateUrl: './editar-reservaciones-pendientes.component.html',
  styleUrls: ['./editar-reservaciones-pendientes.component.css']
})
export class EditarReservacionesPendientesComponent implements OnInit {
  empresa: Observable<EmpresaModel[]> | undefined;
  reservacion: ReservacionModel = new ReservacionModel("","","","","","","","",""); // Asegúrate de ajustar el constructor según tus necesidades
  sidebarActive = false;
  Id_Reservacion: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accionesService: AccionesService
  ) {}

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    // Lógica para activar el enlace según sea necesario
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Id_Reservacion = params['Id_Reservacion'] || '';
    });

    // Obtener el correo electrónico de la empresa (reemplaza esto con tu lógica)
    let Correoelectronico_empresa = this.accionesService.obtenerCorreo()!;

    // Obtener información de la empresa
    this.empresa = this.accionesService.informacionEmpresa(Correoelectronico_empresa);

    // Obtener información de la reservación
    this.accionesService.obtenerreservacionidu(this.Id_Reservacion).subscribe(
      (reservacion) => {
        this.reservacion = reservacion[0];
        console.log(this.reservacion);
      },
      (error) => {
        console.error('Error al obtener la reservación:', error);
        // Manejar errores según sea necesario.
      }
    );
  }

  // Método para actualizar la reservación
  actualizarReservacion() {
    if (this.reservacion) {
      this.accionesService.actualizarreservacionu(this.reservacion).subscribe(
        (respuesta) => {
          console.log('Reservación actualizada correctamente:', respuesta);
          alert('Reservación actualizada correctamente:');
          this.router.navigate(['/principal_empresa']);
          // Puedes redirigir a otra página o realizar otras acciones necesarias.
        },
        (error) => {
          console.error('Error al actualizar la reservación:', error);
          // Manejar errores según sea necesario.
        }
      );
    }
  }
  cerrarsesion() {
    sessionStorage.removeItem('Correoelectronico_empresa');
    sessionStorage.removeItem('Empresa_Nit_Empresa');
    this.router.navigate(['/inicio_sesion']);
  }
}
