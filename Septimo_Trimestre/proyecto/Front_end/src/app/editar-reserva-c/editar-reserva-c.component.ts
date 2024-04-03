import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteModel, LugarReservacionModel, ReservacionModel, ServicioModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';

@Component({
  selector: 'app-editar-reserva-c',
  templateUrl: './editar-reserva-c.component.html',
  styleUrls: ['./editar-reserva-c.component.css']
})
export class EditarReservaCComponent implements OnInit {
  cliente: Observable<ClienteModel[]> | undefined;
  reservacion: ReservacionModel = new ReservacionModel("","","","","","","","","","","","","");
  servicio: ServicioModel[] = [];
  lugar: LugarReservacionModel [] = [];
  sidebarActive = false;
  Id_Reservacion: string = '';
  isLoggedIn: boolean = false; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accionesService: AccionesService
  ) {}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"
  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    // Lógica para activar el enlace según sea necesario
  }

  ngOnInit(): void {
    const correoaid = this.accionesService.obtenerCorreoUsuario();
    this.isLoggedIn = correoaid !== null;
  
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    }
    this.route.params.subscribe(params => {
      this.Id_Reservacion = params['Id_Reservacion'] || '';
    });

    // Obtener el correo electrónico del cliente (reemplaza esto con tu lógica)
    let Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!;

    // Obtener información del cliente
    this.cliente = this.accionesService.informacionUsuario(Correoelectronico_cliente);

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
    this.obtenerservicio();
    this.obtenerlugar();
  }

  obtenerservicio() {
    this.accionesService.obtenerservicio().subscribe(
      (data: ServicioModel[]) => {
        this.servicio = data;
      },
      error =>{
        console.log('Error al encontrar los servicios:', error)
      }
    );
  }

  obtenerlugar(){
    this.accionesService.obtenerlugarreserva().subscribe(
      (data:LugarReservacionModel[]) => {
        this.lugar = data;
      },
      error =>{
        console.log ('Error al encontrar los luagares:',error)
      }
    )
  }

  condicionesValidas(condiciones: string): boolean {
    const palabrasInapropiadas = ['Hijueputa', 'Hijoputa', 'hpta', 'hijueputa', 'hijoputa', 'Hpta', 'HPTA', 'Mierda', 'mierda','puto','puta','Puta','Puto','Malparido','Malparido','Treintahijueputa','treintahijueputa','Triplehijueputa','triplehijueputa','Setentahijueputa','setentahijueputa','Hijo de la gran puta','hijo de la gran puta','Gonorrea','gonorrea'];
    for (let palabra of palabrasInapropiadas) {
        if (condiciones.toLowerCase().includes(palabra.toLowerCase())) {
            return false;
        }
    }
    return true;
  }

  // Método para actualizar la reservación
  actualizarReservacion() {
    const { Empresa_Nit_Empresa, Fecha_reservacion } = this.reservacion;
    const hoy = new Date().toISOString().slice(0,10);
    const dosSemanasDespues = new Date();
    dosSemanasDespues.setDate(dosSemanasDespues.getDate() + 14);
    const dosSemanasDespuesString = dosSemanasDespues.toISOString().slice(0,10);
  
    if (Fecha_reservacion < hoy) {
      alert("La fecha ya pasó, por favor seleccione otra");
      return;
    } else if (Fecha_reservacion == hoy) {
      alert("La fecha es hoy, por favor seleccione otra");
      return;
    } else if (Fecha_reservacion < dosSemanasDespuesString) {
      alert("No hay suficiente tiempo para preparar todo, por favor seleccione otra");
      return;
    }
  
    this.accionesService.tiempo(Empresa_Nit_Empresa, Fecha_reservacion).subscribe(
      (response: any) => {
        if (response.message === 'Ya está reservado') {
          alert("La fecha ya está seleccionada, por favor seleccione otra");
        } else {
          if (this.condicionesValidas(this.reservacion.Condiciones)) {
            this.accionesService.actualizarreservacionu(this.reservacion).subscribe(
              (respuesta) => {
                console.log('Reservación actualizada correctamente:', respuesta);
                alert('Reservación actualizada correctamente:');
                this.router.navigate(['/pendientes']);
              },
              (error) => {
                console.error('Error al actualizar la reservación:', error);
                alert("Error al actualizar la reservación. Por favor, inténtelo más tarde.");
              }
            );
          } else {
            alert("Las condiciones de la reservación contienen palabras inapropiadas.");
          }
        }
      },
      (error) => {
        console.error("Error al verificar disponibilidad", error);
        alert("Error al verificar disponibilidad. Por favor, inténtelo más tarde.");
      }
    );
  }
  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }
}

