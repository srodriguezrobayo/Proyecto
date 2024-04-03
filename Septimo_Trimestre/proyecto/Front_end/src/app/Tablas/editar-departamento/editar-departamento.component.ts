import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { DepartamentoModel } from '../shared/acciones.model';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent {

  id=''
  departamento = new DepartamentoModel("","")
  isLoggedIn: boolean = false;

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    const nombreaid = this.accionesService.obtenernombreadmin();
    this.isLoggedIn = nombreaid !== null;
    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion']);
    } 

    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerdepartamentoid(this.id).subscribe(data =>{
        this.departamento = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    if(this.departamento.idDepartamento){
      this.accionesService.actualizardepartamento(this.departamento).subscribe(data => {
        alert (data)
        this.router.navigate(['/departamento'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregardepartamento(this.departamento).subscribe(data => {
        alert(data)
        this.router.navigate(['/departamento'])
      })
    }
  }

}
