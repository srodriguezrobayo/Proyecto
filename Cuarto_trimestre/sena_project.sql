create database sena_project;
	use sena_project;

create table tipo_usuario
(
idTipo_usuario integer not null,
Nombre_t_usuario varchar(20) not null,
estado boolean not null,
primary key(idTipo_usuario)
);

create table empleados
(
id_empleado int not null,
Nom_empleado varchar(20) not null,
Correo_elec_admin varchar(20) not null,
Password_empleado varchar(20) not null,
Tipo_usuario_idTipo_usuario int not null,
Telefono_empleado int null,
Genero_idGenero varchar(20) null,
primary key(id_empleado)
);

create table genero
(
idGenero varchar(2) not null,
Desc_genero varchar(20) not null,
primary key(idGenero)
);

create table departamento
(
idDepartamento varchar(20) not null,
primary key(idDepartamento)
);

create table ciudad
(
id_Ciudad varchar(20) not null,
Departamento_idDepartamento varchar(20) not null,
primary key(id_Ciudad)
);

create table empresa
(
Nit_Empresa integer not null,
Nombre_empresa varchar(20) not null,
Correoelectronico_empresa varchar(20) not null,
Password_empresa varchar(20) not null,
Telefono_empresa integer null,
Ciudad_id_Ciudad varchar(20) null,
primary key(Nit_Empresa)
);

create table cliente
(
id_Cliente integer  auto_increment not null,
Nombre_cliente varchar(20) not null,
Correoelectronico_cliente varchar(20) not null,
Password_cliente varchar(20) not null,
Telefono_cliente integer null,
Genero_idGenero varchar(2)  null,
Ciudad_id_Ciudad varchar(20) null,
primary key(id_Cliente)
);

create table lugar_reservacion
(
idLugar_reservacion integer not null,
Nom_lugreserv varchar(20) not null,
Direccion_lugreserv varchar(20) not null,
Ciudad_id_Ciudad varchar(20) not null,
primary key(idLugar_reservacion)
);

create table servicio
(
idServicio integer not null,
Nombre_servicio varchar(20) not null,
primary key(idServicio)
);

create table reservacion
(
Id_Reservacion integer auto_increment not null,
Servicio_idServicio integer not null,
Fecha_reservacion date not null,
Hora_reservacion time not null,
Lugar_reservacion_idLugar_reservacion integer not null,
Empresa_Nit_Empresa integer  null,
Cliente_id_Cliente integer  null,
Valor integer not null,
Empleados_id_empleado integer  null,
primary key(Id_Reservacion)
);

alter table empleados
add foreign key(Tipo_usuario_idTipo_usuario)
references tipo_usuario(idTipo_usuario);

alter table empleados
add foreign key(Genero_idGenero)
references genero(idGenero);

alter table ciudad
add foreign key(Departamento_idDepartamento)
references departamento(idDepartamento);

alter table empresa
add foreign key(Ciudad_id_Ciudad)
references ciudad(id_Ciudad);

alter table cliente
add foreign key(Genero_idGenero)
references genero(idGenero);

alter table cliente
add foreign key(Ciudad_id_Ciudad)
references ciudad(id_Ciudad);


alter table lugar_reservacion
add foreign key(Ciudad_id_Ciudad)
references ciudad(id_Ciudad);

alter table reservacion
add foreign key(Servicio_idServicio)
references servicio(idServicio);

alter table reservacion
add foreign key(Lugar_reservacion_idLugar_reservacion)
references lugar_reservacion(idLugar_reservacion);

alter table reservacion
add foreign key(Empresa_Nit_Empresa)
references empresa(Nit_Empresa);

alter table reservacion
add foreign key(Cliente_id_Cliente)
references cliente(id_Cliente);

alter table reservacion
add foreign key(Empleados_id_empleado)
references empleados(id_empleado);

insert into tipo_usuario
	values (10,'admin',1);

insert into tipo_usuario
	values (20,'empleado',1);

select * from tipo_usuario;

insert into servicio
	values (05,'Bodas');

insert into servicio
	values (06,'Deportiva');

insert into servicio
	values (07,'Fiestas');

insert into servicio
	values(08,'Concierto');

insert into servicio
	values(09,'Comida');

insert into servicio
	values (10,'Eventos');

select * from servicio;

insert into departamento
	values 	
		("Cundinamarca"),
		  ("Atlantico"),
		  ("Antioquia"),
		  ("Bolivar"),
		  ("Magdalena");

select * from departamento;

insert into ciudad
	values
			("Barranquilla",'Atlantico'),
		  ("santo tomas",'Atlantico'),
		  ("soledad",'Atlantico'),
		  ("cartagena","Bolivar"),
		  ("santa rosa","Bolivar"),
		  ("Turbaco","Bolivar"),
		  ("Medellin","Antioquia"),
		  ("La estrella","Antioquia"),
		  ("Bello","Antioquia"),
		  ("Bogota","Cundinamarca"),
		  ("Facatativa","Cundinamarca"),
		  ("Funsagasuga","Cundinamarca"),
		  ("Santa marta","Magdalena"),
		  ("El pinon","Magdalena"),
		  ("Santa Ana","Magdalena");

select * from ciudad;

insert into genero
values 
	('F','Femenino'),
	('M','Masculino'),
	('O', 'Otro');

select * from genero;

insert into lugar_reservacion
values
	(001,"Estadio Metropolitano","Calle 34 #43-31","Barranquilla"),
	(002,"Tayrona National Natural Park","Santa Marta","santo tomas"),
	(003,"Parque Muvdi","Cl. 30 #133 37","soledad"),
	(004,"Playa de la Peninsula de Baru","Isla Baru","cartagena"),
	(005,"Estadio de Beisbol Santa Rosa","Cra. 17 #16","santa rosa"),
	(006,"Hotel Campestre Villa Martha","Carretera troncal km 7 sector","Turbaco"),
	(007,"Parque Explora","Cra. 52 #73-75","Medellin"),
	(008,"Museo El Castillo","Cl. 9 Sur #32-269","La estrella"),
	(009,"Beat Club Bello","Cra. 52 #52-9","Bello"),
	(010,"Al Limite Paintball","Calle 245 #7–55","Bogota"),
	(011,"Camping Montaniero","Cl. 14d #8-27","Facatativa"),
	(012,"Termales de Santa Rosa","Km 10 Vereda","Funsagasuga"),
	(013,"Acuario Rodadero","Cra. 1 #7-69","Santa marta"),
	(014,"Iglesia de San Pedro Martir","Carrera 2 #9-14","El pinon"),
	(015,"Centro Zonal Santa Ana","Carrera 5A #4A-115","Santa Ana");

select * from lugar_reservacion;