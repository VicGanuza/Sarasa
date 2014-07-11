<div id="form_agrupacion" class="display_none"><!-- class="display_none"-->
   <h4 class="orange">Agrup&aacute; las UF secundarias arrastr&aacute;ndolas hasta las principales.</h4>
   <p>Para desasociar una UF secundaria de una principal, simplemente arrastras el ícono hacia afuera de la UF primaria, o bien, hacés doble click sobre el ícono en el cuadro de las UF secundarias.</p>
   <div>
       <form class="left">
         <input type="checkbox" name="agrupacion">Habilitar agrupaci&oacute; de UF cruzadas
       </form>
       <div class="icono_info" title="Esta opci&oacute;n permite agrupar UFs secundarias configuradas en una torre, con UFs principales configuradas en otra."></div>
    </div>
  <div class="cuerpo">
  
   <div class="columna_izquierda">
     <div class="encabezado">
       Uf secundarias
     </div>
     <hr>
     <div id="uf_secundarias"> 
     <div  class="tabs">
      <!--<div class="tab_agrupacion tabsec_activa sec_torre-1">Torre 1</div>
      <div class="tab_agrupacion sec_torre-2">Torre 2</div>
      <div class="tab_agrupacion sec_torre-3">Torre 3</div>
      <div class="tab_agrupacion sec_torre-4">Torre 4</div>-->
     </div>

     <div id="sec_content"> 
      <div class="sec_form">
        <div id="cochera_cub" class="display_none">
         <div class="logo">
          <img src="images/Logo_techadas.png">
         </div>
         <h6>Cocheras Cubiertas</h6>
         <div id="list_cc" class="vista_comercios"></div>
         <hr>
        </div>
        <div id="coch_desc" class="display_none">
         <div class="logo">
          <img src="images/Logo_Destechadas.png">
         </div>
         <h6>Cocheras Descubiertas</h6>
         <div id="list_dc" class="vista_comercios"></div>
         <hr>
        </div>
        <div id="baulera" class="display_none">
         <div class="logo">
          <img src="images/Logo_baulera.png">
         </div>  
         <h6>Bauleras</h6>
         <div id="list_b" class="vista_comercios"></div>
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
       <!--<div class="tab_agrupacion tabprim_activa prim_torre-1">Torre 1</div>
       <div class="tab_agrupacion prim_torre-2">Torre 2</div>
       <div class="tab_agrupacion prim_torre-3">Torre 3</div>
       <div class="tab_agrupacion prim_torre-4">Torre 4</div>-->
      </div>
       
      <div id="prim_content">  
       <div class="prim_form">
         <div id="edif_dibujo_uf_prim" class="row demo dibujo_edif">
          <div id="edificio_uf_prim" class='largo-total gutter-large columns'></div>
        </div>
        <div id="numeracion_uf_prim" class="num_class row demo">
          <div id="pisos_num_uf_prim" class="largo-total gutter-large columns"></div>
        </div> 
       </div>        
      </div>        
      </div> 
    </div>
   
  </div>
  <div>
  <h4 class="orange left">Ya agrupastes las UF, Ahora asocialas con sus consorcistas</h4>
  <p class="left">Eleg&iacute; una de las opciones.</p>
  <hr>
  <div class="mitad">
    <div class="opciones">1</div>
    <span class="blue">Complet&aacute; los datos de la tabla de abajo</span>
  </div>
  <div class="mitad">
    <div class="opciones">2</div>
    <div class="blue">¿Ya ten&eacute;s estos datos en Excel?</div>
    <div class="texto">Aprovech&aacute;.Baj&aacute; esta tabla, editala, guardala en tu computadora y subila.</div>
    <div class="excel">
      <img src="images/bajar_excel.png">
      Bajar excel
    </div>
    <div class="excel">
      <img src="images/subir_excel.png">
      Subir excel
    </div>
  </div>
  <div class="full">
    <div class="principales">
      <div class="margin-top_20">  </div>
      <div id="tabla_torre" class="tabla_torre_class encabezado_tabla oscuro">
        torre
      </div>
      <div id="tabla_uf_prim" class="tabla_uf_prim_class encabezado_tabla oscuro">
        uf. primarias
      </div>
      <div id="cuerpo_tabla_edif"></div>
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
        <div id="cuerpo_tabla_sec"></div>
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
        </div>
      </div>
   </div>
   <p>*El consorcista completar&aacute; el resto de sus datoa cuando ingrese a su perfil (Ej: Celular, Tel&eacute;fono del trabajo, DNI)</p>
  </div>
</div><!-- form agrupacion--> 