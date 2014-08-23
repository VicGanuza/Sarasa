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
        <link rel="stylesheet" href="css/fonts.css" type="text/css" media="screen" />

        <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />
           
          <!--      <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
        <script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
        <script type="text/javascript" src="http://www.pureexample.com/js/lib/jquery.ui.touch-punch.min.js"></script>


<link rel="stylesheet" href="css/demo.css"> 
        
        <link rel="stylesheet" href="css/bootstrap.css"> 
        
        <link rel="stylesheet" href="css/foundation.css"> 
-->
	</head>

    <body>  
		<header>
          <div class="content">
            <img src="images/logo.png"/>
          </div>         
        </header>	
        <!-- En este div se muestra la capa emergente -->
        <div id="flotante"></div>	
        <div id="titulo_header" class="header subtitles">
             <div class="content">
             Alta de Administrador
             </div>
         </div>   
        <div class="main-content content" id="main-content"> 
      <!-- <div class="content">-->
            <div class="menu_pasos">
                <div id="paso_1" class="pasos">
                    Paso 1
                    <div class="help_hover">
                    <div>Alta de administrador</div>
                    <img src="images/icon-arrow-down.png">
                    </div>
                </div>
                <div id="paso_2" class="pasos paso_grey">
                    Paso 2
                    <div class="help_hover">
                    <div>Alta de consorcio</div>
                    <img src="images/icon-arrow-down.png">
                    </div>
                </div>
                <div id="paso_3" class="pasos paso_grey">
                    Paso 3
                    <div class="help_hover">
                    <div>Estructura del consorcio</div>
                    <img src="images/icon-arrow-down.png">
                    </div>
                </div>
                <div id="paso_4" class="pasos paso_grey">
                    Paso 4
                    <div class="help_hover">
                    <div>Identificación de UF</div>
                    <img src="images/icon-arrow-down.png">
                    </div>
                </div>
            </div>
           <div id="titulo" class="title">
                <div id="consorcio_agrup" class="display_none">
                  <div class="icono"> cd </div> 
                  <div id="nombre_edif_agrup" class="nombre_edificio">Coronel dias 438</div>
                </div>
                <div class="titles">Bienvenido a <span class="blue">Consorcio</span>abierto.</div>
                <div class="subtitles">Ingresa tus datos y empeza a optimizar tu manera de trabajar.</div>
            </div>
            <div class="contactenos">
                <img src="images/sprite/contactanos.jpg">
                <img src="images/sprite/img_06.png" class="flecha"> 
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
                include_once('templates/deno_torres.php');
                include_once('templates/paleta_colores.php');
                include_once('templates/dialog_contacto.php');
                include_once('templates/terminos.php');
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
		<!--</div>-->
        </div> <!-- main-content --> 
    
	<script type="text/javascript" src="js/jquery-ui/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="js/funciones.js"></script>
		
    </body>
</html>      