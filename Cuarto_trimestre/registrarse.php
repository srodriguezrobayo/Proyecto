<?php

include("conexion_R.php");
$nit=$_POST["nit"];
$usu=$_POST["usuario"];
$correo=$_POST["correo"];
$pass=$_POST["pass"];
$tel=$_POST["telefono"];
$ciud=$_POST["ciudad"];





//empresa
if (isset($_POST["btnregistrar"]))

{
    
    $sqlgrabar="INSERT empresa VALUES ('$nit','$usu','$correo',MD5('$pass'),'$tel','$ciud')";
    

    if(mysqli_query($conn,$sqlgrabar))
    
    
{
    
    echo "<script> alert ('usuario registrado con exito: $usu'); window.location='Loginempresa.html' </script>";
    
}else

{
    echo  "<script> alert ('error') </script>";
   
}
}







?>