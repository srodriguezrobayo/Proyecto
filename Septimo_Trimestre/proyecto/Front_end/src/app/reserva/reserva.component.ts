import { Component, OnInit } from '@angular/core';
import {  ClienteModel, EmpleadoModel, ServicioModel, lugaryCiudadModel } from '../Tablas/shared/acciones.model';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router,ActivatedRoute, Route} from '@angular/router';
import { ReservacionModel } from '../Tablas/shared/acciones.model';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']

})
export class ReservaComponent implements OnInit {

  clientes: Observable<ClienteModel[]> | undefined
  empresa: Observable<EmpresaModel[]> | undefined
  servicio: Observable<ServicioModel[]> | undefined;
  empleado: Observable<EmpleadoModel[]> | undefined;
  dos: Observable<lugaryCiudadModel[]> | undefined;
  reserva = new ReservacionModel("","","","","","","","","","","","","")
  isLoggedIn: boolean = false;

  constructor(
    private accionesService: AccionesService,private route:ActivatedRoute, private router: Router 

  ) { }

  urlimagen=this.accionesService.BASE_URL+"/uploads/"
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }

  ngOnInit(): void {

    const correoaid = this.accionesService.obtenerCorreoUsuario();
    this.isLoggedIn = correoaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    }

    //ver cliente
    let Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!
    this.clientes = this.accionesService.informacionUsuario(Correoelectronico_cliente)
    console.log (this.clientes)

    //ver empresa especifico
    let Nit_Empresa = this.empresa = this.route.snapshot.params['Nit_Empresa']

    this.empresa = this.accionesService.VerEmpresasEspecifico(Nit_Empresa)
    console.log (this.empresa)

    //ver servicios

    this.servicio = this.accionesService.VerServicio(Correoelectronico_cliente)
    console.log (this.servicio)


    this.empleado = this.accionesService.VerEmpleados(Correoelectronico_cliente)
    console.log (this.empleado)

    this.dos = this.accionesService.VerCiudadylugar(Correoelectronico_cliente)
    console.log (this.dos)
  }

  onSubmit(){
    this.Verificardisponibilidad();
  }

  Verificardisponibilidad() {
    const { Empresa_Nit_Empresa, Fecha_reservacion } = this.reserva;
    const hoy = new Date().toISOString().slice(0,10);
    const dosSemanasDespues = new Date();
    dosSemanasDespues.setDate(dosSemanasDespues.getDate() + 14);
    const dosSemanasDespuesString = dosSemanasDespues.toISOString().slice(0,10);

    this.accionesService.tiempo(Empresa_Nit_Empresa, Fecha_reservacion).subscribe(
      (response: any) => {
        if (response.message === 'Ya está reservado') {
          alert("La fecha ya está seleccionada, por favor seleccione otra");
        }else if(Fecha_reservacion < hoy){
          alert("La fecha ya paso, por favor seleccione otra");
        } else if(Fecha_reservacion == hoy){
          alert("La fecha es hoy, por favor seleccione otra");
        }else if(Fecha_reservacion < dosSemanasDespuesString){
          alert("No hay suficiente tiempo para preparar todo, por favor seleccione otra");
        } else {
          console.log("La fecha y hora seleccionada están disponibles");
          this.agendarreserva();
        }
      },
      (error) => {
        console.error("Error al verificar disponibilidad", error);
        alert("Error al verificar disponibilidad, Por favor, inténtelo más tarde");
      }
    );
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

  agendarreserva(){
    if (this.reserva.Condiciones == '' || this.reserva.Condiciones == null){
      this.reserva.Condiciones = 'N/A'
    }
    this.accionesService.agendar(this.reserva).subscribe(
      data => {
        alert("Reserva hecha con éxito");
        this.router.navigate(['/pendientes']);
      },
      error => {
        console.error("Error al agendar reserva", error);
        alert("Error al agendar reserva. Por favor, inténtelo más tarde.");
      }
    );
}

  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }

}
