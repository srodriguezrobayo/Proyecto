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
Password_empleado varchar(80) not null,
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
Password_empresa varchar(100) not null,
Telefono_empresa integer null,
Ciudad_id_Ciudad varchar(20) null,
primary key(Nit_Empresa)
);

create table cliente
(
id_Cliente integer  auto_increment not null,
Nombre_cliente varchar(20) not null,
Correoelectronico_cliente varchar(20) not null,
Password_cliente varchar(80) not null,
Telefono_cliente integer null,
Genero_idGenero varchar(2)  null,
Ciudad_id_Ciudad varchar(20) null,
primary key(id_Cliente)
);

create table lugar_reservacion
(
ID_Direccion_lugreserv varchar(120) not null,
Nom_lugreserv varchar(20) not null,
Ciudad_id_Ciudad varchar(20) not null,
primary key(ID_Direccion_lugreserv )
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
Lugar_reservacion_idLugar_reservacion varchar(120) not null,
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
references lugar_reservacion(ID_Direccion_lugreserv);

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

insert into lugar_reservacion(ID_Direccion_lugreserv,Nom_lugreserv,Ciudad_id_Ciudad)
values ('DG 48 D BIS SUR','Hotel tequendama','Bogota');
insert into lugar_reservacion
	values ('carrera 10 59-41', 'Hotel el campin', 'Santa marta'),
    ('Carrera 54 85-39 norte', 'hotel royale', 'Bello'),
    ('Calle 43 36-48 sur', 'hotel starfish', 'La estrella'),
    ('Calle 123 # 45-67', 'hotel whashington', 'Medellin'),
    ('Carrera 45 dig 85', 'salon comunal bosa', 'Barranquilla'),
    ('Avenida 52g -58', 'salon comunal florida', 'santo tomas'),
    ('Carrera 456 # 78-90', 'hotel jeferson', 'cartagena'),
    ('Avenida 789 Sur # 12-34', 'hotel vercetti', 'soledad'),
    ('Diagonal 321 # 56-78', 'Edificio atrio', 'santa rosa'),
    ('Transversal 654 # 90-12', 'hotel Bioxury', 'Facatativa'),
    ('Calle 987 Este # 34-56', 'hotel Eldorado', 'El pinon'),
    ('Avenida 567 Norte # 12-34', 'hotel Cosmos', 'Turbaco'),
    ('Avenida 765 Sur # 34-56', 'SENA', 'Funsagasuga'),
    ('Diagonal 098 # 67-89', 'hotel Morrison', 'Santa Ana');

insert empleados(id_empleado,Nom_empleado,Correo_elec_admin,Password_empleado,Tipo_usuario_idTipo_usuario,Telefono_empleado,Genero_idGenero)
	values (74,'Jair Carrillo','JairCar@reserveshoot.com',md5('123'),10,310816573,'M');

update empleados
	set Tipo_usuario_idTipo_usuario=20
	where id_empleado=74;

update empleados
	set Telefono_empleado=7659812
	where id_empleado=74;

insert empleados(id_empleado,Nom_empleado,Correo_elec_admin,Password_empleado,Tipo_usuario_idTipo_usuario,Telefono_empleado,Genero_idGenero)
	values (92,'Sergio Rodriguez','SergioRod@reserveshoot.com',md5('456'),10,3196489515,'M');

update empleados
	set Telefono_empleado=7686722
	where id_empleado=92;

insert empleados(id_empleado,Nom_empleado,Correo_elec_admin,Password_empleado,Tipo_usuario_idTipo_usuario,Telefono_empleado,Genero_idGenero)
	values (18,'Jeiron Martinez','JeironMar@reserveshoot.com',md5('789'),20,7216894,'M');

	update empleados
	set id_empleado=55
	where id_empleado=18;

insert empleados(id_empleado,Nom_empleado,Correo_elec_admin,Password_empleado,Tipo_usuario_idTipo_usuario,Telefono_empleado,Genero_idGenero)
	values (100,'Daniel rodriguez','DanielRod@reserveshoot.com',md5('101112'),20,7797833,'M');

	update empleados
	set Nom_empleado='Daniel Rodriguez'
	where id_empleado=100;

insert empleados(id_empleado,Nom_empleado,Correo_elec_admin,Password_empleado,Tipo_usuario_idTipo_usuario,Telefono_empleado,Genero_idGenero)
	values (79,'Sneyder Vergel','SneyderVer@reserveshoot.com',md5('131415'),20,7808944,'M');

insert empresa(Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Telefono_empresa,Ciudad_id_Ciudad)
	values('15227896','Teleperformance','teleperformance@gmail.com',md5('123456789'),'3162502450','Bogota');
insert empresa(Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Telefono_empresa,Ciudad_id_Ciudad)
	values('24645485','Muncher','muncher@gmail.com',md5('987654321'),'3173460560','bello'),
	('57745875','sistemasenlinea','sistemaslinea@gmail.com',md5('789456123'),'3207895255','La estrella'),
	('55475457','Exito','exito@gmail.com',md5('321654987'),'3058975259','Medellin'),
	('15227895','Arturo Calle','arturocalle@gmail.com',md5('147258369'),'3182369726','Barranquilla'),
	('97556741','Postobon','postobon@gmail.com',md5('741852963'),'306987456','santo tomas'),
	('87877448','Alqueria','alqueria@gmail.com',md5('159478632'),'323698765','cartagena'),
	('15227898','Davivienda','davivienda@gmail.com',md5('951632874'),'3158687955','soledad');

insert into cliente
	values (1,'Juan123','juan123@gmail.com',md5(123),3132568497,'M','Bogota'),
	 (2,'Jair987','jair987@gmail.com',md5(1235),3162657989,'M','Facatativa'),
     (3,'Sergio159','Sergio159@gmail.com',md5(1236),3158974632,'M','Santa Ana'),
     (4,'Carlos364','Carlos364@gmail.com',md5(1237),3205387984,'M','Santa marta');


insert reservacion
	values (10,5,'2023-07-20','18:00 pm','DG 48 D BIS SUR',15227896,1,200000,55),
	(20,6,'2023-07-15','20:00 pm','carrera 10 59-41',15227898,2,500000,74),
	(30,7,'2023-07-10','17:00 pm','Carrera 54 85-39 norte',55475457,3,400000,79),
	(40,8,'2023-07-19','12:00 am','Calle 43 36-48 sur',87877448,4,1000000,92);

SELECT D.idDepartamento, C.id_Ciudad, L.ID_Direccion_lugreserv,L.Nom_lugreserv
from departamento D
inner JOIN ciudad C
ON C.Departamento_idDepartamento = D.idDepartamento
inner join lugar_reservacion L
on L.Ciudad_id_Ciudad = C.id_Ciudad;


SELECT A.Nombre_t_usuario, B.Nom_empleado
from tipo_usuario A
inner join empleados B
on B.Tipo_usuario_idTipo_usuario = A.idTipo_usuario;

SELECT X.Nombre_cliente, C.id_Ciudad, L.Nom_lugreserv, R.Fecha_reservacion, S.Nombre_servicio
from cliente X
inner join ciudad C
on X.Ciudad_id_Ciudad = C.id_Ciudad
inner join lugar_reservacion L
on L.Ciudad_id_Ciudad = C.id_Ciudad
inner join reservacion R 
on R.Lugar_reservacion_idLugar_reservacion = L.ID_Direccion_lugreserv
inner join servicio S
on R.Servicio_idServicio = S.idServicio;

select *
from empleados
order by Tipo_usuario_idTipo_usuario asc;

SELECT *
FROM empresa
WHERE Ciudad_id_Ciudad='Bogota';

select * 
from lugar_reservacion
where ID_Direccion_lugreserv like '%calle%';
