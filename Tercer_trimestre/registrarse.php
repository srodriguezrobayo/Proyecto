<?php
$conexion = mysqli_connect("127.0.0.1", "root", "5172427", "sena_project");

if (!$conexion) {
    die("<center><p>La conexión a la base de datos ha fallado: </p></center>" . mysqli_connect_error());
}

if (isset($_POST['registrarc'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contra = $_POST['Contra'];

    $query = "SELECT * FROM cliente WHERE Correoelectronico_cliente='".$correo."'";

    $ejecutar = mysqli_query($conexion, $query);

    if (mysqli_num_rows($ejecutar) == 0) {
        $query = "INSERT INTO cliente (Nombre1_cliente, Correoelectronico_cliente, Contraseña_cliente) 
                VALUES ('$nombre', '$correo', MD5('$contra'))";

        $ejecutar = mysqli_query($conexion, $query);

        if ($ejecutar) {
            header('Location: ../paginaprincipalplantilla.html');
            exit();
        } else {
            echo "<p><center>Error al registrar el cliente</center></p>";
        }
    } else {
        echo "<p><center>Este usuario ya existe</center></p>";
    }
}

if (isset($_POST['registrare'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contra = $_POST['Contra'];

    $query = "SELECT * FROM empresa WHERE Correoelectronico_empresa='".$correo."'";

    $ejecutar = mysqli_query($conexion, $query);

    if (mysqli_num_rows($ejecutar) == 0) {
        $query = "INSERT INTO empresa (Nombre_empresa, Correoelectronico_empresa, Contraseña_empresa) 
                VALUES ('$nombre', '$correo', MD5('$contra'))";

        $ejecutar = mysqli_query($conexion, $query);

        if ($ejecutar) {
            header('Location: ../perfilempresa.html');
            exit();
        } else {
            echo "<p><center>Error al registrar la empresa</center></p>";
        }
    } else {
        echo "<p><center>Este usuario ya existe</center></p>";
    }
}

?>

