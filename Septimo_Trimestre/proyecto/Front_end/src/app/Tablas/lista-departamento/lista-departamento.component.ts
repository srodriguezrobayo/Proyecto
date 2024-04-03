import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartamentoModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styleUrls: ['./lista-departamento.component.css']
})
export class ListaDepartamentoComponent implements OnInit{

  departamento: Observable<DepartamentoModel[]> | undefined
  isLoggedIn: boolean = false;

  constructor (private router: Router,private accionesService: AccionesService){}

  ngOnInit() {
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 

    this.departamento = this.accionesService.obtenerdepartamento();
  }

  borrarDepartamento (id: string){
    this.accionesService.borrardepartamento(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
