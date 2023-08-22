<?php


include("conexion_R.php");
$nombre2=$_POST["usuario2"];
$correo2=$_POST["correo2"];
$pass2=$_POST["pass2"];
$tel2=$_POST["tel2"];
$gen2=$_POST["genero2"];
$ciudad2=$_POST["ciudad2"];

//cliente

if (isset($_POST["btnregistrar2"]))

{                                   
   
    $sqlgrabar2="INSERT INTO `cliente`(`Nombre_cliente`, `Correoelectronico_cliente`,`Password_cliente`,`Telefono_cliente`,`Genero_idGenero`,`Ciudad_id_Ciudad`) VALUES ('$nombre2','$correo2',MD5('$pass2'),'$tel2','$gen2','$ciudad2')";
    
    if(mysqli_query($conn,$sqlgrabar2))
    

{
    
    echo "<script> alert ('usuario registrado con exito: $nombre2'); window.location='Logincliente.html' </script>";
    
}else
{
    echo  "<script> alert ('error') </script>";
   
}
}
?>