import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './shared/usuario.service';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PrincipalEmpresaComponent } from './principal-empresa/principal-empresa.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { VistaEmpresaComponent } from './vista-empresa/vista-empresa.component';
import { ReservaComponent } from './reserva/reserva.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    LoginEmpresaComponent,
    RegistroEmpresaComponent,
    PaginaPrincipalComponent,
    PrincipalEmpresaComponent,
    PerfilEmpresaComponent,
    PerfilUsuarioComponent,
    VistaEmpresaComponent,
    ReservaComponent,
    SegundaPagComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
