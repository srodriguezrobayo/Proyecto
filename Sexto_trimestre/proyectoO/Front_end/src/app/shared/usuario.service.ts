import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaModel, ReservaModel, UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = "http://localhost:9300"

  constructor(private http: HttpClient) { }


  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/cliente/registro`, usuario);
  }
  loginUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/cliente/login`, usuario);
  }

  agregarEmpresa(empresa: EmpresaModel) {
    return this.http.post<string>(`${this.BASE_URL}/empresa/registro`, empresa);
  }
  loginEmpresa(empresa: EmpresaModel) {
    return this.http.post<string>(`${this.BASE_URL}/empresa/login`, empresa);
  }

  agendar(reserva: ReservaModel) {
    return this.http.post<string>(`${this.BASE_URL}/reserva`, reserva);
  }


}
