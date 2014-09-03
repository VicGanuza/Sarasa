<div id="formulario_persona" class="validationEngineContainer">
   <div class="notes">
     <div class="coments coment1">
       <div><span class="orange">*</span>
         Datos obligatorios a ser expuestos en reportes del consorcio
        </div>
     </div>
     <div class="coments coment2">
       <div> Tus datos no serán compartidos bajo ningún concepto.</div>
     </div>
   </div>
   <div id="form_1" class="formulario_altas">
    <div class="datos">
     <div class="dato_input">
       <p><span class="orange">*</span> Nombre</p>
       <input type="text" name="nombre" class="validate[required]">
     </div>
     <div class="dato_input">
       <p><span class="orange">*</span> Apellido</p>
       <input type="text" name="apellido" class="validate[required]">
     </div>
     <div class="dato_input">
       <input type="checkbox" name="razon_social" id="razon_social">
       <div class="dato_razonSoc">
         <p>Razón social</p>
      	 <input type="text" name="raz_social" disabled>
       </div>
     </div>
     <div class="dato_input agregar_foto">
       <div id="add_foto" class="table_row">
         <img src="images/icon_agregar.png" class="pointer">
         <span class="orange vertical_aling">Agreg&aacute; la foto de tu perfil</span>
       </div>
       <div id="edit_foto" class="table_row display_none">
         <img class="foto_usuario" src="images/foto.jpg">
         <span class="orange vertical_aling pointer">Editar foto</span>
       </div> 
     </div>
     </div>
     <div class="datos_large">
     <div class="dato_mail">
       <p><span class="orange">*</span> e-mail (será tu nombre de usuario) </p>
       <input type="text" name="email" class="input_large validate[required, custom[email]]">
     </div>
     <div class="dato_mail">
       <p><span class="orange">*</span> Contraseña (mínimo 6 caracteres) </p>
       <input type="password" name="contrasena" id="contrasena" class="input_large validate[required]">
       <span class="grey left">La contraseña debe contener letras y números</span>
     </div>
     <div class="dato_mail button_20">
       <p><span class="orange">*</span> Repetir contraseña </p>
       <input type="password" name="rep_contra" class="input_large validate[required,equals[contrasena]]">
     </div>
     </div>
     <div class="datos_large">
     <div class="orange" style="margin-top: 40px;">Domicilio</div>
     <div class="dato_input">
         <p>Calle</p>
         <input type="text" name="calle">
       </div>
       <div class="dato_input small_input">
         <p>Nro.</p>
         <input type="text" name="nro_calle" class="input_small">
       </div>
       <div class="dato_input small_input">
         <p>Piso</p>
         <input type="text" name="piso" class="input_small">
       </div>
       <div class="dato_input small_input">
         <p>Dpto.</p>
         <input type="text" name="departamento" class="input_small">
       </div>
       <div class="dato_input">
        <p> <span class="orange">*</span> Provincia </p>
         <select id="provincia" class="validate[required]">
           <option value=""></option>
           <option value="Buenos Aires">Buenos Aires</option>
           <option value="Cordoba">Cordoba</option>
           <option value="Neuquen">Neuquen</option>
           <option value="Rio Negro">Rio Negro</option>
         </select>
       </div>
       <div class="dato_input">
        <p> <span class="orange">*</span> Localidad </p>
         <select id="localidad" class="validate[required]">
           <option value=""></option>
           <option value="Buenos Aires">Buenos Aires</option>
           <option value="Cordoba">Cordoba</option>
           <option value="Neuquen">Neuquen</option>
           <option value="Viedma">Viedma</option>
         </select>
       </div>
       </div>
       <div class="datos">
       <div class="dato_input">
        <p> Teléfono fijo </p>
         <input type="text" name="fijo">
       </div>
       <div class="dato_input">
        <p> <span class="orange">*</span> Teléfono de emergencias </p>
         <input type="text" name="emergencia" class="validate[required, custom[phone]]">
       </div>
       <div class="dato_input large_input">
        <p> <span class="orange">*</span> CUIT </p>
         <input type="text" name="Cuit" class="input_large" class="validate[required]">
       </div>
       </div>
       <div class="datos">
       <div class="dato_input large_input">
        <p> Matricula RPA </p>
         <input type="text" name="mat_rpa" class="input_extralarge">
       </div>
       </div>
   </div><!-- form_1-->
   <div class="error display_none">
     Faltan completar datos
   </div>
</div> <!-- formulario-personas-->
