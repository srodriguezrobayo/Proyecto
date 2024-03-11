import { Component, OnInit } from '@angular/core';


import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { EmpresaModel } from '../Tablas/shared/acciones.model';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  empresa = new EmpresaModel("","","","","","","","")
  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {

  }

  onSubmit(){
    this.empresa.Password_empresa = (this.empresa.Password_empresa).toString();
    this.accionesService.agregarEmpresa(this.empresa).subscribe(data=>  {
      alert(data)
      this.router.navigate(['/inicio_sesion_empresa']);
    })
  }

}
