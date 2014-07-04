<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Edificios</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/styles.css"> 
        <link rel="stylesheet" href="css/foundation.css"> 
        <link rel="stylesheet" href="css/demo.css"> 
        <link rel="stylesheet" href="css/bootstrap.css"> 

	</head>

    <body>  
		<header>
          <div class="content">
            <img src="images/logo.png"/> <!-- Aca iria el logo del Consorcio Abierto -->
          </div>         
        </header>		
        <div id="titulo_header" class="header">
         Alta de Administrador
         </div>   
        <div class="main-content" id="main-content"> 
            <div class="menu_pasos">
                <div id="paso_1" class="pasos" title="Alta de administrador">
                    Paso 1
                </div>
                <div id="paso_2" class="pasos paso_grey" title="Alta de consorcio">
                    Paso 2
                </div>
                <div id="paso_3" class="pasos paso_grey" title="Estructura del consorsio">
                    Paso 3
                </div>
                <div id="paso_4" class="pasos paso_grey" title="Identificador de UF">
                    Paso 4
                </div>
            </div>
           <div id="titulo" class="title">
                <h1 class="titles">Bienvenido a <span class="blue">Consorcio</span>abierto.</h1>
                <h3 class="titles">Ingresa tus datos y empeza a optimizar tu manera de trabajar.</h3>
            </div>
            <div class="contactenos">
                <img src="images/icon_contact.png">
            </div>
        	<div class="formulario">
              <?php
                include_once("templates/formulario_personas.php");
                include_once("templates/formulario_consorcio.php");
                include_once('templates/estructura_edificio.php');
                include_once('templates/form_agrupacion.php');
              ?>
            </div>
            <div class="dialogs">
              <?php
                include_once('templates/dialog_cargaDenominacion.php');
                include_once('templates/carga_personalizada.php');
              ?>              
            </div>
            <div class="confirmacion">
                <?php
                    include_once('templates/confirmar.php');
                ?>
            </div>
                     
            <footer>
                <?php
                    include_once('templates/footer.php');
                ?>
            </footer>
		</div> <!-- main-content --> 
    
	<script type="text/javascript" src="js/jquery-ui/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="js/funciones.js"></script>
		
    </body>
</html>      