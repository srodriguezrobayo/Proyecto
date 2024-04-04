-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: copy
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciudad` (
  `id_Ciudad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ciudad` varchar(100) NOT NULL,
  `Departamento_idDepartamento` int(11) NOT NULL,
  PRIMARY KEY (`id_Ciudad`),
  KEY `FK_Ciudad_Departamento` (`Departamento_idDepartamento`),
  CONSTRAINT `FK_Ciudad_Departamento` FOREIGN KEY (`Departamento_idDepartamento`) REFERENCES `departamento` (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,'Barranquilla',2),(2,'Santo Tomas',2),(3,'Soledad',2),(4,'Cartagena',4),(5,'Santa Rosa',4),(6,'Turbaco',4),(7,'Medellin',3),(8,'La Estrella',3),(9,'Bello',3),(10,'Bogota',1),(11,'Facatativa',1),(12,'Fusagasuga',1),(13,'Santa Marta',5),(14,'El Pinon',5),(15,'Santa Ana',5);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  CONSTRAINT `FK_Cliente_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`),
  CONSTRAINT `FK_Cliente_Genero` FOREIGN KEY (`Genero_idGenero`) REFERENCES `genero` (`idGenero`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Juan123','juan123@gmail.com','202cb962ac59075b964b07152d234b70',2147483647,2,10),(2,'Jair987','jair987@gmail.com','9996535e07258a7bbfd8b132435c5962',2147483647,2,11),(3,'Sergio159','Sergio159@gmail.com','7bccfde7714a1ebadf06c5f4cea752c1',2147483647,2,15),(4,'Carlos364','Carlos364@gmail.com','a9eb812238f753132652ae09963a05e9',2147483647,2,13);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(100) NOT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'Cundinamarca'),(2,'Atlantico'),(3,'Antioquia'),(4,'Bolivar'),(5,'Magdalena');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  CONSTRAINT `FK_Empleados_Genero` FOREIGN KEY (`Genero_idGenero`) REFERENCES `genero` (`idGenero`),
  CONSTRAINT `FK_Empleados_TipoUsuario` FOREIGN KEY (`Tipo_usuario_idTipo_usuario`) REFERENCES `tipo_usuario` (`idTipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (55,'Jeiron Martinez','JeironMar@reservesho','68053af2923e00204c3ca7c6a3150cf7',20,7216894,2),(74,'Jair Carrillo','JairCar@reserveshoot','202cb962ac59075b964b07152d234b70',10,310816573,2),(79,'Sneyder Vergel','SneyderVer@reservesh','221a341a0781382a99c82033a86d16cd',20,7808944,2),(82,'Juan','J@reserveshoot.com','202cb962ac59075b964b07152d234b70',10,322,1),(92,'Sergio Rodriguez','SergioRod@reservesho','250cf8b51c773f3f8dc8b4be867a9a02',10,2147483647,2),(100,'Daniel Rodriguez','DanielRod@reservesho','cdd773039f5b1a8f41949a1fccd0768f',20,7797833,2);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=97556742 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (15227895,'Arturo Calle','arturocalle@gmail.co','e40f01afbb1b9ae3dd6747ced5bca532',2147483647,2),(15227896,'Teleperformance','teleperformance@gmai','25f9e794323b453885f5181f1b624d0b',2147483647,10),(15227898,'Davivienda','davivienda@gmail.com','27f0e8323044110a5338ad46688ca22f',2147483647,14),(24645485,'Muncher','muncher@gmail.com','6ebe76c9fb411be97b3b0d48b791a7c9',2147483647,3),(55475457,'Éxito','exito@gmail.com','d1b2cc725d846f0460ff290c60925070',2147483647,7),(57745875,'Sistemas en Línea','sistemaslinea@gmail.','9fab6755cd2e8817d3e73b0978ca54a6',2147483647,8),(87877448,'Alqueria','alqueria@gmail.com','6484b5384545da828e876b0624422e49',323698765,6),(97556741,'Postobon','postobon@gmail.com','b64f1a77b1b317d347f5cb79332c86d2',306987456,13);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genero` (
  `idGenero` int(11) NOT NULL AUTO_INCREMENT,
  `Desc_genero` varchar(20) NOT NULL,
  PRIMARY KEY (`idGenero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
