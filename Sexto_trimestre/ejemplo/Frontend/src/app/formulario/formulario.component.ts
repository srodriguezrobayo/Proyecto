import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel,InfoModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  subirInfo: InfoModel = new InfoModel ('','','','','');
  isLoggedIn: boolean = false;
  constructor (private infoService : UsuarioService, private router: Router){}
  
  ngOnInit() {
    const correoaid = this.infoService.obtenercorreo();
    this.isLoggedIn = correoaid !== null;

    if (!this.isLoggedIn) {
      console.error('No se encontró un usuario');
      alert('No se encontró un usuario, Inicia sesión nuevamente.');
      this.router.navigate(['/login']);
    }
  }
  
  nuevaInfo() {
    const correoaid = this.infoService.obtenercorreo();
    if (correoaid !== null) {
      
      this.subirInfo.Id_usuario = correoaid

      if (this.subirInfo.tipo_comentario === '1'){
        this.subirInfo.Id_comelibros ='2'
      }else if (this.subirInfo.tipo_comentario === '2'){
        this.subirInfo.Id_comelibros = '1'
      }

      this.infoService.regitroinfo(this.subirInfo).subscribe(
        response => {
          console.log('Info subida',response)
          alert ('info Subida')
          this.subirInfo = new InfoModel ('','','','','');
          this.router.navigate(['/inicio'])
        },
        error => {
          console.error('Error al subir info',error)
          alert ('Error al subir info')
        }
      );
    }
  }

}
