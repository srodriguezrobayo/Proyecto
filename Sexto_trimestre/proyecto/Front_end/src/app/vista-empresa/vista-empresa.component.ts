import { AccionesService } from './../Tablas/shared/acciones.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmpresaModel } from '../Tablas/shared/acciones.model';
import { ClienteModel } from '../Tablas/shared/acciones.model';






@Component({
  selector: 'app-vista-empresa',
  templateUrl: './vista-empresa.component.html',
  styleUrls: ['./vista-empresa.component.css']
})
export class VistaEmpresaComponent implements OnInit {

  empresa: Observable<EmpresaModel[]> | undefined
  cliente: Observable<ClienteModel[]> | undefined;

  constructor ( private accionesService: AccionesService,private route:ActivatedRoute ){}





  ngOnInit() {


    //ver empresa especifico
    let Nit_Empresa = this.empresa = this.route.snapshot.params['Nit_Empresa']

    this.empresa = this.accionesService.VerEmpresasEspecifico(Nit_Empresa)
    console.log (this.empresa)


    let Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!
    this.cliente = this.accionesService.informacionUsuario(Correoelectronico_cliente)
    console.log (this.cliente)




  }

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }


}
