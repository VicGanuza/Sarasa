
<div class="franja_gris_claro">
  <img src="images/icono_pisos.png">
  Pisos | unidades funcionales
</div>
<p id="habilitar_unidadesFuncionales" class="inhabilitado"></p>
<div class='div_input clearfix'>
  <p class="blue"> ¿Hay unidades funcionales en la PB?</p>
  <form class="clearfix">
    Si<input type="radio" name="unidades_PB" class="uni_pb" value="Si">
    No<input type="radio" name="unidades_PB" class="no_uni_pb" value="No">
  </form>
  <div class="cuantos">
    ¿Cuantos? 
    <select id="unidades_pb" disabled>
    </select>
  </div>
</div>
<div class='div_input'>
  <p> <span  class="blue">¿Cuantos pisos tiene el edificio?</span> (sin incluir planta baja)</p>
  <select id="cant_pisos" disabled>
    <option value="0"></option>
  </select>
</div>
<div id="ingr_deptos" class='div_input'>
  <p class="blue">¿Todos los pisos tienen la misma cantidad de unidades funcionales?</p>
  <form class="clearfix">
    Si<input type="radio" name="igualesxpiso" class="ig_x_piso"value="Si">
    No<input type="radio" name="igualesxpiso" class="no_ig_x_piso" value="No">
  </form>
  <div class="cuantos">
    ¿Cuantos?
    <select id="cant_deptos" disabled>
    </select>
  </div>
  <form class="clearfix denom_personal">
    Cargar denominacion<input type="checkbox" name="denominacion_pers" class="denom_perso">
  </form>
  <form id="cargar_dptos" class="clearfix carga_dptos display_none">
    Cargar departamentos<input type="checkbox" name="carga_departamentos" class="carga_dptos">
  </form>
</div>
<div class="franja_gris_claro">
 <img src="images/icon_otras-unidades.png">
 Otras unidades
</div>
<p id="habilitar_unidadesOtras" class="inhabilitado display_none"></p>
<div class='div_input clearfix border_bottom'>
 <p><span class="blue"> ¿Tiene locales comerciales? </span>(propiedad de terceros)</p>
 <form class="clearfix">
   Si<input type="radio" name="loc_com" id="loc_com" value="Si">
   No<input type="radio" name="loc_com" id="no_loc_com" value="No">
 </form>
 <div class="cuantos">
   ¿Cuantos? 
   <select id="locales_comerciales" disabled>
   </select>  
 </div>
 <form class="clearfix denom_personal">
 <input type="checkbox" name="denominacion_lc" id="denom_lc">Personalizar denominacion
</form>
</div>
<div class='div_input clearfix border_bottom'>
  <p class="blue"> ¿Tiene cocheras cubiertas?</p>
  <form class="clearfix">
   Si<input type="radio" name="coch_cub" id="coch_cub" value="Si">
   No<input type="radio" name="coch_cub" id="no_coch_cub" value="No">
  </form>
  <div class="cuantos">
   ¿Cuantos? 
   <select id="cocheras_cub" disabled>
   </select>  
  </div>
  <form class="clearfix denom_personal">
   <input type="checkbox" name="denominacion_cc" id="denom_cc">Personalizar denominacion
  </form>
</div>
<div class='div_input clearfix border_bottom'>
  <p class="blue"> ¿Tiene cocheras descubiertas?</p>
  <form class="clearfix">
   Si<input type="radio" name="coch_dec" id="coch_dec" value="Si">
   No<input type="radio" name="coch_dec" id="no_coch_dec" value="No">
  </form>
  <div class="cuantos">
    ¿Cuantos? 
    <select id="cocheras_desc" disabled>
    </select>  
  </div>
  <form class="clearfix denom_personal">
   <input type="checkbox" name="denominacion_cd" id="denom_cd">Personalizar denominacion
  </form>
</div>
<div class='div_input clearfix border_bottom'>
  <p class="blue"> ¿Tiene bauleras?</p>
  <form class="clearfix">
   Si<input type="radio" name="tiene_bauleras" id="tiene_bauleras" value="Si">
   No<input type="radio" name="tiene_bauleras" id="no_tiene_bauleras" value="No">
  </form>
  <div class="cuantos">
   ¿Cuantos? 
   <select id="bauleras" disabled>
   </select>  
  </div>
  <form class="clearfix denom_personal">
   <input type="checkbox" name="denominacion_b" id="denom_b">Personalizar denominacion
  </form>
</div>
<div class="franja_gris_claro">
  <img src="images/icon_esp-comunes.png">
  Espacios Comunes
</div>
<p id="habilitar_otrosEspacios" class="inhabilitado display_none"></p>
<div id="espacio_comun">
  <div class="div_input" >
    <div class="logo_close"></div>
    <input type="text" id="espacio_comun_name" class="nuevo_espacio" value="Ingrese un espacio comun...">
    <input type="checkbox" name="con_reserva" id="con_reserva"> Uso con reserva
  </div>
</div>
<div class="franja_gris_claro">
 <img src="images/icon_otros-elementos.png">
   Otros elementos del edificio
 </div>
<div id="otros_espacios">
 <div class="div_input" >
   <div class="logo_close"></div>
   <input type="text" id="otros_espacios_name" class="nuevo_espacio" value="Ingrese un espacio comun...">
   <input type="checkbox" name="con_reserva" id="con_reserva"> Uso con reserva
 </div>
</div>