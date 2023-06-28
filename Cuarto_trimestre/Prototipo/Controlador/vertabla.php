<?php

$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_basededatos";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Falló la conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM nombre_tabla";
$result = $conn->query($sql);


$data = '';
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data .= "<tr>";
        $data .= "<td>" . $row["Correo Empresa"] . "</td>";
        $data .= "<td>" . $row["Celular Empresa"] . "</td>";
        $data .= "<td>" . $row["Ocacion Reserva"] . "</td>";
        $data .= "<td>" . $row["fecha Reserva"] . "</td>";
        $data .= "<td>" . $row["Hora Reserva"] . "</td>";
        $data .= "<td>" . $row["Lugar Reserva"] . "</td>";
        $data .= "<td>" . $row["Costo"] . "</td>";
        $data .= "</tr>";
    }
} else {
    $data .= "<tr><td colspan='3'>No se encontraron resultados.</td></tr>";
}

$conn->close();


$file = 'perfilcliente.html'; 
$content = file_get_contents($file);


$content = preg_replace('/<tbody>.*<\/tbody>/s', '<tbody>' . $data . '</tbody>', $content);


file_put_contents($file, $content);

header('Location: ' . $file);
exit();
?>
