<div id="estructura_edificio" class="display_none">
  <div id="encabezado_consorcio">
    <div class="icono"> cd </div> 
    <div id="nombre_edif" class="nombre_edificio">Coronel dias 438</div>
    <div class="color-picker">
      <img src="images/sprite/img_07.jpg"> 
      <div class="help_hover aside">
       <div>Elegí un color para identificar este consorcio</div>
       <img src="images/icon-arrow-right.png">
      </div>  
    </div>           
  </div>
  <div id="title_torres" class="franja_gris_claro">
    <img src="images/sprite/img_08.jpg">
    <div> Torres</div>
  </div>
  <!-- Configuracion del edificio -->
  <div id="form_edificios" class="formulario_altas">
    <div class="ing_torres">
     <div class="dato_input small_input">
      Cant. de torres
      <select id="cant_torres" class="input_small">
        <option value="0"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
     </div>
     <div class="dato_input sin_form bordesDI">
      <span class="blue left margin_right-12">¿Tienen la misma estructura?</span>
      <form class="clearfix">
        Si <input type="radio" name="estruc_torre" id="torres_iguales" value="Si" disabled="disabled">
        No <input type="radio" name="estruc_torre" id="no_torres_iguales" value="No" disabled="disabled">
      </form>
     </div>
     <div class="dato_input sin_form">
      <span>Personalizar denominaci&oacute;n</span>
      <input type="checkbox" name="torre_personalizada" id="torres_person">
     </div>
    </div>  
    <div class="columna_ingreso">
     <h4> > Seleccion&aacute; la torre que queres configurar</h4>
     <div  id="torres_tabs" class="tabs">
      <ul id="torres_list">
       <li class="tab_1 tab_activa tab_navegate">Torre 1</li>
       <li class="ver_todas">ver todas</li>
      </ul>
      <div id="tab_content">
        <div class="torre_1 torre_form">
          <?php include_once("templates/form_edificio.php"); ?>
        </div>
       </div>
      </div>
    </div>
    <div class="column_dibujo">
     
      <div id="tabs_dibujo" >
        <div id="dibujos_list" class="encabezado_dibujo">
         <div class="dibujo_1 ver_torre activa dib_navegate"> torre1 </div>
         <div class="ver_todas">
          <div style="width:50px; float:left"> ver todas </div>
          <img src="images/sprite/img_17.png">
         </div>
        </div>
        <div id="dib_content">
          <div class="dibujoT_1 dibujo">
            <?php
             include('templates/dibujo.php');
            ?>
          </div>
        </div>
      </div>
    </div> <!-- column_dibujo -->
     <div id="vista_todas" class="vista_vertodas">
        <div class="hide_vertodas">
        <img src="images/sprite/img_32.png">
        <div class="help_hover">
         <div>Plegar</div>
         <img src="images/icon-arrow-down.png">
       </div>
        </div>
        <div class="inner_all">
          <div id="todas" class="bloque_torre">
          <div class="torre_name">torre 1</div>
          <div class="dibujo_torre"></div>
          <div id="edif_dibujo_todas" class="row demo dibujo_edif display_none">
           <div id="edificio_todas" class='largo-total gutter-large columns'></div>
          </div>
          <div id="verTodas_num" class="num_class">
          </div>
          <div class="funcionales">
            <div class="bloque loc_com display_none">
              <img src="images/locales_oscuro.png">
              <div class="cant"></div>
              <div class="">Locales Comeciales</div>
            </div>
            <div class="bloque cocheras_cub display_none">
              <img src="images/cubiertas_oscuro.png">
              <div class="cant"></div>
              <div class="">Cocheras Cubiertas</div>
            </div>
            <div class="bloque cocheras display_none">
              <img src="images/descubiertas_oscuro.png">
              <div class="cant"></div>
              <div class="">Cocheras Descubiertas</div>
            </div>
            <div class="bloque espacio_comun_todas display_none">
              <img src="images/comunes_oscuro.png">
              <div class="cant"></div>
              <div class="">Espacios Comunes</div>
            </div>
            <div class="bloque bauleras display_none">
              <img src="images/bauleras_oscuro.png">
              <div class="cant"></div>
              <div class="">Bauleras</div>
            </div>
            <div class="bloque otros_espacios_todas display_none">
              <img src="images/otros_oscuro.png">
              <div class="cant"></div>
              <div class="">Otros elementos</div>
            </div>
           </div>
           <div class="linea_horizontal display_none"></div>
          </div>
        </div>
        <div class="inner_all_left">          
        </div>
        <div class="inner_all_right">          
        </div>
     </div>
  </div>
</div>
