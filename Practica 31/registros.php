<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$dbname = "registrocontactos";

$conexion = mysqli_connect($servidor, $usuario, $password, $dbname);

if(isset($_POST['registro'])){
  $nombre = $_POST['Nombre'];
  $telefono = $_POST['Telefono'];
  $correo = $_POST['Correo'];
  $comentarios = $_POST['Comentarios'];

  $guardar = "INSERT INTO contactos VALUES ('$nombre','$telefono','$correo','$comentarios','')";

  $ejecutar = mysqli_query ($conexion,$guardar);

}

header("Location: http://localhost:8080/registrocontactos/");
?>