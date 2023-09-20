CREATE DATABASE project;
USE project;


CREATE TABLE `genero` (
  `idGenero` int(11) NOT NULL AUTO_INCREMENT,
  `Desc_genero` varchar(20) NOT NULL,
  PRIMARY KEY (`idGenero`)
);

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(100) NOT NULL,
  PRIMARY KEY (`idDepartamento`)
);

CREATE TABLE `ciudad` (
  `id_Ciudad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ciudad` varchar(100) NOT NULL,
  `Departamento_idDepartamento` int(11) NOT NULL,
  PRIMARY KEY (`id_Ciudad`),
  KEY `FK_Ciudad_Departamento` (`Departamento_idDepartamento`),
  CONSTRAINT `FK_Ciudad_Departamento` FOREIGN KEY (`Departamento_idDepartamento`) REFERENCES `departamento` (`idDepartamento`)
);

CREATE TABLE `tipo_usuario` (
  `idTipo_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_t_usuario` varchar(20) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`idTipo_usuario`)
);

CREATE TABLE `cliente` (
  `id_Cliente` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_cliente` varchar(20) NOT NULL,
  `Correoelectronico_cliente` varchar(20) NOT NULL,
  `Password_cliente` varchar(80) NOT NULL,
  `Telefono_cliente` int(11) DEFAULT NULL,
  `Genero_idGenero` int(11) DEFAULT NULL,
  `Ciudad_id_Ciudad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_Cliente`),
  KEY `FK_Cliente_Genero` (`Genero_idGenero`),
  KEY `FK_Cliente_Ciudad` (`Ciudad_id_Ciudad`),
  CONSTRAINT `FK_Cliente_Genero` FOREIGN KEY (`Genero_idGenero`) REFERENCES `genero` (`idGenero`),
  CONSTRAINT `FK_Cliente_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`)
);

CREATE TABLE `empresa` (
  `Nit_Empresa` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_empresa` varchar(20) NOT NULL,
  `Correoelectronico_empresa` varchar(20) NOT NULL,
  `Password_empresa` varchar(100) NOT NULL,
  `Telefono_empresa` int(11) DEFAULT NULL,
  `Ciudad_id_Ciudad` int(11) DEFAULT NULL,
  PRIMARY KEY (`Nit_Empresa`),
  KEY `FK_Empresa_Ciudad` (`Ciudad_id_Ciudad`),
  CONSTRAINT `FK_Empresa_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`)
);

CREATE TABLE `lugar_reservacion` (
  `ID_lugreserv` int(11) NOT NULL AUTO_INCREMENT,
  `Direccion_lugarreserv` varchar(1000) NOT NULL,
  `Nom_lugreserv` varchar(20) NOT NULL,
  `Ciudad_id_Ciudad` int(11) NOT NULL,
  PRIMARY KEY (`ID_lugreserv`),
  KEY `FK_LugarReservacion_Ciudad` (`Ciudad_id_Ciudad`),
  CONSTRAINT `FK_LugarReservacion_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`)
);

