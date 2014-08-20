<div id="form_agrupacion" class="display_none">
   <h4 class="orange">Agrupá las UF secundarias arrastrándolas hasta las principales.</h4>
   <p>Para desasociar una UF secundaria de una principal, simplemente arrastras el ícono hacia afuera de la UF primaria, o bien, hacés doble click sobre el ícono en el 
cuadro de las UF secundarias.</p>
   <div>
       <form class="left">
         <input type="checkbox" name="agrupacion">Habilitar agrupación de UF cruzadas
       </form>
       <div class="help">
       <div class="icono_info"></div>
       <div class="help_hover aside">
         <div>Esta opción permite agrupar UFs secundarias configuradas <br> en una torre, con UFs principales configuradas en otra.</div>
         <img src="images/icon-arrow-right.png">
       </div>
       </div>
    </div>
  <div class="cuerpo">
  	<div class="flecha_agrup">
  	 <img src="images/sprite/img_27.png">
  	</div>
  
   <div class="columna_izquierda">
     <div class="encabezado">
       Uf secundarias
     </div>
     <hr>
     <div id="uf_secundarias"> 
     <div  class="tabs">
     </div>

     <div id="sec_content"> 
      <div class="sec_form">
        <div id="cochera_cub" class="display_none">
         <div class="logo">
          <img src="images/sprite/img_19.png">
         </div>
         <div class="vista_comercios">
         <p>Cocheras Cubiertas</p>
         <div id="list_cc"></div>
         </div>
         <hr>
        </div>
        <div id="coch_desc" class="display_none">
         <div class="logo">
          <img src="images/sprite/img_20_1.png">
         </div>
         <div class="vista_comercios">
         <p>Cocheras Descubiertas</p>
         <div id="list_dc"></div>
         </div>
         <hr>
        </div>
        <div id="baulera" class="display_none">
         <div class="logo">
          <img src="images/sprite/img_23.png">
         </div>
         <div class="vista_comercios">  
         <p>Bauleras</p>
         <div id="list_b"></div>
        </div>
        </div>     
      </div>
     </div>           

     </div>  
    </div>
    <div class="columna_derecha">
      <div class="encabezado">
        Uf primarias
      </div>
      <hr>
      <div id="uf_primarias">   
      <div class="tabs">
      </div>
       
      <div id="prim_content">  
       <div class="prim_form">
         <div id="edif_dibujo_uf_prim" class="row demo dibujo_edif">
          <div id="edificio_uf_prim" class='largo-total gutter-large columns'></div>
        </div>
        <div id="numeracion_uf_prim" class="num_class row demo">
          <div id="pisos_num_uf_prim" class="largo-total gutter-large columns"></div>
        </div>
         <div id="agrup_locales_comerciales" class="display_none">
        <div class="vista_comercios">  
         <p>Locales Comerciales</p>
         <div id="list_comercios"></div>
        </div>
       </div>  
       
       	
       </div>      
      </div>        
      </div> 
    </div>
   
  </div>
  <div>
  <h4 class="orange left">YA AGRUPASTE LAS UF, AHORA ASOCIALAS CON SUS CONSORCISTAS</h4>
  <p class="left">Eligí una de las siguientes opciones.</p>
  <hr>
  <div class="mitad">
    <div class="opciones">1</div>
    <span class="blue">Completá los datos en la tabla de abajo</span>
  </div>
  <div class="mitad">
    <div class="opciones">2</div>
    <div class="blue">¿Ya tenés estos datos en Excel?</div>
    <div class="texto">Aprovechalos. Bajá esta tabla, editala, guardala en tu computadora y subila.</div>
    <div class="excel">
      <img src="images/sprite/img_28.png">
      Bajar excel
    </div>
    <div class="excel">
      <img src="images/sprite/img_29.png">
      Subir excel
    </div>
  </div>
  <div class="full">
    <div class="principales">
      <div class="margin-top_17">  </div>
      <div id="tabla_torre" class="tabla_torre_class encabezado_tabla oscuro">
        torre
      </div>
      <div id="tabla_uf_prim" class="tabla_uf_prim_class encabezado_tabla oscuro">
        uf. primarias
      </div>
      <div id="cuerpo_tabla_edif">
        <div class="tabla_torre_1">
          <div class="locales_torre_1"></div>
          <div class="pb_torre_1"></div>
          <div class="dptos_torre_1"></div>
        </div>
        <div class="tabla_torre_2">
          <div class="locales_torre_2"></div>
          <div class="pb_torre_2"></div>
          <div class="dptos_torre_2"></div>
        </div>
        <div class="tabla_torre_3">
          <div class="locales_torre_3"></div>
          <div class="pb_torre_3"></div>
          <div class="dptos_torre_3"></div>
        </div>
        <div class="tabla_torre_4">
          <div class="locales_torre_4"></div>
          <div class="pb_torre_4"></div>
          <div class="dptos_torre_4"></div>
        </div>
      </div>
    </div>
      <div class="secundarias">
        <div class="tabla_title blue">uf. secundarias</div>
        <div id="tabla_coch_cub" class="fila_33 encabezado_tabla celeste">
         coch. cubierta
        </div>
        <div id="tabla_coch_desc" class="fila_33 encabezado_tabla celeste">
          coch. descub.
        </div>
        <div id="bauleras" class="fila_33 encabezado_tabla celeste">
          baulera
        </div>
        <div id="cuerpo_tabla_sec">
          <div class="tabla_torre_1">
            <div class="locales_torre_1"></div>
            <div class="pb_torre_1"></div>
            <div class="dptos_torre_1"></div>
          </div>
          <div class="tabla_torre_2">
            <div class="locales_torre_2"></div>
            <div class="pb_torre_2"></div>
            <div class="dptos_torre_2"></div>
          </div>
          <div class="tabla_torre_3">
            <div class="locales_torre_3"></div>
            <div class="pb_torre_3"></div>
            <div class="dptos_torre_3"></div>
          </div>
          <div class="tabla_torre_4">
            <div class="locales_torre_4"></div>
            <div class="pb_torre_4"></div>
            <div class="dptos_torre_4"></div>
          </div>
        </div>
      </div>
      <div class="propietarios dark_grey">
        <div class="tabla_title">propietario</div>
        <div id="tabla_nombre" class="fila_25 encabezado_tabla oscuro">
          nombre
        </div>
        <div id="tabla_apellido" class="fila_25 encabezado_tabla oscuro">
          apellido
        </div>
        <div id="tabla_mail" class="fila_25 encabezado_tabla oscuro">
          eMail
        </div>
        <div id="tabla_miembro" class="fila_25 encabezado_tabla oscuro">
          miembro consejo admin.
        </div>
        <div id="cuerpo_tabla_prop">
          <div class="tabla_torre_1">
            <div class="locales_torre_1"></div>
            <div class="pb_torre_1"></div>
            <div class="dptos_torre_1"></div>
          </div>
          <div class="tabla_torre_2">
            <div class="locales_torre_2"></div>
            <div class="pb_torre_2"></div>
            <div class="dptos_torre_2"></div>
          </div>
          <div class="tabla_torre_3">
            <div class="locales_torre_3"></div>
            <div class="pb_torre_3"></div>
            <div class="dptos_torre_3"></div>
          </div>
          <div class="tabla_torre_4">
            <div class="locales_torre_4"></div>
            <div class="pb_torre_4"></div>
            <div class="dptos_torre_4"></div>
          </div>
        </div>
      </div>
      <div class="inquilinos">
        <div class="tabla_title grey"> inquilino</div>
        <div id="tabla_nombre_inquilino" class="fila_33 encabezado_tabla gris">
          nombre
        </div>
        <div id="tabla_apellido_inquilino" class="fila_33 encabezado_tabla gris">
          apellido
        </div>
        <div id="tabla_mail_inquilino" class="fila_33 encabezado_tabla gris">
          eMail
        </div>
        <div id="cuerpo_tabla_inq">
          <div class="tabla_torre_1">
            <div class="locales_torre_1"></div>
            <div class="pb_torre_1"></div>
            <div class="dptos_torre_1"></div>
          </div>
          <div class="tabla_torre_2">
            <div class="locales_torre_2"></div>
            <div class="pb_torre_2"></div>
            <div class="dptos_torre_2"></div>
          </div>
          <div class="tabla_torre_3">
            <div class="locales_torre_3"></div>
            <div class="pb_torre_3"></div>
            <div class="dptos_torre_3"></div>
          </div>
          <div class="tabla_torre_4">
            <div class="locales_torre_4"></div>
            <div class="pb_torre_4"></div>
            <div class="dptos_torre_4"></div>
          </div>
        </div>
      </div>
   </div>
   <p>*El consorcista completará el resto de sus datos cuando ingrese a su perfil (Ej: Celular, Teléfono del trabajo, DNI)</p>
  </div>
</div><!-- form agrupacion--> 