<?php
$con = mysqli_connect('127.0.0.1', 'root', '', 'sena_project');
if (!$con) {
    die("<center><p>La conexión a la base de datos ha fallado: </p></center>" . mysqli_connect_error());
};

if (isset($_POST['Login'])) {
    $tipoUsuario = $_POST['Opciones'];
    $CE = $_POST['correo'];
    $clave = $_POST['contrasena'];

    if ($tipoUsuario == "Empresa") {
        $consulta = "SELECT * FROM empresa WHERE Correoelectronico_empresa='" . $CE . "' AND Password_empresa=MD5('" . $clave . "')";
        $esta = mysqli_query($con, $consulta);

        if (mysqli_num_rows($esta) > 0) {
            header('location: ../perfilempresa.html');
            echo "<script>alert('Éxito')</script>";
            exit();
        } else {
            echo "<script>alert('La contraseña o el correo están mal digitados')</script>";
        }
    } elseif ($tipoUsuario == "Cliente") {
        $consulta = "SELECT * FROM cliente WHERE Correoelectronico_cliente='" . $CE . "' AND Password_cliente=MD5('" . $clave . "')";
        $esta = mysqli_query($con, $consulta);

        if (mysqli_num_rows($esta) > 0) {
            echo "<script>alert('Éxito')</script>";
            header('location: ../perfilcliente.html');
            exit();
        } else {
            echo "<p><center>La contraseña o el correo están mal digitados</center></p>";
        }
    }
}
?>
