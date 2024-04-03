import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaModel, CiudadModel } from '../Tablas/shared/acciones.model';
// import { MD5 } from 'crypto-js';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-perfil-empresa',
  templateUrl: './editar-perfil-empresa.component.html',
  styleUrls: ['./editar-perfil-empresa.component.css']
})
export class EditarPerfilEmpresaComponent implements OnInit {
  imagen="";
  id='';
  empresa = new EmpresaModel ("","","","","","","","");
  ciudades: CiudadModel[] = [];
  isLoggedIn: boolean = false; 

  constructor(
    private accionesService : AccionesService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit():void{
    const nitaid = this.accionesService.obtenerCorreo();
    this.isLoggedIn = nitaid !== null;
    if (!this.isLoggedIn){
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario. Inicia sesión nuevamente.');
      this.router.navigate(['/inicio_sesion_empresa']);
    }
    this.obtenerCiudades();
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
  obtenerCiudades() {
    this.accionesService.obtenerciudad().subscribe(
      (data: CiudadModel[]) => {
        this.ciudades = data;
      },
      error => {
        console.log('Error al obtener las ciudades:', error);
      }
    );
  }

  selectImage(event: any){
    const file = event.target.files[0];
    this.imagen = file;
  }

  condicionesValidas(condiciones: string): boolean {
    const palabrasInapropiadas = ['Hijueputa', 'Hijoputa', 'hpta', 'hijueputa', 'hijoputa', 'Hpta', 'HPTA', 'Mierda', 'mierda','puto','puta','Puta','Puto','Malparido','Malparido','Treintahijueputa','treintahijueputa','Triplehijueputa','triplehijueputa','Setentahijueputa','setentahijueputa','Hijo de la gran puta','hijo de la gran puta','Gonorrea','gonorrea'];
    for (let palabra of palabrasInapropiadas) {
        if (condiciones.toLowerCase().includes(palabra.toLowerCase())) {
            return false;
        }
    }
    return true;
  }

  onSubmit(){
    let formd = new FormData();
    formd.append('file',this.imagen);
    this.accionesService.AgregarImagen(formd).subscribe(data => {
      if (data == "No hay archivos"){
        alert(data)
      }else{
        this.empresa.Foto_empresa = data
      }
    })
    console.log('OnSubmit');
    // this.empresa.Password_empresa = MD5(this.empresa.Password_empresa).toString();
    if(this.empresa.Nit_Empresa){
      this.accionesService.actualizarempresau (this.empresa).subscribe(data2 => {
       alert (data2)
      this.router.navigate(['/perfil_empresa'])
   })
   }
  }

}
