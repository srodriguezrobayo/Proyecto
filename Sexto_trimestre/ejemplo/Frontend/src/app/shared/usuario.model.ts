export class UsuarioModel{

    constructor(
        public Id:string,
        public Nombre:string,
        public Correo_electronico: string,
        public Password_usuario: string
    ){}
}

export class ComeLibrosModel {

    constructor (
        public Id_comelibros:string,
        public Nom_comelibros:string,
        public CorreoElec_comelibros:string,
        public Password_comelibros: string
    ){}

}
export interface Usuario {
    Nombre: string;
    Correo_electronico: string;
    Password_usuario: string;
  }
  
  export interface Administrador {
    Nom_comelibros: string;
    CorreoElec_comelibros: string;
    Password_comelibros: string;
  }
  
export class ComentarioModel{

    constructor(
        public Id_comentario: string,
        public Desc_comentario: string
    ){}

}

export class InfoModel{

    constructor (
        public Id_info: string,
        public tipo_comentario: string,
        public escritura: string,
        public Id_usuario: string,
        public Id_comelibros: string
    ){}

}