CREATE TABLE `servicio` (
  `idServicio` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_servicio` varchar(20) NOT NULL,
  PRIMARY KEY (`idServicio`)
);

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `Nom_empleado` varchar(20) NOT NULL,
  `Correo_elec_admin` varchar(20) NOT NULL,
  `Password_empleado` varchar(80) NOT NULL,
  `Tipo_usuario_idTipo_usuario` int(11) NOT NULL,
  `Telefono_empleado` int(11) DEFAULT NULL,
  `Genero_idGenero` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `FK_Empleados_TipoUsuario` (`Tipo_usuario_idTipo_usuario`),
  KEY `FK_Empleados_Genero` (`Genero_idGenero`),
  CONSTRAINT `FK_Empleados_TipoUsuario` FOREIGN KEY (`Tipo_usuario_idTipo_usuario`) REFERENCES `tipo_usuario` (`idTipo_usuario`),
  CONSTRAINT `FK_Empleados_Genero` FOREIGN KEY (`Genero_idGenero`) REFERENCES `genero` (`idGenero`)
);

CREATE TABLE `reservacion` (
  `Id_Reservacion` int(11) NOT NULL AUTO_INCREMENT,
  `Servicio_idServicio` int(11) NOT NULL,
  `Fecha_reservacion` date NOT NULL,
  `Hora_reservacion` time NOT NULL,
  `Lugar_reservacion_idLugar_reservacion` int(11) NOT NULL,
  `Empresa_Nit_Empresa` int(11) DEFAULT NULL,
  `Cliente_id_Cliente` int(11) DEFAULT NULL,
  `Valor` int(11) NOT NULL,
  `Empleados_id_empleado` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_Reservacion`),
  KEY `FK_Reservacion_Servicio` (`Servicio_idServicio`),
  KEY `FK_Reservacion_LugarReservacion` (`Lugar_reservacion_idLugar_reservacion`),
  KEY `FK_Reservacion_Empresa` (`Empresa_Nit_Empresa`),
  KEY `FK_Reservacion_Cliente` (`Cliente_id_Cliente`),
  KEY `FK_Reservacion_Empleado` (`Empleados_id_empleado`),
  CONSTRAINT `FK_Reservacion_Servicio` FOREIGN KEY (`Servicio_idServicio`) REFERENCES `servicio` (`idServicio`),
  CONSTRAINT `FK_Reservacion_LugarReservacion` FOREIGN KEY (`Lugar_reservacion_idLugar_reservacion`) REFERENCES `lugar_reservacion` (`ID_lugreserv`),
  CONSTRAINT `FK_Reservacion_Empresa` FOREIGN KEY (`Empresa_Nit_Empresa`) REFERENCES `empresa` (`Nit_Empresa`),
  CONSTRAINT `FK_Reservacion_Cliente` FOREIGN KEY (`Cliente_id_Cliente`) REFERENCES `cliente` (`id_Cliente`),
  CONSTRAINT `FK_Reservacion_Empleado` FOREIGN KEY (`Empleados_id_empleado`) REFERENCES `empleados` (`id_empleado`)
);

INSERT INTO `departamento` (`idDepartamento`, `nombre_departamento`) VALUES
(1, 'Cundinamarca'),
(2, 'Atlantico'),
(3, 'Antioquia'),
(4, 'Bolivar'),
(5, 'Magdalena');


INSERT INTO `ciudad` (`id_Ciudad`, `nombre_ciudad`, `Departamento_idDepartamento`) VALUES
(1, 'Barranquilla', 2),
(2, 'Santo Tomas', 2),
(3, 'Soledad', 2),
(4, 'Cartagena', 4),
(5, 'Santa Rosa', 4),
(6, 'Turbaco', 4),
(7, 'Medellin', 3),
(8, 'La Estrella', 3),
(9, 'Bello', 3),
(10, 'Bogota', 1),
(11, 'Facatativa', 1),
(12, 'Fusagasuga', 1),
(13, 'Santa Marta', 5),
(14, 'El Pinon', 5),
(15, 'Santa Ana', 5);

INSERT INTO `tipo_usuario` (`idTipo_usuario`, `Nombre_t_usuario`, `estado`) VALUES
(10, 'admin', 1),
(20, 'empleado', 1);

INSERT INTO `genero` (`idGenero`, `Desc_genero`) VALUES
(1, 'Femenino'),
(2, 'Masculino'),
(3, 'Otro');

INSERT INTO `cliente` (`id_Cliente`, `Nombre_cliente`, `Correoelectronico_cliente`, `Password_cliente`, `Telefono_cliente`, `Genero_idGenero`, `Ciudad_id_Ciudad`) VALUES
(1, 'Juan123', 'juan123@gmail.com', '202cb962ac59075b964b07152d234b70', 2147483647, 2, 10),
(2, 'Jair987', 'jair987@gmail.com', '9996535e07258a7bbfd8b132435c5962', 2147483647, 2, 11),
(3, 'Sergio159', 'Sergio159@gmail.com', '7bccfde7714a1ebadf06c5f4cea752c1', 2147483647, 2, 15),
(4, 'Carlos364', 'Carlos364@gmail.com', 'a9eb812238f753132652ae09963a05e9', 2147483647, 2, 13);


