<?php
$con = mysqli_connect('127.0.0.1', 'root', '', 'sena_project');
if (!$con) {
    die("<center><p>La conexión a la base de datos ha fallado: </p></center>" . mysqli_connect_error());
};

$ocasion = $_POST['oca'];
$fecha = $_POST['Fec_reservacion'];
$hora = $_POST['Hor_reservacion'];
$lugar = $_POST['Lug_reserva'];

$insertar = "INSERT INTO reservacion(Servicio_idServicio,Fecha_reservacion,Hora_reservacion,Lugar_reservacion_idLugar_reservacion) VALUES('$ocasion','$fecha','$hora','$lugar')";

$query = mysqli_query($con, $insertar);

if($query){
    echo "correcto";
    header("location:../paginaprincipalplantilla.html");
    exit();
}else{
    echo "incorrecto";
} 
?>
