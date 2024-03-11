import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaModel } from '../Tablas/shared/acciones.model';
import { MD5 } from 'crypto-js';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-perfil-empresa',
  templateUrl: './editar-perfil-empresa.component.html',
  styleUrls: ['./editar-perfil-empresa.component.css']
})
export class EditarPerfilEmpresaComponent implements OnInit {
  id='';
  empresa = new EmpresaModel ("","","","","","","","")

  constructor(
    private accionesService : AccionesService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerempresaeidu(this.id).subscribe(data => {
        this.empresa = data[0]
      },error =>{
        console.log(error)
      })
    }
  }
  onSubmit(){
    console.log('OnSubmit');
    this.empresa.Password_empresa = MD5(this.empresa.Password_empresa).toString();
    if(this.empresa.Nit_Empresa){
      this.accionesService.actualizarempresau (this.empresa).subscribe(data => {
       alert (data)
      this.router.navigate(['/perfil_empresa'])
   })
   }
  }

}
