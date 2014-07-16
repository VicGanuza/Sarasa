<div id="carga_personalizada" class="top_dialog">
  <header id="title-1">Selecciona el tipo de denominacion para las unidades funcionales</header>
  <div id="content_nombre" class="content_grey">
   <div class="content_whitegrey">
    <div class="deno_torres">
     <input type="radio" name="denominacion" value="letras" id="alfa" checked/>Alfanetico. A partir de:
     <select id="sel_alfa">
     </select>    
    </div>
    <div class="deno_torres">
      <input type="radio" name="denominacion" value="nro" id="num"/>Numerico. A partir de:
      <select id="sel_num" disabled>
      </select> 
    </div>
    <div class="deno_torres">
      <input type="radio" name="denominacion" value="personalizado" id="person" />Personalizada   
      <div class="help_hover">
        <div>Ingresá la denominación en el gráfico una vez <br> que hayas indicado la cantidad de UF por piso.</div>
        <img src="images/icon-arrow-up.png" style="top:-9px">
      </div>
      <div id="ingr_pers">
      </div>
    </div>
   </div> 
  </div>
 <header id="title-2" class="display_none">Ingresa la cantidad de Unidades Funcionales por piso</header>
 <div id="caga_body" class="cuerpo_dialog">
   <div id="person_torres">
   </div>
   <div id="person_dib">
   </div>
 </div>
 <div class="confirmar_person">
  <img src="images/icon-confirmar.png">
  <div class="help_hover">
    <div>Confirmar</div>
    <img src="images/icon-arrow-down.png">
  </div>
 </div>
</div>