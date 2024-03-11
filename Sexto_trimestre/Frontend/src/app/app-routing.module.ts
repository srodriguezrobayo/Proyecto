import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ListaEmpleadoComponent } from './Tablas/lista-empleado/lista-empleado.component';
import { EditarEmpleadoComponent } from './Tablas/editar-empleado/editar-empleado.component';
import { ListaGeneroComponent } from './Tablas/lista-genero/lista-genero.component';
import { EditarGeneroComponent } from './Tablas/editar-genero/editar-genero.component';
import { ListaDepartamentoComponent } from './Tablas/lista-departamento/lista-departamento.component';
import { EditarDepartamentoComponent } from './Tablas/editar-departamento/editar-departamento.component';
import { ListaCiudadComponent } from './Tablas/lista-ciudad/lista-ciudad.component';
import { EditarCiudadComponent } from './Tablas/editar-ciudad/editar-ciudad.component';
import { ListaLugarreservaComponent } from './Tablas/lista-lugarreserva/lista-lugarreserva.component';
import { EditarLugarreservaComponent } from './Tablas/editar-lugarreserva/editar-lugarreserva.component';
import { ListaServicioComponent } from './Tablas/lista-servicio/lista-servicio.component';
import { EditarServicioComponent } from './Tablas/editar-servicio/editar-servicio.component';
import { ListaClienteComponent } from './Tablas/lista-cliente/lista-cliente.component';
import { EditarClienteComponent } from './Tablas/editar-cliente/editar-cliente.component';
import { ListaEmpresaComponent } from './Tablas/lista-empresa/lista-empresa.component';
import { EditarEmpresaComponent } from './Tablas/editar-empresa/editar-empresa.component';
import { ListaReservacionComponent } from './Tablas/lista-reservacion/lista-reservacion.component';
import { EditarReservacionComponent } from './Tablas/editar-reservacion/editar-reservacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioPrincipalComponent } from './inicio-principal/inicio-principal.component';

const routes: Routes = [
  { path:'tipo_usuario', component: ListaTipoUsuarioComponent},
  { path:'tipo_usuario/actualizar/:id', component: EditarTipoUsuarioComponent},
  { path:'tipo_usuario/agregar', component:EditarTipoUsuarioComponent},
  { path:'empleado', component: ListaEmpleadoComponent},
  { path:'empleado/actualizar/:id', component:EditarEmpleadoComponent},
  { path:'empleado/agregar', component:EditarEmpleadoComponent},
  { path:'genero', component:ListaGeneroComponent},
  { path:'genero/actualizar/:id', component:EditarGeneroComponent},
  { path:'genero/agregar', component:EditarGeneroComponent},
  { path:'departamento', component: ListaDepartamentoComponent},
  { path:'departamento/actualizar/:id', component:EditarDepartamentoComponent},
  { path:'departamento/agregar', component:EditarDepartamentoComponent},
  { path:'ciudad', component: ListaCiudadComponent},
  { path:'ciudad/actualizar/:id', component:EditarCiudadComponent},
  { path:'ciudad/agregar', component:EditarCiudadComponent},
  { path:'lugar_reserva', component: ListaLugarreservaComponent},
  { path:'lugar_reserva/actualizar/:id', component:EditarLugarreservaComponent},
  { path:'lugar_reserva/agregar', component:EditarLugarreservaComponent},
  { path:'servicio', component: ListaServicioComponent},
  { path:'servicio/actualizar/:id', component:EditarServicioComponent},
  { path:'servicio/agregar', component:EditarServicioComponent},
  { path:'clientec', component: ListaClienteComponent},
  { path:'clientec/actualizar/:id', component:EditarClienteComponent},
  { path:'clientec/agregar', component:EditarClienteComponent},
  { path:'empresac', component: ListaEmpresaComponent},
  { path:'empresac/actualizar/:id', component:EditarEmpresaComponent},
  { path:'empresac/agregar', component:EditarEmpresaComponent},
  { path:'reservacion', component: ListaReservacionComponent},
  { path:'reservacion/actualizar/:id', component:EditarReservacionComponent},
  { path:'reservacion/agregar', component:EditarReservacionComponent},
  { path:'navbar', component:NavbarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'empresa/detalles/editar', component:EditarReservaEmpresaComponent},
  {path:'empresa/perfil/editar', component:EditarPerfilEmpresaComponent},
  {path:'empresa/perfil',component:PerfilEmpresaComponent},
  {path:'cliente/perfil/editar',component:EditarPerfilClienteComponent},
  {path:'cliente/perfil', component:PerfilClienteComponent},
  {path:'login-admin', component:LoginAdminComponent},
  {path:'login-empresa', component:LoginEmpresaComponent},
  {path: 'empresa/detalles', component:DetalleEmpresaComponent},
  {path:'empresa',component:PrincipalEmpresaComponent},
  {path:'cliente/reservas/detalles', component:DetalleClienteComponent},
  {path:'cliente/reservar',component:ReservarClienteComponent},
  {path:'cliente/reservas',component:ReservasClienteComponent},
  {path:'cliente',component:PrincipalClienteComponent},
  {path:'Registrarempresa',component:RegistroEmpresaComponent},
  {path:'login', component:LoginComponent},
  {path:'Registrarcliente',component:RegistroClienteComponent},
  {path:'Inicio', component:InicioPrincipalComponent},
  {path:'',pathMatch:'full',redirectTo:'/Inicio'},
  {path:'**', pathMatch:'full',redirectTo:'/Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
