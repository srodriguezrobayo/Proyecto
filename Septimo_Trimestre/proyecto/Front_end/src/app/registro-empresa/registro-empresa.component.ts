import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { EmpresaModel, CiudadModel } from '../Tablas/shared/acciones.model';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {
  empresa = new EmpresaModel("", "", "", "", "", "", "", "");
  ciudades: CiudadModel[] = [];

  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCiudades();
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

  correoValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  onSubmit() {
    if (!this.correoValido(this.empresa.Correoelectronico_empresa)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (this.empresa.Password_empresa.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    this.empresa.Password_empresa = this.empresa.Password_empresa.toString();
    this.accionesService.agregarEmpresa(this.empresa).subscribe(
      (data: any) => {
        if (data.message === 'La empresa ya está registrada') {
          alert('La empresa ya está registrada');
        } else {
          alert(data);
          this.router.navigate(['/inicio_sesion_empresa']);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Error al registrar la empresa. Por favor, inténtalo de nuevo.');
      }
    );
  }
}
