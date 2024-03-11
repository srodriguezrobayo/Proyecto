import { Component, OnInit } from '@angular/core';
import { ReservaModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reserva = new ReservaModel("","","","","","","","")
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }


  onSubmit(){
    this.usuarioService.agendar(this.reserva).subscribe(data=>  {
      alert(data)
    })
  }

}
