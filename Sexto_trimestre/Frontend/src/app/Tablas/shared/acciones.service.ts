import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneroModel, Tipo_usuarioModel,EmpleadoModel, DepartamentoModel, CiudadModel } from './acciones.model';
import { LugarReservacionModel, ServicioModel, ClienteModel, EmpresaModel, ReservacionModel } from './acciones.model';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  private BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

//tipo_usuario
  obtenerTipoUsuario(){
    return this.http.get<Tipo_usuarioModel[]>(this.BASE_URL+'/tipo_usuario');
  }

  obtenerTipoUsuarioid(id: string){
    return this.http.get<Tipo_usuarioModel[]>(`${this.BASE_URL}/tipo_usuario/${id}`)
  }

  agregarTipoUsuario(tipo_usuario: Tipo_usuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/tipo_usuario/agregar`, tipo_usuario)
  }
  actualizarTipoUsuario(tipo_usuario: Tipo_usuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/tipo_usuario/actualizar/${tipo_usuario.idTipo_usuario}`,tipo_usuario)
  }

  borrarTipoUsuario(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/tipo_usuario/borrar/${id}`)
  }

  //empleado
  obtenerempleado(){
    return this.http.get<EmpleadoModel[]>(this.BASE_URL+'/empleado');
  }

  obtenerempleadoid(id: string){
    return this.http.get<EmpleadoModel[]>(`${this.BASE_URL}/empleado/${id}`)
  }

  agregarempleado(empleado: EmpleadoModel){
    return this.http.post<string>(`${this.BASE_URL}/empleado/agregar`, empleado)
  }
  actualizarempleado(empleado: EmpleadoModel) {
    return this.http.put<string>(`${this.BASE_URL}/empleado/actualizar/${empleado.id_empleado}`,empleado)
  }

  borrarempleado(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/empleado/borrar/${id}`)
  }


//genero

  obtenergenero(){
    return this.http.get<GeneroModel[]>(this.BASE_URL+'/genero');
  }

  obtenergeneroid(id: string){
    return this.http.get<GeneroModel[]>(`${this.BASE_URL}/genero/${id}`)
  }

  agregargenero(genero: GeneroModel){
    return this.http.post<string>(`${this.BASE_URL}/genero/agregar`, genero)
  }
  actualizargenero(genero: GeneroModel) {
    return this.http.put<string>(`${this.BASE_URL}/genero/actualizar/${genero.idGenero}`,genero)
  }

  borrargenero(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/genero/borrar/${id}`)
  }

  //departamento

  obtenerdepartamento(){
    return this.http.get<DepartamentoModel[]>(this.BASE_URL+'/departamento');
  }

  obtenerdepartamentoid(id: string){
    return this.http.get<DepartamentoModel[]>(`${this.BASE_URL}/departamento/${id}`)
  }

  agregardepartamento(departamento: DepartamentoModel){
    return this.http.post<string>(`${this.BASE_URL}/departamento/agregar`, departamento)
  }
  actualizardepartamento(departamento: DepartamentoModel) {
    return this.http.put<string>(`${this.BASE_URL}/departamento/actualizar/${departamento.idDepartamento}`,departamento)
  }

  borrardepartamento(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/departamento/borrar/${id}`)
  }


  //Ciudad

  obtenerciudad(){
    return this.http.get<CiudadModel[]>(this.BASE_URL+'/Ciudad');
  }

  obtenerciudadid(id: string){
    return this.http.get<CiudadModel[]>(`${this.BASE_URL}/ciudad/${id}`)
  }

  agregarciudad(ciudad: CiudadModel){
    return this.http.post<string>(`${this.BASE_URL}/ciudad/agregar`, ciudad)
  }
  actualizarciudad(ciudad: CiudadModel) {
    return this.http.put<string>(`${this.BASE_URL}/ciudad/actualizar/${ciudad.id_Ciudad}`,ciudad)
  }

  borrarciudad(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/ciudad/borrar/${id}`)
  }

  //lugar reserva
  obtenerlugarreserva(){
    return this.http.get<LugarReservacionModel[]>(this.BASE_URL+'/lugar_reserva');
  }

  obtenerlugarreservaid(id: string){
    return this.http.get<LugarReservacionModel[]>(`${this.BASE_URL}/lugar_reserva/${id}`)
  }

  agregarlugarreserva(lugar_reserva: LugarReservacionModel){
    return this.http.post<string>(`${this.BASE_URL}/lugar_reserva/agregar`, lugar_reserva)
  }
  actualizarlugarreserva(lugar_reserva: LugarReservacionModel) {
    return this.http.put<string>(`${this.BASE_URL}/lugar_reserva/actualizar/${lugar_reserva.ID_lugreserv}`,lugar_reserva)
  }

  borrarlugarreserva(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/lugar_reserva/borrar/${id}`)
  }

  //servicio
  obtenerservicio(){
    return this.http.get<ServicioModel[]>(this.BASE_URL+'/servicio');
  }

  obtenerservicioid(id: string){
    return this.http.get<ServicioModel[]>(`${this.BASE_URL}/servicio/${id}`)
  }

  agregarservicio(servicio: ServicioModel){
    return this.http.post<string>(`${this.BASE_URL}/servicio/agregar`, servicio)
  }
  actualizarservicio(servicio: ServicioModel) {
    return this.http.put<string>(`${this.BASE_URL}/servicio/actualizar/${servicio.idServicio}`,servicio)
  }

  borrarservicio(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/servicio/borrar/${id}`)
  }
  
  //cliente
  obtenercliente(){
    return this.http.get<ClienteModel[]>(this.BASE_URL+'/cliente');
  }

  obtenerclienteid(id: string){
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/cliente/${id}`)
  }

  agregarcliente(cliente: ClienteModel){
    return this.http.post<string>(`${this.BASE_URL}/cliente/agregar`, cliente)
  }
  actualizarcliente(cliente: ClienteModel) {
    return this.http.put<string>(`${this.BASE_URL}/cliente/actualizar/${cliente.id_Cliente}`,cliente)
  }

  borrarcliente(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/cliente/borrar/${id}`)
  }

  //empresa
  obtenerempresa(){
    return this.http.get<EmpresaModel[]>(this.BASE_URL+'/empresa');
  }

  obtenerempresaid(id: string){
    return this.http.get<EmpresaModel[]>(`${this.BASE_URL}/empresa/${id}`)
  }

  agregarempresa(empresa: EmpresaModel){
    return this.http.post<string>(`${this.BASE_URL}/empresa/agregar`, empresa)
  }
  actualizarempresa(empresa: EmpresaModel) {
    return this.http.put<string>(`${this.BASE_URL}/empresa/actualizar/${empresa.Nit_Empresa}`,empresa)
  }
  borrarempresa(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/empresa/borrar/${id}`)
  }

  //reservacion
  obtenerreservacion(){
    return this.http.get<ReservacionModel[]>(this.BASE_URL+'/reservacion');
  }

  obtenerreservacionid(id: string){
    return this.http.get<ReservacionModel[]>(`${this.BASE_URL}/reservacion/${id}`)
  }

  agregarreservacion(reservacion: ReservacionModel){
    return this.http.post<string>(`${this.BASE_URL}/reservacion/agregar`, reservacion)
  }
  actualizarreservacion(reservacion: ReservacionModel) {
    return this.http.put<string>(`${this.BASE_URL}/reservacion/actualizar/${reservacion.Id_Reservacion}`,reservacion)
  }
  borrarreservacion(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/reservacion/borrar/${id}`)
  }
}
