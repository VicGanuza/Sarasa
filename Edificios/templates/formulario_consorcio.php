<div id="formulario_consorcio" class="display_none">
  <div class="notes">
     <div class="coments coment1">
       <div><span class="orange">*</span>
         Datos oligatorios a ser expuestos en reportes del consorcio
        </div>
        <div><span class="blue">**</span>
         Datos a ser expuestos en reportes del consorcio
        </div>
     </div>
     <div class="coments coment2">
       <div> Tus datos no seran compartidos bajo ningun concepto.</div>
       <div>Podrás dar de baja el consorcio cuando quieras.</div>
     </div>
   </div>
   <!-- Formulario Alta consorcio -->
   <div id="form_2" class="formulario_altas">
   <div class="datos">
    <div class="dato_input">
    <p>  <span class="orange">*</span>
      <span class="blue">**</span> Nombre del consorcio </p>
      <input type="text" name="nombre_consorcio" class="validate[required]">
    </div>
    <div class="dato_input">
    <p>  <span class="orange">*</span>
      <span class="blue">**</span> Razon social </p>
      <input type="text" name="razon_soc_consorcio" class="validate[required]">
    </div>
    <div class="dato_input">
    <p>  <span class="orange">*</span>
      <span class="blue">**</span> Calle </p>
      <input type="text" name="calle_consorcio" class="validate[required]">
    </div>
    <div class="dato_input small_input">
    <p>  <span class="orange">*</span>
      <span class="blue">**</span> Nro. </p>
      <input type="text" name="nro_calle_consorcio" class="input_small validate[required,custom[number]]">
    </div>
    <div class="dato_input">
    <p>  <span class="orange">*</span>
      <span class="blue">**</span> Categoria </p>
      <select id="categoria" class="validate[required]">
        <option value=""></option>
        <option value="1">A1</option>
        <option value="2">A</option>
        <option value="3">B</option>
        <option value="4">C</option>
        <option value="5">D</option>
      </select>
    </div>
    </div>
    <div class="datos">
    <div class="dato_input">
    <p>  <span class="orange">*</span> Localidad </p>
      <select id="localidad_consorcio" class="validate[required]">
        <option value=""></option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Cordoba">Córdoba</option>
        <option value="Neuquen">Neuquén</option>
        <option value="Viedma">Viedma</option>
      </select>
    </div>
    <div class="dato_input">
    <p>    <span class="orange">*</span> Provincia </p>
        <select id="provincia_consorcio" class="validate[required]">
          <option value=""></option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Cordoba">Córdoba</option>
          <option value="Neuquen">Neuquén</option>
          <option value="Rio Negro">Rio Negro</option>
        </select>
    </div>
    <div class="dato_input">
    <p>  Codigo Postal </p>
      <input type="text" name="cp_consorcio">
    </div>
    </div>
    <div class="datos_large">
    <div class="dato_input">
    <p>  <span class="orange">*</span>
      <span class="blue">**</span> Cuit </p>
      <input type="text" name="Cuit" class="validate[required]">
    </div>
    <div class="dato_input">
    <p>  <span class="orange">*</span>IVA </p>
      <select id="iva" class="validate[required]">
        <option value=""></option>
        <option value="1">Responsable Inscripto</option>
        <option value="2">Monotributista</option>
        <option value="3">Excento</option>
        <option value="4">Consumidor final</option>
      </select>
      <span class="grey left">A efecto de la facturacion de CA</span>
    </div>
    </div>
    <div class="datos">
    <div class="dato_input">
    <p>  <span class="blue">**</span>Matricula F.A.T.E.R.Y.H. </p>
      <input type="text" name="mat_fat">
    </div>
    <div class="dato_input">
    <p>  <span class="blue">**</span>Matricula S.U.T.E.R.H. </p>
      <input type="text" name="mat_sut">
    </div>
    </div>
  </div><!-- Formulario Alta consorcio-->
</div>