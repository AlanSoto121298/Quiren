<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "alancoco9999@gmail.com"; 
    $asunto = "Nuevo mensaje de contacto de $asunto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n\n";
    $contenido .= "Asunto:\ $asunto\n";
    $contenido .= "Mensaje:\n$mensaje";

    $headers = "From: $email";

    mail($destinatario, $asunto_email, $contenido, $headers);

    header("Location: index.html" );
}