INSERT INTO `empleados` (`id_empleado`, `Nom_empleado`, `Correo_elec_admin`, `Password_empleado`, `Tipo_usuario_idTipo_usuario`, `Telefono_empleado`, `Genero_idGenero`) VALUES
(55, 'Jeiron Martinez', 'JeironMar@reservesho', '68053af2923e00204c3ca7c6a3150cf7', 20, 7216894, 2),
(74, 'Jair Carrillo', 'JairCar@reserveshoot', '202cb962ac59075b964b07152d234b70', 10, 310816573, 2),
(79, 'Sneyder Vergel', 'SneyderVer@reservesh', '221a341a0781382a99c82033a86d16cd', 20, 7808944, 2),
(92, 'Sergio Rodriguez', 'SergioRod@reservesho', '250cf8b51c773f3f8dc8b4be867a9a02', 10, 2147483647, 2),
(100, 'Daniel Rodriguez', 'DanielRod@reservesho', 'cdd773039f5b1a8f41949a1fccd0768f', 20, 7797833, 2);

INSERT INTO `empresa` (`Nit_Empresa`, `Nombre_empresa`, `Correoelectronico_empresa`, `Password_empresa`, `Telefono_empresa`, `Ciudad_id_Ciudad`) VALUES
(15227895, 'Arturo Calle', 'arturocalle@gmail.co', 'e40f01afbb1b9ae3dd6747ced5bca532', 2147483647, 2),
(15227896, 'Teleperformance', 'teleperformance@gmai', '25f9e794323b453885f5181f1b624d0b', 2147483647, 10),
(15227898, 'Davivienda', 'davivienda@gmail.com', '27f0e8323044110a5338ad46688ca22f', 2147483647, 14),
(24645485, 'Muncher', 'muncher@gmail.com', '6ebe76c9fb411be97b3b0d48b791a7c9', 2147483647, 3),
(55475457, 'Éxito', 'exito@gmail.com', 'd1b2cc725d846f0460ff290c60925070', 2147483647, 7),
(57745875, 'Sistemas en Línea', 'sistemaslinea@gmail.', '9fab6755cd2e8817d3e73b0978ca54a6', 2147483647, 8),
(87877448, 'Alqueria', 'alqueria@gmail.com', '6484b5384545da828e876b0624422e49', 323698765, 6),
(97556741, 'Postobon', 'postobon@gmail.com', 'b64f1a77b1b317d347f5cb79332c86d2', 306987456, 13);



INSERT INTO `lugar_reservacion` (`ID_lugreserv`, `Direccion_lugarreserv`, `Nom_lugreserv`, `Ciudad_id_Ciudad`) VALUES
(1, 'Avenida 52g -58', 'Hotel Tequendama', 10),
(2, 'Avenida 567 Norte # 12-34', 'Hotel El Campin', 13),
(3, 'Avenida 765 Sur # 34-56', 'Hotel Royale', 8),
(4, 'Avenida 789 Sur # 12-34', 'Hotel Starfish', 7),
(5, 'Calle 123 # 45-67', 'Hotel Whashington', 6),
(6, 'Calle 43 36-48 sur', 'Salon Comunal Bosa', 1),
(7, 'Calle 987 Este # 34-56', 'Salon Comunal Florid', 2),
(8, 'carrera 10 59-41', 'Hotel Jeferson', 12),
(9, 'Carrera 45 dig 85', 'Hotel Vercetti', 3),
(10, 'Carrera 456 # 78-90', 'Edificio Atrio', 4),
(11, 'Carrera 54 85-39 norte', 'Hotel Eldorado', 14),
(12, 'DG 48 D BIS SUR', 'Hotel Cosmos', 9),
(13, 'Diagonal 098 # 67-89', 'SENA', 15),
(14, 'Diagonal 321 # 56-78', 'Hotel Morrison', 11);

INSERT INTO `servicio` (`idServicio`, `Nombre_servicio`) VALUES
(5, 'Bodas'),
(6, 'Deportiva'),
(7, 'Fiestas'),
(8, 'Concierto'),
(9, 'Comida'),
(10, 'Eventos');

INSERT INTO `reservacion` (`Id_Reservacion`, `Servicio_idServicio`, `Fecha_reservacion`, `Hora_reservacion`, `Lugar_reservacion_idLugar_reservacion`, `Empresa_Nit_Empresa`, `Cliente_id_Cliente`, `Valor`, `Empleados_id_empleado`) VALUES
(10, 5, '2023-07-20', '18:00:00', 1, 15227896, 1, 200000, 55),
(20, 6, '2023-07-15', '20:00:00', 2, 15227898, 2, 500000, 74),
(30, 7, '2023-07-10', '17:00:00', 3, 55475457, 3, 400000, 79),
(40, 8, '2023-07-19', '00:00:00', 4, 87877448, 4, 1000000, 92);




