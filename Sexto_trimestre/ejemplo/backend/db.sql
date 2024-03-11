CREATE DATABASE ejemplo;
    USE ejemplo;

CREATE TABLE usuario(
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Correo_electronico VARCHAR(100) NOT NULL,
    Password_usuario VARCHAR(100) NOT NULL
);

CREATE TABLE comentario(
    Id_comentario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Desc_comentario VARCHAR(100) NOT NULL
);

CREATE TABLE Come_Libros(
    Id_comelibros INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nom_comelibros VARCHAR(100) NOT NULL,
    CorreoElec_comelibros VARCHAR(100) NOT NULL,
    Password_comelibros VARCHAR(100) NOT NULL
);

CREATE TABLE info(
    Id_info INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_comentario INT NOT NULL,
    escritura VARCHAR(100) NOT NULL,
    Id_usuario INT NOT NULL,
    Id_comelibros INT NOT NULL,
    FOREIGN KEY (tipo_comentario) REFERENCES comentario (Id_comentario),
    FOREIGN KEY (Id_usuario) REFERENCES usuario(Id),
    FOREIGN KEY (Id_comelibros) REFERENCES Come_Libros(Id_comelibros)
);

INSERT INTO usuario (Nombre, Correo_electronico, Password_usuario) VALUES ('123','123@correo.com', md5('123'));

INSERT INTO comentario (Desc_comentario) VALUES ('XD');

INSERT INTO comentario (Desc_comentario) VALUES ('LOL');

INSERT INTO Come_Libros (Nom_comelibros, CorreoElec_comelibros, Password_comelibros) VALUES ('Arturo','artur@correo.com',md5('123'));

INSERT INTO Come_Libros (Nom_comelibros, CorreoElec_comelibros, Password_comelibros) VALUES ('Luis','Luis@correo.com',md5('123'));