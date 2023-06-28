<?php
$con = mysqli_connect('127.0.0.1', 'root', '', 'sena_project');
if (!$con) {
    die("<center><p>La conexión a la base de datos ha fallado: </p></center>" . mysqli_connect_error());
};


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
    

    if(mysqli_query($con,$sqlgrabar))
    
    
{
    
    echo "<script> alert ('usuario registrado con exito: $usu'); window.location='Loginempresa.html' </script>";
    header("location:../pefile_vista.html");
    exit();
    
}else

{
    echo  "<script> alert ('error') </script>";
   
}
}







?>