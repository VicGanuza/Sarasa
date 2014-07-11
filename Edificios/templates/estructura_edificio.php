<div id="estructura_edificio" ><!--  class="display_none"-->
  <div id="encabezado_consorcio">
    <div class="icono"> cd </div> 
    <div id="nombre_edif" class="nombre_edificio">Coronel dias 438</div>
    <div class="color-picker">
      <img src="images/icono_colores.png">   
    </div>           
  </div>
  <div id="title_torres" class="franja_gris_claro">
    <img src="images/icono_torres.png">
    <div> Torres</div>
  </div>
  <!-- Configuracion del edificio -->
  <div id="form_edificios" class="formulario_altas">
    <div class="ing_torres">
     <div class="dato_input small_input">
      Cant. de torres
      <select id="cant_torres">
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
     <h4 class="titles orange"> > Seleccion&aacute; la torre que queres configurar</h4>
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
          <p style="width:50px; float:left"> ver todas </p>
          <img src="images/ver_todas_dib.png">
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
        <img  class="hide_vertodas" src="images/hide_icon.png" title="Plegar">
        <div id="todas_1" class="bloque_torre">
          <div class="torre_name nombre_torre_1">torre 1</div>
          <div class="dibujo_torre"></div>
          <div id="verTodas_num" class="num_class"></div>
          <div class="funcionales">
            <div class="bloque loc_com">
              <img src="images/locales_oscuro.png">
              <div class="cant">5</div>
              <div class="">Locales Comeciales</div>
            </div>
            <div class="bloque cocheras_cub">
              <img src="images/cubiertas_oscuro.png">
              <div class="cant">10</div>
              <div class="">Cocheras Cubiertas</div>
            </div>
            <div class="bloque cocheras">
              <img src="images/descubiertas_oscuro.png">
              <div class="cant">15</div>
              <div class="">Cocheras Descubiertas</div>
            </div>
            <div class="bloque espacios">
              <img src="images/comunes_oscuro.png">
              <div class="cant">5</div>
              <div class="">Espacios Comunes</div>
            </div>
            <div class="bloque bauleras">
              <img src="images/bauleras_oscuro.png">
              <div class="cant">8</div>
              <div class="">Bauleras</div>
            </div>
            <div class="bloque otras_uni">
              <img src="images/otros_oscuro.png">
              <div class="cant">1</div>
              <div class="">Otros elementos</div>
            </div>
          </div>
        </div>
        <div class="linea_vertical"></div>
        <div id="todas_2" class="bloque_torre">
          <div class="torre_name nombre_torre_2">torre 2</div>
          <div></div>
          <div></div>
        </div>
      </div>
  </div>
</div>