INSERT INTO `genero` VALUES (1,'Femenino'),(2,'Masculino'),(3,'Otro');
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugar_reservacion`
--

DROP TABLE IF EXISTS `lugar_reservacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lugar_reservacion` (
  `ID_lugreserv` int(11) NOT NULL AUTO_INCREMENT,
  `Direccion_lugarreserv` varchar(1000) NOT NULL,
  `Nom_lugreserv` varchar(20) NOT NULL,
  `Ciudad_id_Ciudad` int(11) NOT NULL,
  PRIMARY KEY (`ID_lugreserv`),
  KEY `FK_LugarReservacion_Ciudad` (`Ciudad_id_Ciudad`),
  CONSTRAINT `FK_LugarReservacion_Ciudad` FOREIGN KEY (`Ciudad_id_Ciudad`) REFERENCES `ciudad` (`id_Ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugar_reservacion`
--

LOCK TABLES `lugar_reservacion` WRITE;
/*!40000 ALTER TABLE `lugar_reservacion` DISABLE KEYS */;
INSERT INTO `lugar_reservacion` VALUES (1,'Avenida 52g -58','Hotel Tequendama',10),(2,'Avenida 567 Norte # 12-34','Hotel El Campin',13),(3,'Avenida 765 Sur # 34-56','Hotel Royale',8),(4,'Avenida 789 Sur # 12-34','Hotel Starfish',7),(5,'Calle 123 # 45-67','Hotel Whashington',6),(6,'Calle 43 36-48 sur','Salon Comunal Bosa',1),(7,'Calle 987 Este # 34-56','Salon Comunal Florid',2),(8,'carrera 10 59-41','Hotel Jeferson',12),(9,'Carrera 45 dig 85','Hotel Vercetti',3),(10,'Carrera 456 # 78-90','Edificio Atrio',4),(11,'Carrera 54 85-39 norte','Hotel Eldorado',14),(12,'DG 48 D BIS SUR','Hotel Cosmos',9),(13,'Diagonal 098 # 67-89','SENA',15),(14,'Diagonal 321 # 56-78','Hotel Morrison',11);
/*!40000 ALTER TABLE `lugar_reservacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservacion`
--

DROP TABLE IF EXISTS `reservacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  CONSTRAINT `FK_Reservacion_Cliente` FOREIGN KEY (`Cliente_id_Cliente`) REFERENCES `cliente` (`id_Cliente`),
  CONSTRAINT `FK_Reservacion_Empleado` FOREIGN KEY (`Empleados_id_empleado`) REFERENCES `empleados` (`id_empleado`),
  CONSTRAINT `FK_Reservacion_Empresa` FOREIGN KEY (`Empresa_Nit_Empresa`) REFERENCES `empresa` (`Nit_Empresa`),
  CONSTRAINT `FK_Reservacion_LugarReservacion` FOREIGN KEY (`Lugar_reservacion_idLugar_reservacion`) REFERENCES `lugar_reservacion` (`ID_lugreserv`),
  CONSTRAINT `FK_Reservacion_Servicio` FOREIGN KEY (`Servicio_idServicio`) REFERENCES `servicio` (`idServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservacion`
--

LOCK TABLES `reservacion` WRITE;
/*!40000 ALTER TABLE `reservacion` DISABLE KEYS */;
INSERT INTO `reservacion` VALUES (10,5,'2023-07-20','18:00:00',1,15227896,1,200000,55),(20,6,'2023-07-15','20:00:00',2,15227898,2,500000,74),(30,7,'2023-07-10','17:00:00',3,55475457,3,400000,79),(40,8,'2023-07-19','00:00:00',4,87877448,4,1000000,92);
/*!40000 ALTER TABLE `reservacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio` (
  `idServicio` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_servicio` varchar(20) NOT NULL,
  PRIMARY KEY (`idServicio`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
INSERT INTO `servicio` VALUES (5,'Bodas'),(6,'Deportiva'),(7,'Fiestas'),(8,'Concierto'),(9,'Comida'),(10,'Eventos');
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_usuario` (
  `idTipo_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_t_usuario` varchar(20) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`idTipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES (10,'admin',1),(20,'empleado',1);
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-13 13:35:47
