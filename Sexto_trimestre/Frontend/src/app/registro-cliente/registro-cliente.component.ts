import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent {
  usuario = new ClienteModel("","","","","","","","")
  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.usuario.Password_cliente = (this.usuario.Password_cliente).toString();
    this.accionesService.agregarUsuario(this.usuario).subscribe(data=>  {
      alert(data)
      this.router.navigate(['/inicio_sesion']);
    })
  }


}
