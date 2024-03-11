import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { EntroComponent } from './entro/entro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'inicio', component: EntroComponent},
  {path:'login', component:IngresarComponent},
  {path:'registrar', component:InicioComponent},
  {path:'',pathMatch:'full',redirectTo:'/registrar'},
  {path:'**', pathMatch:'full',redirectTo:'/registrar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
