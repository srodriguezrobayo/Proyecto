import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteModel } from '../Tablas/shared/acciones.model';
import { MD5 } from 'crypto-js';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.css']
})
export class EditarPerfilUsuarioComponent implements OnInit{
   imagen = "";
   id='';
   cliente = new ClienteModel ("","","","","","","","")

   constructor(
     private accionesService : AccionesService,
     private route : ActivatedRoute,
     private router : Router
   ){}

   ngOnInit(){
     this.id = this.route.snapshot.params ['id']
     if (this.id){
       console.log('EDITAR');
       this.accionesService.obtenerclienteidu(this.id).subscribe(data => {
         this.cliente = data[0]
       },error =>{
         console.log(error)
       })
     }
   }

   selectImage(event: any) {
    const file = event.target.files[0];
    this.imagen = file;
  }

   onSubmit(){
    let form = new FormData();
    form.append('file',this.imagen);
     console.log('OnSubmit');
     this.cliente.Password_cliente = MD5(this.cliente.Password_cliente).toString();
     if(this.cliente.id_Cliente){
       this.accionesService.actualizarclienteu (this.cliente).subscribe(data => {
        alert (data)
       this.router.navigate(['/perfil_cliente'])
    })
    }
   }

}

