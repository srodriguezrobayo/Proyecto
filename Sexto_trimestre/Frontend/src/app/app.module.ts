import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { LoginComponent } from './login/login.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { PrincipalClienteComponent } from './principal-cliente/principal-cliente.component';
import { ReservasClienteComponent } from './reservas-cliente/reservas-cliente.component';
import { ReservarClienteComponent } from './reservar-cliente/reservar-cliente.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { PrincipalEmpresaComponent } from './principal-empresa/principal-empresa.component';
import { DetalleEmpresaComponent } from './detalle-empresa/detalle-empresa.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { EditarPerfilClienteComponent } from './editar-perfil-cliente/editar-perfil-cliente.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { EditarPerfilEmpresaComponent } from './editar-perfil-empresa/editar-perfil-empresa.component';
import { EditarReservaEmpresaComponent } from './editar-reserva-empresa/editar-reserva-empresa.component';
import { EditarTipoUsuarioComponent } from './Tablas/editar-tipo-usuario/editar-tipo-usuario.component';
import { ListaTipoUsuarioComponent } from './Tablas/lista-tipo-usuario/lista-tipo-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarEmpleadoComponent } from './Tablas/editar-empleado/editar-empleado.component';
import { ListaEmpleadoComponent } from './Tablas/lista-empleado/lista-empleado.component';
import { ListaGeneroComponent } from './Tablas/lista-genero/lista-genero.component';
import { EditarGeneroComponent } from './Tablas/editar-genero/editar-genero.component';
import { EditarDepartamentoComponent } from './Tablas/editar-departamento/editar-departamento.component';
import { ListaDepartamentoComponent } from './Tablas/lista-departamento/lista-departamento.component';
import { EditarCiudadComponent } from './Tablas/editar-ciudad/editar-ciudad.component';
import { ListaCiudadComponent } from './Tablas/lista-ciudad/lista-ciudad.component';
import { EditarLugarreservaComponent } from './Tablas/editar-lugarreserva/editar-lugarreserva.component';
import { ListaLugarreservaComponent } from './Tablas/lista-lugarreserva/lista-lugarreserva.component';
import { EditarServicioComponent } from './Tablas/editar-servicio/editar-servicio.component';
import { ListaServicioComponent } from './Tablas/lista-servicio/lista-servicio.component';
import { EditarClienteComponent } from './Tablas/editar-cliente/editar-cliente.component';
import { ListaClienteComponent } from './Tablas/lista-cliente/lista-cliente.component';
import { EditarEmpresaComponent } from './Tablas/editar-empresa/editar-empresa.component';
import { ListaEmpresaComponent } from './Tablas/lista-empresa/lista-empresa.component';
import { EditarReservacionComponent } from './Tablas/editar-reservacion/editar-reservacion.component';
import { ListaReservacionComponent } from './Tablas/lista-reservacion/lista-reservacion.component';
import { InicioPrincipalComponent } from './inicio-principal/inicio-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    LoginComponent,
    RegistroEmpresaComponent,
    PrincipalClienteComponent,
    ReservasClienteComponent,
    ReservarClienteComponent,
    DetalleClienteComponent,
    PrincipalEmpresaComponent,
    DetalleEmpresaComponent,
    LoginEmpresaComponent,
    LoginAdminComponent,
    PerfilClienteComponent,
    EditarPerfilClienteComponent,
    PerfilEmpresaComponent,
    EditarPerfilEmpresaComponent,
    EditarReservaEmpresaComponent,
    EditarTipoUsuarioComponent,
    ListaTipoUsuarioComponent,
    NavbarComponent,
    InicioComponent,
    EditarEmpleadoComponent,
    ListaEmpleadoComponent,
    ListaGeneroComponent,
    EditarGeneroComponent,
    EditarDepartamentoComponent,
    ListaDepartamentoComponent,
    EditarCiudadComponent,
    ListaCiudadComponent,
    EditarLugarreservaComponent,
    ListaLugarreservaComponent,
    EditarServicioComponent,
    ListaServicioComponent,
    EditarClienteComponent,
    ListaClienteComponent,
    EditarEmpresaComponent,
    ListaEmpresaComponent,
    EditarReservacionComponent,
    ListaReservacionComponent,
    InicioPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
