<div id="formulario_persona" class="display_none">
   <div class="notes">
     <div class="coment1">
       <div><span class="orange">*</span>
         Datos oligatorios a ser expuestos en reportes del consorcio
        </div>
     </div>
     <div class="coment2">
       <div> Tus datos no seran compartidos bajo ningun concepto.</div>
     </div>
   </div>
   <div id="form_1" class="formulario_altas">
     <div class="dato_input">
       <span class="orange">*</span> Nombre
       <input type="text" name="nombre">
     </div>
     <div class="dato_input">
       <span class="orange">*</span> Apellido
       <input type="text" name="apellido">
     </div>
     <div class="dato_input">
       <input type="checkbox" name="razon_social" id="razon_social">
       <div class="dato_razonSoc">
         Razon social
      	 <input type="text" name="raz_social" disabled>
       </div>
     </div>
     <div class="dato_input agregar_foto">
       <div id="add_foto"  class="display_none">
         <img src="images/icon_agregar.png">
         <span class="orange">Agreg&aacute; la foto de tu perfil</span>
       </div>
       <div id="edit_foto">
         <img class="foto_usuario" src="images/foto.jpg">
         <span class="orange">Editar foto</span>
       </div> 
     </div>
     <div class="dato_mail">
       <span class="orange">*</span> e-mail (sera tu nombre de usuario)
       <input type="text" name="email">
     </div>
     <div class="dato_mail">
       <span class="orange">*</span> Contraseña (minimo 6 caracteres)
       <input type="password" name="contrasena">
       <span class="grey left">La contraseña debe contener letras y numeros</span>
     </div>
     <div class="dato_mail button_20">
       <span class="orange">*</span> Repetir contraseña
       <input type="password" name="rep_contra">
     </div>
     <div class="dato_input">
       <div class="orange">Domicilio</div>
         Calle
         <input type="text" name="calle">
       </div>
       <div class="dato_input small_input top_40">
         Nro.
         <input type="text" name="nro_calle">
       </div>
       <div class="dato_input small_input top_40">
         Piso
         <input type="text" name="piso">
       </div>
       <div class="dato_input small_input top_40">
         Dpto.
         <input type="text" name="departamento">
       </div>
       <div class="dato_input top_40">
         <span class="orange">*</span> Provincia
         <select id="provincia">
           <option value=""></option>
           <option value="Buenos Aires">Buenos Aires</option>
           <option value="Cordoba">Cordoba</option>
           <option value="Neuquen">Neuquen</option>
           <option value="Rio Negro">Rio Negro</option>
         </select>
       </div>
       <div class="dato_input top_40">
         <span class="orange">*</span> Localidad
         <select id="localidad">
           <option value=""></option>
           <option value="Buenos Aires">Buenos Aires</option>
           <option value="Cordoba">Cordoba</option>
           <option value="Neuquen">Neuquen</option>
           <option value="Viedma">Viedma</option>
         </select>
       </div>
       <div class="dato_input">
         Telefono fijo
         <input type="text" name="fijo">
       </div>
       <div class="dato_input">
         <span class="orange">*</span> Telefono de emergencias
         <input type="text" name="emergencia">
       </div>
       <div class="dato_input">
         <span class="orange">*</span> Cuit
         <input type="text" name="Cuit">
       </div>
       <div class="dato_input large_input">
         Matricula RPA
         <input type="text" name="mat_rpa">
       </div>
   </div><!-- form_1-->
   <div class="error display_none">
     Faltan completar datos
   </div>
</div> <!-- formulario-personas-->
