import { Component, OnInit } from '@angular/core';

import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { EmpleadoModel } from '../Tablas/shared/acciones.model';


@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {
  empleado = new EmpleadoModel("","","","","","","")
  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.accionesService.loginEmpleado(this.empleado).subscribe(data=>  {
      if(data=='Bienvenido'){
        alert(data)
        this.router.navigate(['/inicio']);
      }else{
        alert(data)

      }
    })
  }
  entraradmin() {
    this.accionesService.loginEmpleado(this.empleado).subscribe(
      response => {
        alert("Inicio de sesión exitoso");
        sessionStorage.setItem("Nom_Empleado", this.empleado.Nom_empleado);
        this.empleado = new EmpleadoModel("", "", "", "", "", "", "");
        this.router.navigate(['/inicio']);
      },
      error => {
        console.error('Error al iniciar sesión:', error);
        alert("Error al iniciar sesión"); // Puedes mostrar un mensaje de error más descriptivo
      }
    );
  }

}

