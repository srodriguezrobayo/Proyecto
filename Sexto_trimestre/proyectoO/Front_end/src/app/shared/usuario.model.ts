export class UsuarioModel {
    constructor(
      public Cliente_id_Cliente: string,
      public Nombre_cliente: string,
      public Correoelectronico_cliente: string,
      public Password_cliente: string,
      public Telefono_cliente: string,
      public Genero_idGenero: string,
      public Ciudad_id_Ciudad: string

    )  { }
  }

export class EmpresaModel {
    constructor(
      public Nit_Empresa: string,
      public Nombre_empresa: string,
      public Correoelectronico_empresa: string,
      public Password_empresa: string,
      public Telefono_empresa: string,
      public Ciudad_id_Ciudad: string
    )  { }
}


export class ReservaModel {
    constructor(
      public Servicio_idServicio: string,
      public Fecha_reservacion: string,
      public Hora_reservacion: string,
      public Lugar_reservacion_idLugar_reservacion: string,
      public Empresa_Nit_Empresa: string,
      public Cliente_N_Documento: string,
      public Valor: string,
      public Empleados_id_empleado: string
    )  { }
}

