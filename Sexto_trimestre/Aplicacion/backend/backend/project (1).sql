create database projectm;
	use projectm;

CREATE TABLE `ciudad` (
  `id_Ciudad` int(11) NOT NULL,
  `nombre_ciudad` varchar(100) NOT NULL,
  `Departamento_idDepartamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudad`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_Cliente` int(11) NOT NULL,
  `Nombre_cliente` varchar(20) NOT NULL,
  `Correoelectronico_cliente` varchar(150) NOT NULL,
  `Password_cliente` varchar(80) NOT NULL,
  `Telefono_cliente` varchar(20) NOT NULL,
  `Genero_idGenero` int(11) DEFAULT NULL,
  `Ciudad_id_Ciudad` int(11) DEFAULT NULL,
  `TipoUsuario_idTipo_usuario` int(11) DEFAULT NULL,
  `Foto_cliente` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_Cliente`, `Nombre_cliente`, `Correoelectronico_cliente`, `Password_cliente`, `Telefono_cliente`, `Genero_idGenero`, `Ciudad_id_Ciudad`, `TipoUsuario_idTipo_usuario`, `Foto_cliente`) VALUES
(1, 'Juan123', 'juan123@gmail.com', '202cb962ac59075b964b07152d234b70', '2147483647', 2, 10, 30, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(2, 'Jair987', 'jair987@gmail.com', '9996535e07258a7bbfd8b132435c5962', '2147483647', 2, 11, 30, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(3, 'Sergio159', 'Sergio159@gmail.com', '7bccfde7714a1ebadf06c5f4cea752c1', '2147483647', 2, 15, 30, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(4, 'Carlos364', 'Carlos364@gmail.com', 'a9eb812238f753132652ae09963a05e9', '2147483647', 2, 13, 30, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(890, 'prueba', 'prueba@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '254356', 1, 10, 30, ''),
(9000, 'heiver', 'heiver@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '320', 2, 7, 30, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `nombre_departamento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `nombre_departamento`) VALUES
(1, 'Cundinamarca'),
(2, 'Atlantico'),
(3, 'Antioquia'),
(4, 'Bolivar'),
(5, 'Magdalena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL,
  `Nom_empleado` varchar(20) NOT NULL,
  `Correo_elec_admin` varchar(150) NOT NULL,
  `Password_empleado` varchar(80) NOT NULL,
  `Tipo_usuario_idTipo_usuario` int(11) NOT NULL,
  `Telefono_empleado` varchar(20) NOT NULL,
  `Genero_idGenero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `Nom_empleado`, `Correo_elec_admin`, `Password_empleado`, `Tipo_usuario_idTipo_usuario`, `Telefono_empleado`, `Genero_idGenero`) VALUES
(55, 'Jeiron Martinez', 'JeironMar@reservesho', '68053af2923e00204c3ca7c6a3150cf7', 20, '7216894', 2),
(74, 'Jair Carrillo', 'JairCar@reserveshoot', '202cb962ac59075b964b07152d234b70', 10, '310816573', 2),
(79, 'Sneyder Vergel', 'SneyderVer@reservesh', '221a341a0781382a99c82033a86d16cd', 20, '7808944', 2),
(92, 'Sergio Rodriguez', 'SergioRod@reservesho', '250cf8b51c773f3f8dc8b4be867a9a02', 10, '2147483647', 2),
(100, 'Daniel Rodriguez', 'DanielRod@reservesho', 'cdd773039f5b1a8f41949a1fccd0768f', 20, '7797833', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `Nit_Empresa` int(11) NOT NULL,
  `Nombre_empresa` varchar(20) NOT NULL,
  `Correoelectronico_empresa` varchar(150) NOT NULL,
  `Password_empresa` varchar(100) NOT NULL,
  `Desc_empresa` varchar(350) NOT NULL,
  `Telefono_empresa` varchar(20) NOT NULL,
  `Ciudad_id_Ciudad` int(11) DEFAULT NULL,
  `Foto_empresa` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`Nit_Empresa`, `Nombre_empresa`, `Correoelectronico_empresa`, `Password_empresa`, `Desc_empresa`, `Telefono_empresa`, `Ciudad_id_Ciudad`, `Foto_empresa`) VALUES
(890, 'ford', 'ford@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '', '36455', 4, ''),
(1890, 'copia', 'copia@gmail.com', '123456', 'empresa d eprueba perro', '5432', 10, 'no hay xd'),
(15227895, 'Arturo Calle', 'arturocalle@gmail.co', 'e40f01afbb1b9ae3dd6747ced5bca532', 'Descripcion de la empresa', '2147483647', 2, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(15227896, 'Teleperformance', 'teleperformance@gmai', '25f9e794323b453885f5181f1b624d0b', 'Descripcion de la empresa', '2147483647', 10, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(15227898, 'Davivienda', 'davivienda@gmail.com', '27f0e8323044110a5338ad46688ca22f', 'Descripcion de la empresa', '2147483647', 14, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(24645485, 'Muncher', 'muncher@gmail.com', '6ebe76c9fb411be97b3b0d48b791a7c9', 'Descripcion de la empresa', '2147483647', 3, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(55475457, 'Éxito', 'exito@gmail.com', 'd1b2cc725d846f0460ff290c60925070', 'Descripcion de la empresa', '2147483647', 7, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(57745875, 'Sistemas en Línea', 'sistemaslinea@gmail.', '9fab6755cd2e8817d3e73b0978ca54a6', 'Descripcion de la empresa', '2147483647', 8, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(87877448, 'Alqueria', 'alqueria@gmail.com', '6484b5384545da828e876b0624422e49', 'Descripcion de la empresa', '323698765', 6, 'https://i.imgur.com/lBkW4Wa.jpeg'),
(97556741, 'Postobon', 'postobon@gmail.com', 'b64f1a77b1b317d347f5cb79332c86d2', 'Descripcion de la empresa', '306987456', 13, 'https://i.imgur.com/lBkW4Wa.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `idGenero` int(11) NOT NULL,
  `Desc_genero` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`idGenero`, `Desc_genero`) VALUES
(1, 'Femenino'),
(2, 'Masculino'),
(3, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugar_reservacion`
--

CREATE TABLE `lugar_reservacion` (
  `ID_lugreserv` int(11) NOT NULL,
  `Direccion_lugarreserv` varchar(1000) NOT NULL,
  `Nom_lugreserv` varchar(20) NOT NULL,
  `Ciudad_id_Ciudad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lugar_reservacion`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservacion`
--

CREATE TABLE `reservacion` (
  `Id_Reservacion` int(11) NOT NULL,
  `Servicio_idServicio` int(11) NOT NULL,
  `Fecha_reservacion` date NOT NULL,
  `Hora_reservacion` time NOT NULL,
  `Lugar_reservacion_idLugar_reservacion` int(11) NOT NULL,
  `Empresa_Nit_Empresa` int(11) DEFAULT NULL,
  `Cliente_id_Cliente` int(11) DEFAULT NULL,
  `Valor` varchar(50) NOT NULL,
  `Empleados_id_empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservacion`
--

INSERT INTO `reservacion` (`Id_Reservacion`, `Servicio_idServicio`, `Fecha_reservacion`, `Hora_reservacion`, `Lugar_reservacion_idLugar_reservacion`, `Empresa_Nit_Empresa`, `Cliente_id_Cliente`, `Valor`, `Empleados_id_empleado`) VALUES
(10, 5, '2023-07-20', '18:00:00', 1, 15227896, 1, '200000', 55),
(20, 6, '2023-07-15', '20:00:00', 2, 15227898, 2, '500000', 74),
(30, 7, '2023-07-10', '17:00:00', 3, 55475457, 3, '400000', 79),
(40, 8, '2023-07-19', '00:00:00', 4, 87877448, 4, '1000000', 92),
(41, 5, '2023-10-18', '15:38:00', 7, 1890, 890, '15000', 79),
(42, 8, '2023-11-09', '18:23:00', 11, 15227896, 890, '20000', 55),
(43, 8, '2023-11-09', '18:23:00', 11, 1890, 890, '20000', 55),
(44, 8, '2023-10-28', '18:24:00', 13, 1890, 890, '25000', 79);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `idServicio` int(11) NOT NULL,
  `Nombre_servicio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`idServicio`, `Nombre_servicio`) VALUES
(5, 'Bodas'),
(6, 'Deportiva'),
(7, 'Fiestas'),
(8, 'Concierto'),
(9, 'Comida'),
(10, 'Eventos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `idTipo_usuario` int(11) NOT NULL,
  `Nombre_t_usuario` varchar(20) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipo_usuario`, `Nombre_t_usuario`, `estado`) VALUES
(10, 'admin', 1),
(20, 'empleado', 1),
(30, 'cliente', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id_Ciudad`),
  ADD KEY `FK_Ciudad_Departamento` (`Departamento_idDepartamento`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_Cliente`),
  ADD KEY `FK_Cliente_Genero` (`Genero_idGenero`),
  ADD KEY `FK_Cliente_Ciudad` (`Ciudad_id_Ciudad`),
  ADD KEY `FK_Cliente_TipoUsuario` (`TipoUsuario_idTipo_usuario`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `FK_Empleados_TipoUsuario` (`Tipo_usuario_idTipo_usuario`),
  ADD KEY `FK_Empleados_Genero` (`Genero_idGenero`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`Nit_Empresa`),
  ADD KEY `FK_Empresa_Ciudad` (`Ciudad_id_Ciudad`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`idGenero`);

--
-- Indices de la tabla `lugar_reservacion`
--
ALTER TABLE `lugar_reservacion`
  ADD PRIMARY KEY (`ID_lugreserv`),
  ADD KEY `FK_LugarReservacion_Ciudad` (`Ciudad_id_Ciudad`);

--
-- Indices de la tabla `reservacion`
--
ALTER TABLE `reservacion`
  ADD PRIMARY KEY (`Id_Reservacion`),
  ADD KEY `FK_Reservacion_Servicio` (`Servicio_idServicio`),
  ADD KEY `FK_Reservacion_LugarReservacion` (`Lugar_reservacion_idLugar_reservacion`),
  ADD KEY `FK_Reservacion_Empresa` (`Empresa_Nit_Empresa`),
  ADD KEY `FK_Reservacion_Cliente` (`Cliente_id_Cliente`),
  ADD KEY `FK_Reservacion_Empleado` (`Empleados_id_empleado`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`idServicio`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`idTipo_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id_Ciudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_Cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9001;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `Nit_Empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97556742;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `idGenero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `lugar_reservacion`
--
ALTER TABLE `lugar_reservacion`
  MODIFY `ID_lugreserv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `reservacion`
--
ALTER TABLE `reservacion`
  MODIFY `Id_Reservacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `idServicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idTipo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD CONSTRAINT `FK_Ciudad_Departamento` FOREIGN KEY (`Departamento_idDepartamento`) REFERENCES `departamento` (`idDepartamento`);

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `FK_Cliente_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`),
  ADD CONSTRAINT `FK_Cliente_Genero` FOREIGN KEY (`Genero_idGenero`) REFERENCES `genero` (`idGenero`),
  ADD CONSTRAINT `FK_Cliente_TipoUsuario` FOREIGN KEY (`TipoUsuario_idTipo_usuario`) REFERENCES `tipo_usuario` (`idTipo_usuario`);

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `FK_Empleados_Genero` FOREIGN KEY (`Genero_idGenero`) REFERENCES `genero` (`idGenero`),
  ADD CONSTRAINT `FK_Empleados_TipoUsuario` FOREIGN KEY (`Tipo_usuario_idTipo_usuario`) REFERENCES `tipo_usuario` (`idTipo_usuario`);

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `FK_Empresa_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`);

--
-- Filtros para la tabla `lugar_reservacion`
--
ALTER TABLE `lugar_reservacion`
  ADD CONSTRAINT `FK_LugarReservacion_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`);

--
-- Filtros para la tabla `reservacion`
--
ALTER TABLE `reservacion`
  ADD CONSTRAINT `FK_Reservacion_Cliente` FOREIGN KEY (`Cliente_id_Cliente`) REFERENCES `cliente` (`id_Cliente`),
  ADD CONSTRAINT `FK_Reservacion_Empleado` FOREIGN KEY (`Empleados_id_empleado`) REFERENCES `empleados` (`id_empleado`),
  ADD CONSTRAINT `FK_Reservacion_Empresa` FOREIGN KEY (`Empresa_Nit_Empresa`) REFERENCES `empresa` (`Nit_Empresa`),
  ADD CONSTRAINT `FK_Reservacion_LugarReservacion` FOREIGN KEY (`Lugar_reservacion_idLugar_reservacion`) REFERENCES `lugar_reservacion` (`ID_lugreserv`),
  ADD CONSTRAINT `FK_Reservacion_Servicio` FOREIGN KEY (`Servicio_idServicio`) REFERENCES `servicio` (`idServicio`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
