
<div class="franja_gris_claro">
  <img src="images/sprite/img_09.jpg">
  Pisos | unidades funcionales
</div>
<p id="habilitar_unidadesFuncionales" class="inhabilitado"></p>
<div class='div_input'>
  <p class="blue"> ¿Hay unidades funcionales en Planta Baja?</p>
  <form>
    Si<input type="radio" name="unidades_PB" class="uni_pb" value="Si">
    No<input type="radio" name="unidades_PB" class="no_uni_pb" value="No">
  </form>
  <div class="cuantos">
    ¿Cuántos? 
    <select id="unidades_pb" disabled>
    </select>
  </div>
</div>
<div class='div_input'>
  <p> <span  class="blue">¿Cuántos pisos tiene el edificio? </span> (sin incluir la Planta Baja)</p>
  <select id="cant_pisos" disabled>
    <option value="0"></option>
  </select>
</div>
<div id="ingr_deptos" class='div_input'>
  <p class="blue">¿Todos los pisos tienen la misma cantidad de unidades funcionales?</p>
  <form>
    Si<input type="radio" name="igualesxpiso" class="ig_x_piso"value="Si">
    No<input type="radio" name="igualesxpiso" class="no_ig_x_piso" value="No">
  </form>
  <div class="cuantos">
    ¿Cuántos?
    <select id="cant_deptos" disabled>
    </select>
  </div>
  <form class="denom_personal personalizada  display_none">
    Cargar denominación<input type="checkbox" name="denominacion_pers" class="denom_perso pointer">
  </form>
  <form id="cargar_dptos" class="carga_dptos  personalizada display_none">
    Cargar departamentos<input type="checkbox" name="carga_departamentos" class="pointer">
  </form>
</div>
<div class="franja_gris_claro">
 <img src="images/sprite/img_11.jpg">
 Otras unidades
</div>
<p id="habilitar_unidadesOtras" class="inhabilitado display_none"></p>
<div class='div_input border_bottom'>
 <p><span class="blue"> ¿Tiene locales comerciales? </span>(propiedad de terceros)</p>
 <form >
   Si<input type="radio" name="loc_com" id="loc_com" value="Si">
   No<input type="radio" name="loc_com" id="no_loc_com" value="No">
 </form>
 <div class="cuantos">
   ¿Cuántos?
   <select id="locales_comerciales" disabled>
   </select>  
 </div>
 <form class="personalizada">
 <input type="checkbox" name="denominacion_lc" id="denom_lc" class="pointer">Personalizar denominación
</form>
</div>
<div class='div_input border_bottom'>
  <p class="blue">¿Tiene cocheras cubiertas?</p>
  <form >
   Si<input type="radio" name="coch_cub" id="coch_cub" value="Si">
   No<input type="radio" name="coch_cub" id="no_coch_cub" value="No">
  </form>
  <div class="cuantos">
   ¿Cuántos? 
   <select id="cocheras_cub" disabled>
   </select>  
  </div>
  <form class="personalizada">
   <input type="checkbox" name="denominacion_cc" id="denom_cc" class="pointer">Personalizar denominación
  </form>
</div>
<div class='div_input border_bottom'>
  <p class="blue">¿Tiene cocheras descubiertas?</p>
  <form >
   Si<input type="radio" name="coch_dec" id="coch_dec" value="Si">
   No<input type="radio" name="coch_dec" id="no_coch_dec" value="No">
  </form>
  <div class="cuantos">
    ¿Cuántos? 
    <select id="cocheras_desc" disabled>
    </select>  
  </div>
  <form class="personalizada">
   <input type="checkbox" name="denominacion_cd" id="denom_cd" class="pointer">Personalizar denominación
  </form>
</div>
<div class='div_input border_bottom'>
  <p class="blue">¿Tiene bauleras?</p>
  <form >
   Si<input type="radio" name="tiene_bauleras" id="tiene_bauleras" value="Si">
   No<input type="radio" name="tiene_bauleras" id="no_tiene_bauleras" value="No">
  </form>
  <div class="cuantos">
   ¿Cuántos? 
   <select id="bauleras" disabled>
   </select>  
  </div>
  <form class="personalizada">
   <input type="checkbox" name="denominacion_b" id="denom_b" class="pointer">Personalizar denominación
  </form>
</div>
<div class="franja_gris_claro">
  <img src="images/sprite/img_12.jpg">
  Espacios Comunes
</div>
<p id="habilitar_otrosEspacios" class="inhabilitado display_none"></p>
<div id="espacio_comun">
  <div class="div_input" >
    <div class="logo_close"></div>
    <input type="text" id="espacio_comun_name" class="nuevo_espacio espacio_comun_1" value="Ingrese un espacio común...">
    <input type="checkbox" name="con_reserva" id="con_reserva"> Uso con reserva
  </div>
</div>
<div class="franja_gris_claro">
 <img src="images/sprite/img_13.png">
   Otros elementos del edificio
 </div>
<div id="otros_espacios">
 <div class="div_input" >
   <div class="logo_close"></div>
   <input type="text" id="otros_espacios_name" class="nuevo_espacio otros_espacios_1" value="Ingrese un espacio común...">
   <input type="checkbox" name="con_reserva" id="con_ingresos"> Genera ingresos
 </div>
</div>