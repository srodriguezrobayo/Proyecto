import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReservacionModel, ServicioModel,LugarReservacionModel, ClienteModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';

@Component({
  selector: 'app-rechazar-reserva',
  templateUrl: './rechazar-reserva.component.html',
  styleUrls: ['./rechazar-reserva.component.css']
})
export class RechazarReservaComponent implements OnInit {
  reservaciones: Observable<ReservacionModel[]> | undefined;
  servicio: Observable<ServicioModel[]> | undefined;
  lugar: Observable<LugarReservacionModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;
  reservacion = new ReservacionModel("","","","","","","","","","","","",""); 
  idReservacion: string = '';
  isLoggedIn: boolean = false;

  constructor(private accionesService: AccionesService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {

    const nitaid = this.accionesService.obtenerCorreo();
    this.isLoggedIn = nitaid !== null;
    if (!this.isLoggedIn){
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion_empresa']);
    }

    this.idReservacion = this.route.snapshot.params['id'];
    this.obtenerReservacion();

    this.reservaciones?.subscribe(reservaciones => {
      let idServicio = reservaciones[0].Servicio_idServicio;
      this.servicio = this.accionesService.obtenerservicioid(idServicio); 
    })

    this.reservaciones?.subscribe(reservaciones => {
      let ID_lugreserv = reservaciones[0].Lugar_reservacion_idLugar_reservacion;
      this.lugar = this.accionesService.obtenerlugarreservaid(ID_lugreserv);
    })

    this.reservaciones?.subscribe(reservaciones => {
      let id_Cliente = reservaciones[0].Cliente_id_Cliente;
      this.cliente = this.accionesService.obtenerclienteid(id_Cliente)
    })
  }

  obtenerReservacion(): void {
    this.reservaciones=this.accionesService.obtenerreservacionidu(this.idReservacion);
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
  

  rechazarReserva(): void {
    this.reservacion.Id_Reservacion=this.idReservacion
    this.accionesService.RechazarReserva(this.reservacion)
      .subscribe(() => {
        console.log('Reserva rechazada correctamente');
        alert('Reserva rechazada correctamente')
        this.router.navigate(['../principal_empresa'])
      });
  }
}

