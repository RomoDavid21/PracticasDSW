<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "registros";

  $nombres = $_POST['nombres'];
  $apellido = $_POST['apellidos'];
  $sexo = $_POST['sexo'];
  $edad = $_POST['edad'];
  $ciudad = $_POST['ciudad'];
  $celular = $_POST['celular'];
  $transporte = (isset($_POST['transporte']))? $_POST['transporte']: "No";
  //$transporte = $_POST['transporte'];
  $comentarios = (isset($_POST['comentarios']))? $_POST['comentarios']: "Ninguno";
  //$comentarios = $_POST['comentarios'];
  $camisa = $_POST['camisa'];
  $talla = (isset($_POST['talla']))? $_POST['talla']: "Ninguno";
  //$padre = $_POST['talla'];


  $conn = mysqli_connect($servername, $username, $password, $dbname);
  $sql = "INSERT INTO usuarios VALUES ('','$nombres','$apellido','$edad','$sexo','$ciudad','$celular','$transporte','$comentarios','$camisa','$talla')";
  
  $ejecutar = mysqli_query ($conn,$sql);

  $conn = null;
  header("Location: http://localhost:8080/Formulario/practica30.html");
?>
