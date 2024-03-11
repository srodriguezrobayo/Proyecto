import { VistaEmpresaComponent } from './vista-empresa/vista-empresa.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { PrincipalEmpresaComponent } from './principal-empresa/principal-empresa.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ReservaComponent } from './reserva/reserva.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';

export const routes: Routes = [
  { path: 'registro_cliente', component: RegistroUsuarioComponent },
  { path: 'inicio_sesion', component: LoginUsuarioComponent },
  { path: 'registro_empresa', component: RegistroEmpresaComponent },
  { path: 'inicio_sesion_empresa', component: LoginEmpresaComponent },
  { path: 'principal', component: PaginaPrincipalComponent },
  { path: 'seg_pag', component: SegundaPagComponent },
  { path: 'principal_empresa', component: PrincipalEmpresaComponent },
  { path: 'perfil_empresa', component: PerfilEmpresaComponent },
  { path: 'perfil_cliente', component: PerfilUsuarioComponent },
  { path: 'vista_empresa', component: VistaEmpresaComponent },
  { path: 'reserva', component: ReservaComponent },

  { path: '**',  redirectTo:  '/inicio_sesion', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
