import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { UsuarioModel, InfoModel, ComeLibrosModel, Administrador, Usuario } from './usuario.model';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL="http://localhost:3000"

  constructor(private http: HttpClient) { }

  agregarpersona(persona: UsuarioModel): Observable<string>{
    return this.http.post<string>(`${this.URL}/registro`,persona);
  }

  login(nombre: string, correo: string, password: string): Observable<any> {
    const body = { Nombre: nombre, Correo_electronico: correo, Password_usuario: password };
    return this.http.post<any>(`${this.URL}/login`, body);
  }
  
  informacionpersona(Correo_electronico: string){
    return this.http.get<UsuarioModel[]>(`${this.URL}/busqueda/${Correo_electronico}`);
  }

  obtenercorreo (){
    return sessionStorage.getItem('Correo_electronico');
  }

  regitroinfo(info:InfoModel): Observable<string>{
    return this.http.post<string>(`${this.URL}/formulario`,info);
  }
}
