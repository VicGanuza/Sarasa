$(document).ready(function(){

    /*tooltips*/
    $('.formulario').on('mouseenter','.tooltips',function(event){
        $("#flotante").html($(this).attr("content"));
        $("#flotante").css({left:event.pageX+5, top:event.pageY+5, display:"block"});
    });

    $(".formulario").on('mouseleave','.tooltips',function(event){
        // Escondemos el div flotante
        $("#flotante").hide();
    });

    $('.contactenos').on('click', function(){
        $('.flecha').fadeIn(200);
        $('#contacto').css('top','145px');
        $('#contacto').css('left','634px');
        $('#contacto').css('border', '3px solid #E68C28');
        $('#contacto').css('width','255');
        $('#contacto').fadeIn(200);
    });

    $('.contactar').on('click',function(){
        $('.flecha').hide();
        $('#contacto').hide();
    });

    $('.ver_terminos').on('click',function(){
        $('#terminos').fadeIn(200);
    });

    $('.leido').on('click',function(){
        $('#terminos').hide();
    });

    var nro_fila = 1;
    /* Ingreso de formulario*/
    $('#razon_social').on('click',function(){

        if ($('input:checkbox[name=razon_social]:checked').val()){
            $('input[name="raz_social"]').attr('disabled',false);
        }
        else{
            $('input[name="raz_social"]').attr('disabled',true);
        }
    });

    $('#no_torres_iguales').on('click',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
         $('.torre_'+i+' #habilitar_unidadesFuncionales').addClass('display_none');
         $('.torre_'+i+' #habilitar_unidadesOtras').removeClass('display_none');
        }
    });

    $('#torres_iguales').on('click',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            $('.torre_'+i+' #habilitar_unidadesFuncionales').addClass('display_none');
            $('.torre_'+i+' #habilitar_unidadesOtras').removeClass('display_none');
        }
    });

    $('#torres_person').on('click', function(){
        $('#carga_torres').css('top','200px');
        $('.dialogs').fadeIn(200);
        $('#carga_torres').fadeIn(200);
    });

    /*Click en los pasos para poder modificar o corregir pasos anteriores*/
    $('.menu_pasos').on('click','.paso_accesible',function(){
        var paso=$(this).attr('id');
        if(paso=="paso_1"){
            $('#titulo_header .content').html('Alta de administrador');
            $('#titulo .titles').html('Bienvenido a <span class="blue">Consorcio</span>abierto.');
            $('#titulo .subtitles').html('Ingresa tus datos y empeza a optimizar tu manera de trabajar.');

            $('#formulario_concorcio').addClass('display_none');
            $('#form_agrupacion').addClass('display_none');
            $('#estructura_edificio').addClass('display_none');
            $('#formulario_persona').removeClass('display_none');
            $('#confirmar_paso2').addClass('display_none');
            $('.terminos').removeClass('display_none');
            $('#confirmar_paso1').removeClass('display_none');
            $('#confirmar_paso3').addClass('display_none');
            $('#confirmar_paso4').addClass('display_none');
            $('#consorcio_agrup').addClass('display_none');
            for (i=2;i<4;i++){
                $('#paso_'+i).removeClass('paso_accesible');
            }
        }
        else{ if (paso=="paso_2"){
                $('#titulo_header .content').html('Alta de consorcio');
                $('#titulo .titles').html('Ingres&aacute; los datos del consorcio a configurar.');
                $('#titulo .subtitles').html('');
                $('#formulario_concorcio').removeClass('display_none');
                $('#formulario_persona').addClass('display_none');
                $('#estructura_edificio').addClass('display_none');
                $('#form_agrupacion').addClass('display_none');
                $('#confirmar_paso2').removeClass('display_none');
                $('.terminos').addClass('display_none');
                $('#confirmar_paso1').addClass('display_none');
                $('#confirmar_paso3').addClass('display_none');
                $('#confirmar_paso4').addClass('display_none');
                $('#consorcio_agrup').addClass('display_none');
                for (i=3;i<4;i++){
                $('#paso_'+i).removeClass('paso_accesible');
            }
             }
             else{
                if (paso=="paso_3"){
                    $('#titulo_header .content').html('Configuraci&oacute;n de la estructura f&iacute;sica del consorcio');
                    $('#titulo .titles').html('Diagram&aacute; la estructura f&iacute;sica del edificio.');
                    $('#titulo .subtitles').html('');
                    $('#formulario_concorcio').addClass('display_none');
                    $('#formulario_persona').addClass('display_none');
                    $('#estructura_edificio').removeClass('display_none');
                    $('#form_agrupacion').addClass('display_none');
                    $('#consorcio_agrup').addClass('display_none');

                    $('#confirmar_paso2').addClass('display_none');
                    $('.terminos').addClass('display_none');
                    $('#confirmar_paso1').addClass('display_none');
                    $('#confirmar_paso2').addClass('display_none');
                    $('#confirmar_paso3').removeClass('display_none');
                    $('#confirmar_paso4').addClass('display_none');
                }
             }
        }
    });

    $('#confirmar_paso1').on('click',function(){
        $('#titulo_header .content').html('Alta de consorcio');
        $('#paso_1').addClass('paso_done');
        $('#paso_1').addClass('paso_accesible');
        $('#paso_2').removeClass('paso_grey');
        $('#titulo .titles').html('Ingres&aacute; los datos del consorcio a configurar.');
        $('#titulo .subtitles').html('');

        $('.terminos').addClass('display_none');
        $('#confirmar_paso1').addClass('display_none');
        $('#confirmar_paso2').removeClass('display_none');
        $('#formulario_persona').addClass('display_none');
        $('#formulario_concorcio').removeClass('display_none');
    });


    $('#confirmar_paso2').on('click',function(){
        $('#titulo_header .content').html('Configuraci&oacute;n de la estructura f&iacute;sica del consorcio');
        $('#paso_2').addClass('paso_done');
        $('#paso_2').addClass('paso_accesible');
        $('#paso_3').removeClass('paso_grey');
        $('#titulo .titles').html('Diagram&aacute; la estructura f&iacute;sica del edificio.');

        $('#formulario_concorcio').addClass('display_none');
        $('#confirmar_paso2').addClass('display_none');
        $('#confirmar_paso3').removeClass('display_none');
        /*Falta validar formulario dos*/
        $('#estructura_edificio').removeClass('display_none');
    });


    $('#confirmar_paso3 img').on('click',function(){
        $('#titulo_header .content').html('AGRUPACIÓN E IDENTIFICACIÓN DE UNIDADES FUNCIONALES');
        $('#paso_3').addClass('paso_done');
        $('#paso_3').addClass('paso_accesible');
        $('#paso_4').removeClass('paso_grey');
        $('#consorcio_agrup').removeClass('display_none');
        $('#titulo .titles').html('AGRUPÁ E IDENTIFICÁ LAS UF CON SUS CONSORCISTAS');
        
        $('#confirmar_paso3').addClass('display_none');
        $('#confirmar_paso4').removeClass('display_none');
        $('#estructura_edificio').addClass('display_none');
        $('#form_agrupacion').removeClass('display_none');
    
        $('#uf_secundarias .torre_1').removeClass('display_none');
        $('#uf_primarias .torre_1').removeClass('display_none');
    });


    /* Funcionalidad formar edificio*/
    /*Nombre de las torres*/
    $('#deno_alfa').on('click',function(){
        var Abc="ABCD";
        var cant_torres=$('#cant_torres').val();
        for (i=1;i<=cant_torres;i++){
          $('#torres_list .tab_'+i).html('Torre '+Abc.charAt(i-1));
          $('#dibujos_list .dibujo_'+i).html('Torre '+Abc.charAt(i-1));
          $('#person_torres .tab_person_'+i).html('Torre '+Abc.charAt(i-1));
          $('#uf_secundarias .sec_torre-'+i).html('Torre '+Abc.charAt(i-1));
          $('#uf_primarias .prim_torre-'+i).html('Torre '+Abc.charAt(i-1));
          $('.nombre_torre_'+i).html('Torre '+Abc.charAt(i-1));
        }
    });

    $('#deno_num').on('click',function(){
        var cant_torres=$('#cant_torres').val();
        for (i=1;i<=cant_torres;i++){
          $('#torres_list .tab_'+i).html('Torre '+i);
          $('#dibujos_list .dibujo_'+i).html('Torre '+i);
          $('#person_torres .tab_person_'+i).html('Torre '+i);
          $('#uf_secundarias .sec_torre-'+i).html('Torre '+i);
          $('#uf_primarias .prim_torre-'+i).html('Torre '+i);
        }
    });
    
    $('.inner_perso').on('blur','.denom_torre',function(){
        var torre=$(this).attr('id').split('_')[2];
        var nombre=$('#nom_torre_'+torre).val();

        $('#torres_list .tab_'+torre).html(nombre);
        $('#dibujos_list .dibujo_'+torre).html(nombre);
        $('#person_torres .tab_person_'+torre).html(nombre);
        $('#uf_secundarias .sec_torre-'+torre).html(nombre);
        $('#uf_primarias .prim_torre-'+torre).html(nombre);
    });

    $('#checked_torre').on('click',function(){
      $('#carga_torres').hide();
      $('.dialogs').hide();
      $('#torres_person').attr('checked', false);
    });
   
    /*Paleta de colores*/
    $('.color-picker').on('click',function() {
      $('#color-picker-container').fadeIn(200); 
      $('.dialogs').fadeIn(200); 
    });
    $('#color-picker-container .content').click(function(event) { event.stopPropagation(); });
      
    $('#color-picker-container').click(function() { 
        $('#color-picker-container').fadeOut(200);  
        $('.dialogs').fadeOut(200);
    });

    $('.square').on('click',function(){
        var color=$(this)[0].className.split(' ')[1].split('-')[1];

        $('#encabezado_consorcio .icono').addClass('bcolor-'+color);
        $('#nombre_edif').addClass('color-'+color);

        $('#consorcio_agrup .icono').addClass('bcolor-'+color);
        $('#nombre_edif_agrup').addClass('color-'+color);
    });



    /*al cargar la cantidad de torres, genera las pestañas correspondientes*/
    $('#cant_torres').on('change',function(){
        var Abc="ABCD";
        var cant_torres=$(this).val();
        $('.inner_perso').empty();
        $('.inner_deno').empty();
        
        if (cant_torres>1){
          $('#torres_iguales').prop('disabled',false);
          $('#no_torres_iguales').prop('disabled',false);
        }
        if (cant_torres==1){
            $('.torre_1 #habilitar_unidadesFuncionales').addClass('display_none');
        }
        $('#torres_list').empty();
        $('#dibujos_list').empty();
        $('#person_torres').empty();

        $('#uf_secundarias .tabs').empty();
        $('#uf_primarias .tabs').empty();

        var agrup_form=$('body').find('.sec_form').html();
        var prim_form=$('body').find('.prim_form').html();

        $('#todas .linea_horizontal').addClass('display_none');
        var todas_form=$('body').find('#todas').html();

        $('.inner_all_left').empty();
        $('.inner_all_right').empty();
        $('.inner_all').addClass('display_none');
        $('#sec_content').empty();
        $('#prim_content').empty();
        
        var form_html = $('body').find('.torre_form').html();
        var dibujo_form = $('body').find('.dibujo').html();
        $('#tab_content').empty();
        $('#dib_content').empty();

        if (cant_torres>0){
            $('.inner_perso').append('<input type="text" class="denom_torre personal" id="nom_torre_1">');
            $('#deno_alfa .inner_deno').append('Torre A ');
            $('#deno_num .inner_deno').append('Torre 1 ');

            /*carga los tabs de los forms de datos*/
            $('#torres_list').append('<li class="tab_1 tab_activa tab_navegate">Torre 1</li>');
            $('#tab_content').append('<div class="torre_1 torre_form"></div>');
            $('.torre_1').html(form_html);

            /*carga los tabs de los dibujos*/
            $('#dibujos_list').append('<div class="dibujo_1 ver_torre activa dib_navegate"> torre 1 </div>');
            $('#dib_content').append('<div class="dibujoT_1 dibujo"></div>');
            $('.dibujoT_1').html(dibujo_form);

            /*carga los tabs de los dibujos personalizados*/
            $('#person_torres').append('<div class="tab_person_1 person_navegate">torre 1</div>');

            /*Carga de los tabs de agrupacion primarias*/
            $('#uf_primarias .tabs').append('<div class="tab_agrupacion prim_torre-1 tabprim_activa prim_navegate">Torre 1</div>');
            $('#prim_content').append('<div class="torre_1 prim_form display_none"></div>');
            $('#prim_content .torre_1').html(prim_form);

            /*Carga de los tabs de agrupacion secundarias*/
            $('#uf_secundarias .tabs').append('<div class="tab_agrupacion tabsec_activa sec_navegate sec_torre-1">Torre 1</div>');
            $('#sec_content').append('<div class="torre_1 sec_form display_none"></div>');
            $('#sec_content .torre_1').html(agrup_form);

            /*Carga de la torre en la vista Ver Todas*/

            $('.inner_all_left').append('<div id="todas_1" class="bloque_torre"></div>');
            $('.inner_all_left #todas_1').html(todas_form);
            $('#todas_1 .torre_name').addClass('nombre_torre_1');

            for (i=2;i<=cant_torres;i++){
                $('.inner_perso').append('<input type="text" class="denom_torre" id="nom_torre_'+i+'">');
                $('#deno_alfa .inner_deno').append('Torre '+Abc.charAt(i-1)+' ');
                $('#deno_num .inner_deno').append('Torre '+i+' ');

                /*carga los tabs de los forms de datos*/
                $('#torres_list').append('<li class="tab_'+i+' tab_navegate">Torre '+i+'</li>');
                $('#tab_content').append('<div class="torre_'+i+' display_none torre_form"></div>');
                $('.torre_'+i).html(form_html);

                /*carga los tabs de los dibujos*/
                $('#dibujos_list').append('<div class="dibujo_'+i+' ver_torre dib_navegate"> torre '+i+' </div>');
                $('#dib_content').append('<div class="dibujoT_'+i+' dibujo display_none"></div>');
                $('.dibujoT_'+i).html(dibujo_form);

                /*carga los tabs de los dibujos personalizados*/
                $('#person_torres').append('<div class="tab_person_'+i+' person_navegate">torre '+i+'</div>');

                /*Carga de los tabs de agrupacion primarias*/
                $('#uf_primarias .tabs').append('<div class="tab_agrupacion prim_torre-'+i+' prim_navegate">Torre '+i+'</div>');
                $('#prim_content').append('<div class="torre_'+i+' prim_form display_none"></div>');
                $('#prim_content .torre_'+i).html(prim_form);

                /*Carga de los tabs de agrupacion secundarias*/
                $('#uf_secundarias .tabs').append('<div class="tab_agrupacion sec_navegate sec_torre-'+i+'">Torre '+i+'</div>');
                $('#sec_content').append('<div class="torre_'+i+' sec_form display_none"></div>');
                $('#sec_content .torre_'+i).html(agrup_form);

                /*Carga de la torre en la vista Ver Todas*/
                if (i%2==0){
                    $('.inner_all_left').append('<div class="linea_vertical"></div>');
                    $('.inner_all_right').append('<div id="todas_'+i+'" class="bloque_torre"></div>');
                    $('.inner_all_right #todas_'+i).html(todas_form);
                }
                else{
                    $('.inner_all_left').append('<div id="todas_'+i+'" class="bloque_torre"></div>');
                    $('.inner_all_left #todas_'+i).html(todas_form);
                }
                
                $('#todas_'+i+' .torre_name').addClass('nombre_torre_'+i);
                $('#todas_'+i+' .nombre_torre_'+i).html('torre '+i);

            }
            $('#torres_list').append('<li class="ver_todas">ver todas</li>');
            $('#dibujos_list').append('<div class="ver_todas"><p style="width:50px; float:left;"> ver todas </p><img src="images/ver_todas_dib.png"></div>');

            if (cant_torres>2) {
                $('#todas_1 .linea_horizontal').removeClass('display_none');
            }

            if (cant_torres>3){
                $('#todas_2 .linea_horizontal').removeClass('display_none');
            }
        }
    });

    $('#torres_tabs').on('click','.tab_navegate',function(){
        var clase = $(this)[0].className.split(' ')[0];
        var nro = clase.split('_')[1];
        $('#torres_list li').removeClass('tab_activa');
        $('#tab_content div').addClass('display_none');
        $('#tab_content .torre_'+nro).removeClass('display_none');
        $('#tab_content .torre_'+nro+' div').removeClass('display_none');
        $(this).addClass('tab_activa');

        $('#dibujos_list div').removeClass('activa');
        $('#dib_content .dibujo').addClass('display_none');
        $('.dibujoT_'+nro).removeClass('display_none');
        if ($('.dibujoT_'+nro+' #edif_dibujo').hasClass('display_none')!=true) {
          $('.dibujoT_'+nro+' .mensaje').addClass('display_none');
        }
        $('.dibujo_'+nro).addClass('activa');
    });

    $('#tabs_dibujo').on('click','.dib_navegate',function(){
        var clase = $(this)[0].className.split(' ')[0];
        var nro = clase.split('_')[1];
        $('#dibujos_list div').removeClass('activa');
        $('#dib_content .dibujo').addClass('display_none');
        $('.dibujoT_'+nro).removeClass('display_none');
        $('.dibujoT_'+nro).removeClass('display_none');
        $(this).addClass('activa');

        $('#torres_list li').removeClass('tab_activa');
        $('#tab_content div').addClass('display_none');
        $('#tab_content .torre_'+nro).removeClass('display_none');
        $('#tab_content .torre_'+nro+' div').removeClass('display_none');
        $('.tab_'+nro).addClass('tab_activa');
    });
   
    /*Si tiene unidades funcionales: Genera las opciones del select de las unidades funcionales en la PB y los pisos*/
    $('#tab_content').on('click','.uni_pb',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var cant_torres = $('#cant_torres').val();

        if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            
            $('.no_uni_pb').removeAttr('checked');
            $('.uni_pb').attr('checked', true);  
         for (i=1;i<=cant_torres;i++) {
           $('.torre_'+i+' #cant_pisos').empty();
           $('.torre_'+i+' #unidades_pb').empty();
           $('.torre_'+i+' #unidades_pb').prop('disabled',false);
           $('.torre_'+i+' #cant_pisos').prop('disabled',false);
           $('.torre_'+i+' #cant_pisos').append('<option value="0"></option>');
           $('.torre_'+i+' #unidades_pb').append('<option value="0"></option>');
           for (j=1;j<11;j++) {
              $('.torre_'+i+' #unidades_pb').append('<option value="'+j+'">'+j+'</option>');
           }
           for (j=1;j<31;j++) {
              $('.torre_'+i+' #cant_pisos').append('<option value="'+j+'">'+j+'</option>');
           }
         }
        }
        else{
          $('.'+torre+' #cant_pisos').empty();
          $('.'+torre+' #unidades_pb').empty();
          $('.'+torre+' #unidades_pb').prop('disabled',false);
          $('.'+torre+' #cant_pisos').prop('disabled',false);
          $('.'+torre+' #cant_pisos').append('<option value="0"></option>');
          $('.'+torre+' #unidades_pb').append('<option value="0"></option>');
          for (i=1;i<11;i++) {
             $('.'+torre+' #unidades_pb').append('<option value="'+i+'">'+i+'</option>');
          }
          for (i=1;i<31;i++) {
             $('.'+torre+' #cant_pisos').append('<option value="'+i+'">'+i+'</option>');
          }
        }
    });

    /* Si no tiene unidades en la PB, solo genera las opciones del select de los pisos*/
    $('#tab_content').on('click','.no_uni_pb',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var cant_torres = $('#cant_torres').val();

        if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            $('.no_uni_pb').attr('checked', true);
            $('.uni_pb').removeAttr('checked');
         for (i=1;i<=cant_torres;i++) {
           $('.torre_'+i+' #unidades_pb').prop('disabled',true);
           $('.torre_'+i+' #unidades_pb option[value="0"]').attr('selected',true);
           $('.torre_'+i+' #cant_pisos').prop('disabled',false);
           $('.torre_'+i+' #unidades_pb').empty();
           $('.torre_'+i+' #cant_pisos').empty();
           $('.torre_'+i+' #cant_pisos').append('<option value="0"></option>');

           for (j=1;j<31;j++) {
              $('.torre_'+i+' #cant_pisos').append('<option value="'+j+'">'+j+'</option>');
           }
         }
        }
        else{
          $('.'+torre+' #unidades_pb').prop('disabled',true);
          $('.'+torre+' #unidades_pb option[value="0"]').attr('selected',true);
          $('.'+torre+' #cant_pisos').prop('disabled',false);
          $('.'+torre+' #unidades_pb').empty();
          $('.'+torre+' #cant_pisos').empty();
          $('.'+torre+' #cant_pisos').append('<option value="0"></option>');
          for (i=1;i<31;i++) {
             $('.'+torre+' #cant_pisos').append('<option value="'+i+'">'+i+'</option>');
          }
       }
    });

    /*Cuando cambia la cantidades de unidades funcionales en la planta baja*/
    $('#tab_content').on('change','#unidades_pb', function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var nro = torre.split('_')[1];
        var cant_torres = $('#cant_torres').val();
        var cant_uni = this.value;

         if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            for (t=1;t<=cant_torres;t++){
                /*Se asigna la misma cantidad de pisos a las otras torres*/
                $('.torre_'+t+'  #unidades_pb option[value='+ cant_uni +']').attr("selected",true);
            }
        }
    });

    /*Cuando cambia la cantidad de pisos del edificio los dibuja*/
    $('#tab_content').on('change','#cant_pisos', function(){
        var torre = $(this).parent().parent()[0].className.split(' ')[0];
        var nro = torre.split('_')[1];
        var cant_torres = $('#cant_torres').val();
        var tiene_unidades = $('.torre_'+nro+' input:radio[name=unidades_PB]:checked').val();
        var cant_uni = $('.torre_'+nro+' #unidades_pb').val();
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var cantidad_pisos= this.value;
        if (!cant_uni) {
            cant_uni = 0;
        }

        if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            for (t=1;t<=cant_torres;t++){
                /*Se asigna la misma cantidad de pisos a las otras torres*/
                $('.torre_'+t+'  #cant_pisos option[value='+ cantidad_pisos +']').attr("selected",true);

                /*Limpia todos los dibujos para realizar la nueva configuracion*/
                $('.dibujoT_'+t+' #edificio').empty();
                $('.torre_'+t+' #edificio_uf_prim').empty();
                $('.dibujoT_'+t+' #uf_cant').empty();
                $('.dibujoT_'+t+' #pisos_num').empty();
                $('.dibujoT_'+t+' #pisos_num_uf_prim').empty();
                $('#todas_'+t+' #edificio_todas').empty();
                $('#todas_'+t+' #verTodas_num').empty();
                $('#uf_primarias .torre_'+t+' #pisos_num_uf_prim').empty();

                /*Se muestras los dibujos*/
                $('.dibujoT_'+t+' .mensaje').addClass('display_none');
                $('.dibujoT_'+t+' #edif_dibujo').removeClass('display_none');
                $('.dibujoT_'+t+' #numeracion').removeClass('display_none');
                $('#todas_'+t+' .dibujo_torre').addClass('display_none');
                $('#todas_'+t+' #edif_dibujo_todas').removeClass('display_none');
                $('#todas_'+t+' #verTodas_num').removeClass('display_none');

                /* Agrega los pisos en todas las torres del edificio y los nros*/
                for (i=cantidad_pisos; i>0; i--){
                    $('.dibujoT_'+t+' #uf_cant').append('<input type="text" name="piso_'+i+'" size="5" maxlength="50" class="largo-total column piso cant_deptos tooltips" content="Ingresá la cantidad de UF para este piso">');
                    $('.dibujoT_'+t+' #edificio').append('<div id="piso_nro_'+i+'" class="largo-total column piso"></div>');
                    $('#uf_primarias .torre_'+t+' #edificio_uf_prim').append('<div id="uf_prim_piso_nro_'+i+'" class="largo-total column piso"></div>');
                    $('.dibujoT_'+t+' #pisos_num').append('<div id="piso_'+i+'" class="nro_piso">'+i+'</div>');
                    $('#uf_primarias .torre_'+t+' #pisos_num_uf_prim').append('<div class="nro_piso">'+i+'</div>');
                    $('#todas_'+t+' #edificio_todas').append('<div id="todas_piso_nro_'+i+'" class="largo-total column piso"></div>');
                    $('#todas_'+t+' #verTodas_num').append('<div class="nro_piso">'+i+'</div>');
                }

                /* Agrega la planta baja*/
                $('.dibujoT_'+t+' #uf_cant').append('<div id="cant_pb" class="largo-total column piso">'+cant_uni +'</div>');
                $('.dibujoT_'+t+' #edificio' ).append('<div id="pb" class="largo-total column piso"></div>');
                $('#uf_primarias .torre_'+t+' #edificio_uf_prim' ).append('<div id="pb_uf_prim" class="largo-total column piso"></div>');
                $('.dibujoT_'+t+' #pisos_num').append('<div class="nro_piso">PB</div>');
                $('#uf_primarias .torre_'+t+' #pisos_num_uf_prim').append('<div class="nro_piso">PB</div>');
                $('#todas_'+t+' #edificio_todas').append('<div id="pb_todas" class="largo-total column piso"></div>');
                $('#todas_'+t+' #verTodas_num').append('<div class="nro_piso">PB</div>');
        
                /* Agrega las unidades funcionales de la planta baja */
                unidades = cant_uni;
                if (tiene_unidades=='Si') {
                    for (i=1; i<=cant_uni; i++){
                        $('.dibujoT_'+t+' #pb').append('<div id="local_'+i+'" class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                        $('#uf_primarias .torre_'+t+' #pb_uf_prim').append('<div id="local_'+i+'" class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                        $('#todas_'+t+' #pb_todas').append('<div class="dpto-'+unidades+' ver_todas_pb-'+i+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                    }
                }
            }
        
        }
        else {

		    $('.dibujoT_'+nro+' #edificio').empty();
            $('.torre_'+nro+' #edificio_uf_prim').empty();
            $('.dibujoT_'+nro+' #uf_cant').empty();
            $('.dibujoT_'+nro+' #pisos_num').empty();
            $('.dibujoT_'+nro+' #pisos_num_uf_prim').empty();
            $('#todas_'+nro+' #edificio_todas').empty();
            $('#todas_'+nro+' #verTodas_num').empty();
            $('#uf_primarias .torre_'+nro+' #pisos_num_uf_prim').empty();
        
            $('.dibujoT_'+nro+' .mensaje').addClass('display_none');
            $('.dibujoT_'+nro+' #edif_dibujo').removeClass('display_none');
            $('.dibujoT_'+nro+' #numeracion').removeClass('display_none');
            $('#todas_'+nro+' .dibujo_torre').addClass('display_none');
            $('#todas_'+nro+' #edif_dibujo_todas').removeClass('display_none');
            $('#todas_'+nro+' #verTodas_num').removeClass('display_none');

            /* Agrega los pisos del edificio y los nros*/
            for (i=cantidad_pisos; i>0; i--){
                $('.dibujoT_'+nro+' #uf_cant').append('<input type="text" name="piso_'+i+'" size="5" maxlength="50" class="largo-total column piso cant_deptos tooltips" content="Ingresá la cantidad de UF para este piso">');
		    	$('.dibujoT_'+nro+' #edificio').append('<div id="piso_nro_'+i+'" class="largo-total column piso"></div>');
                $('#uf_primarias .torre_'+nro+' #edificio_uf_prim').append('<div id="uf_prim_piso_nro_'+i+'" class="largo-total column piso"></div>');
                $('.dibujoT_'+nro+' #pisos_num').append('<div id="piso_'+i+'" class="nro_piso">'+i+'</div>');
                $('#uf_primarias .torre_'+nro+' #pisos_num_uf_prim').append('<div class="nro_piso">'+i+'</div>');
                $('#todas_'+nro+' #edificio_todas').append('<div id="todas_piso_nro_'+i+'" class="largo-total column piso"></div>');
                $('#todas_'+nro+' #verTodas_num').append('<div class="nro_piso">'+i+'</div>');
		    }

            /* Agrega la planta baja*/
            $('.dibujoT_'+nro+' #uf_cant').append('<div id="cant_pb" class="largo-total column piso">'+cant_uni +'</div>');
            $('.dibujoT_'+nro+' #edificio' ).append('<div id="pb" class="largo-total column piso"></div>');
            $('#uf_primarias .torre_'+nro+' #edificio_uf_prim' ).append('<div id="pb_uf_prim" class="largo-total column piso"></div>');
            $('.dibujoT_'+nro+' #pisos_num').append('<div class="nro_piso">PB</div>');
            $('#uf_primarias .torre_'+nro+' #pisos_num_uf_prim').append('<div class="nro_piso">PB</div>');
            $('#todas_'+nro+' #edificio_todas').append('<div id="pb_todas" class="largo-total column piso"></div>');
            $('#todas_'+nro+' #verTodas_num').append('<div class="nro_piso">PB</div>');
        
            /* Agrega las unidades funcionales de la planta baja */
            unidades = cant_uni;
            if (tiene_unidades=='Si') {
                for (i=1; i<=cant_uni; i++){
                    $('.dibujoT_'+nro+' #pb').append('<div id="local_'+i+'" class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                    $('#uf_primarias .torre_'+nro+' #pb_uf_prim').append('<div id="local_'+i+'" class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                    $('#todas_'+nro+' #pb_todas').append('<div class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                }
            }
        }

        /*Agrega los locales a la tabla final*/
        if (tiene_unidades=='Si') {
            for (i=1; i<=cant_uni; i++){
                if (nro_fila%2==0){
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_torre_class text_tabla celdas">'+nro+'</div>');
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_uf_prim_class text_tabla celdas">Local Comer. '+Abc.charAt(i-1)+'</div>');

                    $( "#cuerpo_tabla_sec" ).append('<div id="cc_local_'+i+'" class="fila_33 celdas par_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="dc_local_'+i+'" class="fila_33 celdas par_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="b_local_'+i+'" class="fila_33 celdas par_sec"></div>');

                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla"><input type="checkbox" id="es_miembro"></div>');

                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');

                     nro_fila++;
                }
                else {
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_torre_class text_tabla celdas impar_ppal">'+nro+'</div>');
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_uf_prim_class text_tabla celdas impar_ppal">Local Comer. '+Abc.charAt(i-1)+'</div>');

                    $( "#cuerpo_tabla_sec" ).append('<div id="cc_local_'+i+'" class="fila_33 celdas impar_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="dc_local_'+i+'" class="fila_33 celdas impar_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="b_local_'+i+'" class="fila_33 celdas impar_sec"></div>');

                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal"><input type="checkbox" id="es_miembro"></div>');

                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');

                     nro_fila++;
                }
            }
        }
    });

    /*En el caso de que todos tengan la misma cantidad de dptos por piso, cuando cambia el select los va dibujando*/
     $('#tab_content').on('change','#cant_deptos',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var nro = torre.split('_')[1];
        var cant_torres = $('#cant_torres').val();

    	var cant_pisos= $('.torre_'+nro+' #cant_pisos').val();
        var ig_por_piso=$('.torre_'+nro+' input:radio[name=igualesxpiso]:checked').val();
        var cp=cant_pisos;
        var unid_pb = $('.torre_'+nro+' #unidades_pb').val();
    	var cant_deptos= this.value;

        if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            $('.ig_x_piso').attr('checked', true);
            for (t=1;t<=cant_torres;t++){
             /*Se asigna la misma cantidad de pisos a las otras torres*/
             $('.torre_'+t+'  #cant_deptos option[value='+ cant_deptos +']').attr("selected",true);

             /* Agrega los departamentos por piso */
             for (i=1;i<=cant_pisos;i++){
                $('.dibujoT_'+t+' #piso_nro_'+i).empty();
                $('#prim_content .torre_'+t+' #uf_prim_piso_nro_'+i).empty();
                $('#todas_'+t+' #todas_piso_nro_'+i).empty();

                for (k=1;k<=cant_deptos;k++){
                    $('.dibujoT_'+t+' #piso_nro_'+i).append('<div id="dpto_nro_'+i+'_'+k+'" class="dpto-'+cant_deptos+' column dpto"></div>');
                    nuevo_elem = $('<div id="uf_prim_dpto_nro_'+i+'_'+k+'" class="dpto-'+cant_deptos+' column dpto droppable" data-name="'+i+'_'+k+'"></div>')
                    nuevo_elem.droppable({ 
                       drop: function( event, ui ) { 
                            value=ui.draggable.html();
                            tipo=ui.draggable.data().name;
                            pertenece = nro+'_'+this.dataset.name;

                            if (tipo=="cochera_cubierta"){
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).prop('hidden',false);
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).attr( "title", '"'+pertenece+'"' );
                                $('#cc_dpto_'+pertenece).append('<div class="icono_cc tabla_cc_'+pertenece+'_'+value+'">'+value+'</div>')
                            }
                            else {
                                if (tipo == "cochera_descubierta") {
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).prop('hidden',false);
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).attr( "title", '"'+pertenece+'"' );
                                     $('#cd_dpto_'+pertenece).append('<div class="icono_dc tabla_dc_'+pertenece+'_'+value+'">'+value+'</div>')
                                }
                                else {
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).prop('hidden',false);
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).attr( "title", '"'+pertenece+'"' );
                                     $('#b_dpto_'+pertenece).append('<div class="icono_bau tabla_bau_'+pertenece+'_'+value+'">'+value+'</div>')
                                }
                            }
                        }, 
                        out: function( event, ui ) { 
                         value=ui.draggable.html();
                             tipo=ui.draggable.data().name;
                             pertenece = t+'_'+this.dataset.name;

                             if (tipo=="cochera_cubierta"){
                                 $('#uf_secundarias .torre_'+t+' #hidden_'+value).prop('hidden',true);
                                 $('#cc_dpto_'+pertenece+' .tabla_cc_'+pertenece+'_'+value).remove();
                             }
                             else {
                                 if (tipo == "cochera_descubierta") {
                                      $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).prop('hidden',true);
                                      $('#cd_dpto_'+pertenece+' .tabla_dc_'+pertenece+'_'+value).remove();
                                 }
                                 else {
                                      $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).prop('hidden',true);
                                      $('#b_dpto_'+pertenece+' .tabla_bau_'+pertenece+'_'+value).remove();
                                 }
                             }
                        
                        } 
                    });

                    $('#uf_primarias .torre_'+t+' #uf_prim_piso_nro_'+i).append(nuevo_elem);
                    $('#todas_'+t+' #todas_piso_nro_'+i).append('<div class="dpto-'+cant_deptos+' ver_todas_dpto_'+k+' column dpto"></div>');
                }
             }
            }
        }

    	else{
        /* Agrega los departamentos por piso */
    	for (i=1;i<=cant_pisos;i++){
    		$('.dibujoT_'+nro+' #piso_nro_'+i).empty();
            $('#prim_content .torre_'+nro+' #uf_prim_piso_nro_'+i).empty();
            $('#todas_'+nro+' #todas_piso_nro_'+i).empty();

    		for (k=1;k<=cant_deptos;k++){
    			$('.dibujoT_'+nro+' #piso_nro_'+i).append('<div id="dpto_nro_'+i+'_'+k+'" class="dpto-'+cant_deptos+' column dpto"></div>');
                nuevo_elem = $('<div id="uf_prim_dpto_nro_'+i+'_'+k+'" class="dpto-'+cant_deptos+' column dpto droppable" data-name="'+i+'_'+k+'"></div>')
                nuevo_elem.droppable({ 
                   drop: function( event, ui ) { 
                        value=ui.draggable.html();
                        tipo=ui.draggable.data().name;
                        pertenece = nro+'_'+this.dataset.name;

                        if (tipo=="cochera_cubierta"){
                            $('#uf_secundarias .torre_'+nro+' #hidden_'+value).prop('hidden',false);
                            $('#uf_secundarias .torre_'+nro+' #hidden_'+value).attr( "title", '"'+pertenece+'"' );
                            $('#cc_dpto_'+pertenece).append('<div class="icono_cc tabla_cc_'+pertenece+'_'+value+'">'+value+'</div>')
                        }
                        else {
                            if (tipo == "cochera_descubierta") {
                                 $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).prop('hidden',false);
                                 $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).attr( "title", '"'+pertenece+'"' );
                                 $('#cd_dpto_'+pertenece).append('<div class="icono_dc tabla_dc_'+pertenece+'_'+value+'">'+value+'</div>')
                            }
                            else {
                                 $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).prop('hidden',false);
                                 $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).attr( "title", '"'+pertenece+'"' );
                                 $('#b_dpto_'+pertenece).append('<div class="icono_bau tabla_bau_'+pertenece+'_'+value+'">'+value+'</div>')
                            }
                        }
                   }, 
                   out: function( event, ui ) { 
                    value=ui.draggable.html();
                        tipo=ui.draggable.data().name;
                        pertenece = nro+'_'+this.dataset.name;

                        if (tipo=="cochera_cubierta"){
                            $('#uf_secundarias .torre_'+nro+' #hidden_'+value).prop('hidden',true);
                            $('#cc_dpto_'+pertenece+' .tabla_cc_'+pertenece+'_'+value).remove();
                        }
                        else {
                            if (tipo == "cochera_descubierta") {
                                 $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).prop('hidden',true);
                                 $('#cd_dpto_'+pertenece+' .tabla_dc_'+pertenece+'_'+value).remove();
                            }
                            else {
                                 $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).prop('hidden',true);
                                 $('#b_dpto_'+pertenece+' .tabla_bau_'+pertenece+'_'+value).remove();
                            }
                        }
                   
                   } 
                });

                $('#uf_primarias .torre_'+nro+' #uf_prim_piso_nro_'+i).append(nuevo_elem);
                $('#todas_'+nro+' #todas_piso_nro_'+i).append('<div class="dpto-'+cant_deptos+' ver_todas_dpto_'+k+' column dpto"></div>');
           
                /*Carga los datos del departamento en la tabla final*/
                if (nro_fila%2==0){
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_torre_class text_tabla celdas">'+nro+'</div>');
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_uf_prim_class text_tabla celdas">Dpto. '+i+'_'+k+'</div>');

                    $( "#cuerpo_tabla_sec" ).append('<div id="cc_dpto_'+nro+'_'+i+'_'+k+'" class="fila_33 celdas par_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="cd_dpto_'+nro+'_'+i+'_'+k+'" class="fila_33 celdas par_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="b_dpto_'+nro+'_'+i+'_'+k+'" class="fila_33 celdas par_sec"></div>');

                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla"><input type="checkbox" id="es_miembro"></div>');

                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');

                    nro_fila++;
                }
                else {
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_torre_class text_tabla celdas impar_ppal">'+nro+'</div>');
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_uf_prim_class text_tabla celdas impar_ppal">Dpto. '+i+'_'+k+'</div>');

                    $( "#cuerpo_tabla_sec" ).append('<div id="cc_dpto_'+nro+'_'+i+'_'+k+'" class="fila_33 celdas impar_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="cd_dpto_'+nro+'_'+i+'_'+k+'" class="fila_33 celdas impar_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="b_dpto_'+nro+'_'+i+'_'+k+'" class="fila_33 celdas impar_sec"></div>');

                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal"><input type="checkbox" id="es_miembro"></div>');

                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                     nro_fila++;
                }
            } 
        }
        }
   });

    $('input[type=checkbox]').on('click', function(){
        var parent = $(this).parent().attr('id');
        $('#'+parent+' input[type=checkbox]').removeAttr('checked');
        $(this).attr('checked', 'checked');
    });

    /* carga de departamentos personalizada */
    $('#tab_content').on('click','#cargar_dptos',function (e) {
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        var cant_pisos= $('.torre_'+nro+' #cant_pisos').val();
        var cp=cant_pisos;
        var unid_pb = $('.torre_'+nro+' #unidades_pb').val();
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

         if (!unid_pb) {
            unid_pb = 0;
        }

        $('#carga_personalizada').css('top','600px');

        $('#person_dib').empty();

        for (i=1;i<=cant_torres;i++){
            $('#person_dib').append('<div class="dibujoP_'+i+' dibujo"></div>');
            $('.dibujoP_'+i).append($('.dibujoT_'+i+' #uf'));
            $('.dibujoP_'+i).append($('.dibujoT_'+i+' #edif_dibujo'));
            $('.dibujoP_'+i).append($('.dibujoT_'+i+' #numeracion'));
            if (i==nro){
                $('.dibujoP_'+i+' #uf').removeClass('display_none');
                $('.tab_person_'+i).addClass('torre_activa');
            }
            else{
                $('.dibujoP_'+i).addClass('display_none');
            }
        }

        $('.content_grey').css({'background-color':'#F7F7F7'});
        $('#title-2').removeClass('display_none');

        $('.dialogs').fadeIn(200);
        $('#carga_personalizada').fadeIn(200);

        $('#nombre_dpto').css({'display':'block'});
        $('.ui-draggable .ui-dialog-titlebar').css({'display':'none'});
        $('#sel_num').empty();
        $('#sel_alfa').empty();
        for(i=1;i<50;i++){
            $('#sel_num').append('<option value="'+i+'">'+i+'</option>');
        }
        for(i=0;i<26;i++){
            $('#sel_alfa').append('<option value="'+i+'">'+Abc.charAt(i)+'</option>');
        }
    });


    $('#person_torres').on('click','.person_navegate',function(){
        var clase=$(this)[0].className.split(' ')[0];
         var nro = clase.split('_')[2];
        $('#person_torres div').removeClass('torre_activa');
        $('#person_dib .dibujo').addClass('display_none');
        $('.dibujoP_'+nro).removeClass('display_none');
        $('.dibujoP_'+nro).removeClass('display_none');
        $('.dibujoP_'+nro+' #uf').removeClass('display_none');
        $(this).addClass('torre_activa');

    });

    $('#uf_secundarias').on('click','.sec_navegate',function(){
        var clase=$(this)[0].className.split(' ')[2];
        var nro = clase.split('-')[1];
        $('#uf_secundarias .tab_agrupacion').removeClass('tabsec_activa');
        $('#uf_primarias .tab_agrupacion').removeClass('tabprim_activa');
        $('#uf_primarias .prim_torre-'+nro).addClass('tabprim_activa');
        $('.sec_form').addClass('display_none');
        $('.prim_form').addClass('display_none');
        $('#uf_secundarias .torre_'+nro).removeClass('display_none');
        $('#uf_primarias .torre_'+nro).removeClass('display_none');
        $(this).addClass('tabsec_activa');

    });
    
    $('#uf_primarias').on('click','.prim_navegate',function(){
        var clase=$(this)[0].className.split(' ')[1];
        var nro = clase.split('-')[1];
        $('#uf_primarias .tab_agrupacion').removeClass('tabprim_activa');
        $('#uf_secundarias .tab_agrupacion').removeClass('tabsec_activa');
        $('#uf_secundarias .sec_torre-'+nro).addClass('tabsec_activa');
        $('.sec_form').addClass('display_none');
        $('.prim_form').addClass('display_none');
        $('#uf_secundarias .torre_'+nro).removeClass('display_none');
        $('#uf_primarias .torre_'+nro).removeClass('display_none');
        $(this).addClass('tabprim_activa');
    });
    
    $('#person_dib').on('blur','#uf_cant .cant_deptos',function(){
        $(this).addClass('cant_listo');
        var cant_torres = $('#cant_torres').val();
        var nombre = $(this).attr('name');

        for(i=1;i<=cant_torres;i++){
            if($('.tab_person_'+i).hasClass('torre_activa')){
                var nro = i;
            }
        }

        var cp=$('.torre_'+nro+' #cant_pisos').val();
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (p=cp;p>0;p--){
            dptos = $('.dibujoP_'+nro+' [name=piso_'+p+']').val();

            if ($('#torres_iguales').is(':checked') && (nro==1)){
              for(t=1;t<=cant_torres;t++){
                $('.dibujoP_'+t+' #'+nombre).addClass('piso_listo');
                $('.dibujoP_'+t+' [name=piso_'+p+']').val(dptos);
                $('.dibujoP_'+t+' #piso_nro_'+p).empty();
                $('#prim_content .torre_'+t+' #uf_prim_piso_nro_'+p).empty();
                $('#todas_'+t+' #todas_piso_nro_'+p).empty();
              }
            }
            else{
                $('.dibujoP_'+nro+' #'+nombre).addClass('piso_listo');
                $('.dibujoP_'+nro+' #piso_nro_'+p).empty();
                $('#prim_content .torre_'+nro+' #uf_prim_piso_nro_'+p).empty();
                $('#todas_'+nro+' #todas_piso_nro_'+p).empty();
            }

            
            
            if ($('#alfa').is(':checked')){
              tipo = 1;
              inicio = parseInt($('#sel_alfa').val());
              fin = inicio + parseInt(dptos);
            }
            else{
              if ($('#num').is(':checked')){
                tipo = 2;
                inicio = parseInt($('#sel_num').val());
                fin = inicio + parseInt(dptos-1);
              }
              else {
                if ($('#person').is(':checked')){
                  tipo = 3;
                }
              }
            }
            
            for (d=1;d<=dptos;d++){
              if (tipo!=3){
                if (tipo==1) {
                  nombre=Abc.charAt(inicio);
                }
                else{
                 if (tipo==2) {
                     nombre=inicio;
                 }
                }
                /*Si las torres son iguales...*/
                if ($('#torres_iguales').is(':checked') && (nro==1)){
                  for(t=1;t<=cant_torres;t++){
                    $('.dibujoP_'+t+' #piso_nro_'+p).append('<div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" >'+nombre+'</div>');
                    $('#todas_'+t+' #todas_piso_nro_'+p).append('<div class="dpto-'+dptos+' ver_todas_dpto_'+p+' column dpto">'+nombre+'</div>');
                  }
                }
                else{
                  $('.dibujoP_'+nro+' #piso_nro_'+p).append('<div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" >'+nombre+'</div>');
                  $('#todas_'+nro+' #todas_piso_nro_'+p).append('<div class="dpto-'+dptos+' ver_todas_dpto_'+p+' column dpto">'+nombre+'</div>');
                }
                inicio++;
              }
              else {
                $('.dibujoP_'+nro+' #piso_nro_'+p).append('<div class="help_dpto"> <div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" contenteditable="true"></div><div class="help_hover"><div>Ingresá la denominación para esta UF</div><img src="images/icon-arrow-down.png"></div></div>');
                $('#todas_'+nro+' #todas_piso_nro_'+p).append('<div class="dpto-'+dptos+' ver_todas_dpto_'+k+' column dpto"></div>');
              }

              /*Si las torres son iguales...*/
              if ($('#torres_iguales').is(':checked') && (nro==1)){
                for(t=1;t<=cant_torres;t++){
                  nuevo_elem = $('<div id="uf_prim_dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto droppable" data-name="'+p+'_'+d+'"></div>')
                  nuevo_elem.droppable({ 
                       drop: function( event, ui ) { 
                            value=ui.draggable.html();
                            tipo=ui.draggable.data().name;
                            pertenece = nro+'_'+this.dataset.name;
                            if (tipo=="cochera_cubierta"){
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).prop('hidden',false);
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).attr( "title", '"'+pertenece+'"' );
                                $('#cc_dpto_'+pertenece).append('<div class="icono_cc tabla_cc_'+pertenece+'_'+value+'">'+value+'</div>')
                            }
                            else {
                                if (tipo == "cochera_descubierta") {
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).prop('hidden',false);
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).attr( "title", '"'+pertenece+'"' );
                                     $('#cd_dpto_'+pertenece).append('<div class="icono_dc tabla_dc_'+pertenece+'_'+value+'">'+value+'</div>')
                               }
                                else {
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).prop('hidden',false);
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).attr( "title", '"'+pertenece+'"' );
                                     $('#b_dpto_'+pertenece).append('<div class="icono_bau tabla_bau_'+pertenece+'_'+value+'">'+value+'</div>')
                                }
                            }
                       }, 
                       out: function( event, ui ) { 
                        value=ui.draggable.html();
                            tipo=ui.draggable.data().name;
                            pertenece = nro+'_'+this.dataset.name;

                            if (tipo=="cochera_cubierta"){
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).prop('hidden',true);
                                $('#cc_dpto_'+pertenece+' .tabla_cc_'+pertenece+'_'+value).remove();
                            }
                            else {
                               if (tipo == "cochera_descubierta") {
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).prop('hidden',true);
                                     $('#cd_dpto_'+pertenece+' .tabla_dc_'+pertenece+'_'+value).remove();
                                }
                                else {
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).prop('hidden',true);
                                     $('#b_dpto_'+pertenece+' .tabla_bau_'+pertenece+'_'+value).remove();
                                }
                            }
                       } 
                    });
                    $('#uf_primarias .torre_'+t+' #uf_prim_piso_nro_'+p).append(nuevo_elem);
                }
              }
              else{
                nuevo_elem = $('<div id="uf_prim_dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto droppable" data-name="'+p+'_'+d+'"></div>')
                nuevo_elem.droppable({ 
                     drop: function( event, ui ) { 
                          value=ui.draggable.html();
                          tipo=ui.draggable.data().name;
                          pertenece = nro+'_'+this.dataset.name;
                          if (tipo=="cochera_cubierta"){
                              $('#uf_secundarias .torre_'+nro+' #hidden_'+value).prop('hidden',false);
                              $('#uf_secundarias .torre_'+nro+' #hidden_'+value).attr( "title", '"'+pertenece+'"' );
                              $('#cc_dpto_'+pertenece).append('<div class="icono_cc tabla_cc_'+pertenece+'_'+value+'">'+value+'</div>')
                          }
                          else {
                              if (tipo == "cochera_descubierta") {
                                   $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).prop('hidden',false);
                                   $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).attr( "title", '"'+pertenece+'"' );
                                   $('#cd_dpto_'+pertenece).append('<div class="icono_dc tabla_dc_'+pertenece+'_'+value+'">'+value+'</div>')
                             }
                              else {
                                   $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).prop('hidden',false);
                                   $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).attr( "title", '"'+pertenece+'"' );
                                   $('#b_dpto_'+pertenece).append('<div class="icono_bau tabla_bau_'+pertenece+'_'+value+'">'+value+'</div>')
                              }
                          }
                     }, 
                     out: function( event, ui ) { 
                      value=ui.draggable.html();
                          tipo=ui.draggable.data().name;
                          pertenece = nro+'_'+this.dataset.name;
                          if (tipo=="cochera_cubierta"){
                              $('#uf_secundarias .torre_'+nro+' #hidden_'+value).prop('hidden',true);
                              $('#cc_dpto_'+pertenece+' .tabla_cc_'+pertenece+'_'+value).remove();
                          }
                          else {
                             if (tipo == "cochera_descubierta") {
                                   $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).prop('hidden',true);
                                   $('#cd_dpto_'+pertenece+' .tabla_dc_'+pertenece+'_'+value).remove();
                              }
                              else {
                                   $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).prop('hidden',true);
                                   $('#b_dpto_'+pertenece+' .tabla_bau_'+pertenece+'_'+value).remove();
                              }
                          }
                     } 
                  });
              $('#uf_primarias .torre_'+nro+' #uf_prim_piso_nro_'+p).append(nuevo_elem);
            }
            
            /*Carga los datos del departamento en la tabla final*/
              if (nro_fila%2==0){
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_torre_class text_tabla celdas">'+nro+'</div>');
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_uf_prim_class text_tabla celdas">Dpto. '+p+'_'+d+'</div>');

                    $( "#cuerpo_tabla_sec" ).append('<div id="cc_dpto_'+nro+'_'+p+'_'+d+'" class="fila_33 celdas par_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="cd_dpto_'+nro+'_'+p+'_'+d+'" class="fila_33 celdas par_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="b_dpto_'+nro+'_'+p+'_'+d+'" class="fila_33 celdas par_sec"></div>');

                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla"><input type="checkbox" id="es_miembro"></div>');

                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla" contenteditable="true"></div>');

                    nro_fila++;
                }
                else {
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_torre_class text_tabla celdas impar_ppal">'+nro+'</div>');
                    $( "#cuerpo_tabla_edif" ).append('<div class="tabla_uf_prim_class text_tabla celdas impar_ppal">Dpto. '+p+'_'+d+'</div>');

                    $( "#cuerpo_tabla_sec" ).append('<div id="cc_dpto_'+nro+'_'+p+'_'+d+'" class="fila_33 celdas impar_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="cd_dpto_'+nro+'_'+p+'_'+d+'" class="fila_33 celdas impar_sec"></div>');
                    $( "#cuerpo_tabla_sec" ).append('<div id="b_dpto_'+nro+'_'+p+'_'+d+'" class="fila_33 celdas impar_sec"></div>');

                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_prop" ).append('<div class="fila_25 celdas text_tabla impar_ppal"><input type="checkbox" id="es_miembro"></div>');

                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                    $( "#cuerpo_tabla_inq" ).append('<div class="fila_33 celdas text_tabla impar_inq" contenteditable="true"></div>');
                     nro_fila++;
                }
            }
        }
    });
    
   
    $('.confirmar_person').on('click',function(){
      var cant_torres = $('#cant_torres').val();

      for(i=1;i<=cant_torres;i++){
        if($('.tab_'+i).hasClass('tab_activa')){
         var nro = i;
        }
      }

      for (i=1;i<=cant_torres;i++){
        $('.dibujoT_'+i+' #inner_draw').append($('.dibujoP_'+i+' #uf'));
        $('.dibujoT_'+i+' #inner_draw').append($('.dibujoP_'+i+' #edif_dibujo'));
        $('.dibujoT_'+i+' #inner_draw').append($('.dibujoP_'+i+' #numeracion'));
        $('.dibujoT_'+i+' #uf').addClass('display_none');

      }

     // $('.content_whitegrey').css({'background-color':'#F7F7F7', 'width' : 'width: 550px;'});
      $('.dialogs').hide();
      $('#carga_personalizada').hide();
      $('.carga_dptos').attr('checked', false);

      if ($('#torres_iguales').is(':checked') &&  (nro==1)){
        for (t=1;t<=cant_torres;t++){
          $('.torre_'+t+' #habilitar_unidadesOtras').addClass('display_none');
          $('.torre_'+t+' #habilitar_otrosEspacios').removeClass('display_none');
        }
      } 
      else{
         $('.torre_'+nro+' #habilitar_unidadesOtras').addClass('display_none');
         $('.torre_'+nro+' #habilitar_otrosEspacios').removeClass('display_none');
      }
       
    });

    /*Configuracion personalizada*/
    $('#tab_content').on('click','.no_ig_x_piso',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var cant_torres = $('#cant_torres').val();

        if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            for (t=1;t<=cant_torres;t++){
                $('.torre_'+t+' #cargar_dptos').removeClass('display_none');
                $('.torre_'+t+' .denom_personal').addClass('display_none');
                $('.torre_'+t+' #cant_deptos').prop('disabled',true);
                $('.torre_'+t+' #cant_deptos').empty();
            }
        }
        else{
            $('.'+torre+' #cargar_dptos').removeClass('display_none');
            $('.'+torre+' .denom_personal').addClass('display_none');
            $('.'+torre+' #cant_deptos').prop('disabled',true);
            $('.'+torre+' #cant_deptos').empty();
        }

        
    });

   $('#tab_content').on('click','.ig_x_piso',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var cant_torres = $('#cant_torres').val();

        if ($('#torres_iguales').is(':checked') &&  (torre=='torre_1')){
            for (t=1;t<=cant_torres;t++){
                $('.torre_'+t+' #cargar_dptos').addClass('display_none');
                $('.torre_'+t+' .denom_personal').removeClass('display_none');
                $('.torre_'+t+' #cant_deptos').prop('disabled',false);
                $('.torre_'+t+' #cant_deptos').append('<option value="0"></option>');
                for(i=1;i<13;i++){
                    $('.torre_'+t+' #cant_deptos').append('<option value="'+i+'">'+i+'</option>');
                }
            }
        }
        else{
          $('.'+torre+' #cargar_dptos').addClass('display_none');
          $('.'+torre+' .denom_personal').removeClass('display_none');
          $('.'+torre+' #cant_deptos').prop('disabled',false);
          $('.'+torre+' #cant_deptos').append('<option value="0"></option>');
          for(i=1;i<13;i++){
              $('.'+torre+' #cant_deptos').append('<option value="'+i+'">'+i+'</option>');
          }
        }
    });

    $('#tab_content').on('click','.denom_perso',function(e){
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       $('#denominacion_dpto').css('top','600px');
        $('.dialogs').fadeIn(200);
        $('#denominacion_dpto').fadeIn(200);
        $('#sel_num_d2').empty();
        $('#sel_alfa_d2').empty();
        for(i=1;i<50;i++){
            $('#sel_num_d2').append('<option value="'+i+'">'+i+'</option>');
        }
        for(i=0;i<26;i++){
            $('#sel_alfa_d2').append('<option value="'+i+'">'+Abc.charAt(i)+'</option>');
        }
    });

    $('#alfa').on('click',function(){
        $('#sel_alfa').prop( "disabled", false );
        $('#sel_num').prop("disabled",true);
        $('#ingr_pers').css({'display' : 'none'});
    });

    $('#num').on('click',function(){
        $('#sel_alfa').prop( "disabled", true );
        $('#sel_num').prop("disabled",false);
        $('#ingr_pers').css({'display' : 'none'});
    });

    $('#person').on('click',function(){
        $('#sel_alfa').prop( "disabled", true );
        $('#sel_num').prop("disabled",true);
        $('#ingr_pers').css({'display' : 'block'});
    });

    $('#alfa_d2').on('click',function(){
        $('#sel_alfa_d2').prop( "disabled", false );
        $('#sel_num_d2').prop("disabled",true);
        $('#ingr_pers_d2').css({'display' : 'none'});
    });

    $('#num_d2').on('click',function(){
        $('#sel_alfa_d2').prop( "disabled", true );
        $('#sel_num_d2').prop("disabled",false);
        $('#ingr_pers_d2').css({'display' : 'none'});
    });

    $('#person_d2').on('click',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        var cant_deptos = $('.torre_'+nro+' #cant_deptos').val();
        $('#ingr_pers_d2').empty();
        for (i=1;i<=cant_deptos;i++){
            $('#ingr_pers_d2').append('<input type="text" name="per" id="nom_depto_'+i+'"/>');
        }
        $('#sel_alfa_d2').prop( "disabled", true );
        $('#sel_num_d2').prop("disabled",true);
        $('#ingr_pers_d2').css({'display' : 'block'});
    });

    $('#checked').on('click',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        var tipo=0;
        var inicio;
        var ini=0;
        var pisos = $('.torre_'+nro+' #cant_pisos').val();
        var dptos = $('.torre_'+nro+' #cant_deptos').val();
        var cant_uni = $('.torre_'+nro+' #unidades_pb').val();
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        if ($('#alfa_d2').is(':checked')){
            tipo = 1;
            inicio = parseInt($('#sel_alfa_d2').val());
            fin = inicio + parseInt(dptos);
        }
        else 
            {
                if ($('#num_d2').is(':checked')){
                    tipo = 2;
                    inicio = parseInt($('#sel_num_d2').val());
                    fin = inicio + parseInt(dptos-1);
                }
                else {
                    if ($('#person_d2').is(':checked')){
                        tipo = 3;
                    }
            }
        }

        if (tipo==3) {
            if ($('#torres_iguales').is(':checked') && (nro==1)){
                for (j=1;j<=pisos;j++){
                    for (i=1;i<=dptos;i++){
                      for (t=1;t<=cant_torres;t++){
                        $('.dibujoT_'+t+' #dpto_nro_'+j+'_'+i).html($('#nom_depto_'+i).val());
                        $('.torre_'+t+' #uf_prim_dpto_nro_'+j+'_'+i).html($('#nom_depto_'+i).val());
                        $('#todas_'+t+' #todas_piso_nro_'+j+' .ver_todas_dpto_'+i).html($('#nom_depto_'+i).val());
                      }
                    }
                }
            }
            else{    
                for (j=1;j<=pisos;j++){
                    for (i=1;i<=dptos;i++){
                        $('.dibujoT_'+nro+' #dpto_nro_'+j+'_'+i).html($('#nom_depto_'+i).val());
                        $('.torre_'+nro+' #uf_prim_dpto_nro_'+j+'_'+i).html($('#nom_depto_'+i).val());
                        $('#todas_'+nro+' #todas_piso_nro_'+j+' .ver_todas_dpto_'+i).html($('#nom_depto_'+i).val());
                    }
                }
            }
        }
        else {
            k=1;

            if ($('#torres_iguales').is(':checked') && (nro==1)){
              /*Denominacion de los dptos en todos los pisos*/  
              for (j=inicio;j<=fin;j++){
                for (i=1;i<=pisos;i++){
                  for (t=1;t<=cant_torres;t++){
                    if (tipo==1) {
                        $('.dibujoT_'+t+' #dpto_nro_'+i+'_'+k).html(Abc.charAt(j));
                        $('.torre_'+t+' #uf_prim_dpto_nro_'+i+'_'+k).html(Abc.charAt(j));
                        $('#todas_'+t+' #todas_piso_nro_'+i+' .ver_todas_dpto_'+k).html(Abc.charAt(j));
                    }
                    else {
                        $('.dibujoT_'+t+' #dpto_nro_'+i+'_'+k).html(j);
                        $('.torre_'+t+' #uf_prim_dpto_nro_'+i+'_'+k).html(j);
                        $('#todas_'+t+' #todas_piso_nro_'+i+' .ver_todas_dpto_'+k).html(j);
                    }
                   }
               
              } k++;
             }

             /*Denominacion de las unidades funcionales*/
             
             for (t=1;t<=cant_torres;t++){
             j=inicio;
              for (u=1;u<=cant_uni;u++){
                if (tipo==1) {
                  $('.dibujoT_'+t+' #pb #local_'+u).html(Abc.charAt(j));
                  $('.dibujoT_'+t+' #pb_uf_prim #local_'+u).html(Abc.charAt(j));
                  $('#todas_'+t+' #pb_todas .ver_todas_pb-'+u).html(Abc.charAt(j));
                  j++;
                }
                else{
                  $('.dibujoT_'+t+' #pb #local_'+u).html(j);
                  $('.dibujoT_'+t+' #pb_uf_prim #local_'+u).html(j);
                  $('#todas_'+t+' #pb_todas .ver_todas_pb-'+u).html(j);
                  j++;
                }
              }
             }
            }
            else{
              for (j=inicio;j<=fin;j++){
                for (i=1;i<=pisos;i++){
                    if (tipo==1) {
                        $('.dibujoT_'+nro+' #dpto_nro_'+i+'_'+k).html(Abc.charAt(j));
                        $('.dibujoT_'+nro+' #uf_prim_dpto_nro_'+i+'_'+k).html(Abc.charAt(j));
                    }
                    else {
                        $('.dibujoT_'+nro+' #dpto_nro_'+i+'_'+k).html(j);
                        $('.dibujoT_'+nro+' #uf_prim_dpto_nro_'+i+'_'+k).html(j);
                    }
                }
                k++;
               }
              /*Denominacion de las unidades funcionales*/
              j=inicio;
              
              for (u=1;u<=cant_uni;u++){
                if (tipo==1) {
                  $('.dibujoT_'+nro+' #pb #local_'+u).html(Abc.charAt(j));
                  $('.dibujoT_'+nro+' #pb_uf_prim #local_'+u).html(Abc.charAt(j));
                  $('.edificio_todas'+nro+' #pb_todas .dpto-'+u).html(Abc.charAt(j));
                  j++;
                }
                else{
                  $('.dibujoT_'+nro+' #pb #local_'+u).html(j);
                  $('.dibujoT_'+nro+' #pb_uf_prim #local_'+u).html(j);
                  $('.edificio_todas'+nro+' #pb_todas .dpto-'+u).html(j);
                  j++;
                }
              }
            }
        }
        $('#denom_perso').attr('checked',false);
        $('.dialogs').hide();
        $('#denominacion_dpto').hide();
        $('.denom_perso').attr('checked', false);
        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+' #habilitar_unidadesOtras').addClass('display_none');
           $('.torre_'+t+' #habilitar_otrosEspacios').removeClass('display_none');
         }
        }
        else{
           $('.torre_'+nro+' #habilitar_unidadesOtras').addClass('display_none');
           $('.torre_'+nro+' #habilitar_otrosEspacios').removeClass('display_none');
        }
    });

    /* Otras unidades*/
    $('#tab_content').on('click','#loc_com',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
            $('.torre_'+t+' #no_loc_com').removeAttr('checked');
            $('.torre_'+t+' #loc_com').attr('checked', true);  
            $('.torre_'+t+' #locales_comerciales').prop('disabled',false);
            $('.torre_'+t+' #locales_comerciales').empty();
            $('.torre_'+t+' #locales_comerciales').append('<option value="0"></option>');
            for(i=1;i<31;i++){
                $('.torre_'+t+' #locales_comerciales').append('<option value="'+i+'">'+i+'</option<');
            }
         }
        }
        else{
            $('.torre_'+nro+' #locales_comerciales').prop('disabled',false);
            $('.torre_'+nro+' #locales_comerciales').empty();
            $('.torre_'+nro+' #locales_comerciales').append('<option value="0"></option>');
            for(i=1;i<31;i++){
                $('.torre_'+nro+' #locales_comerciales').append('<option value="'+i+'">'+i+'</option<');
            }
        }
    });

    $('#tab_content').on('click','#no_loc_com',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }
        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+' #loc_com').removeAttr('checked');
           $('.torre_'+t+' #no_loc_com').attr('checked', true); 
           $('.torre_'+t+' #locales_comerciales').prop('disabled',true);
           $('.dibujoT_'+t+' #comercios').addClass('display_none');
           $('.torre_'+t+' #locales_comerciales option[value="0"]').attr('selected',true);
         }
        }
        else{
          $('.torre_'+nro+' #locales_comerciales').prop('disabled',true);
          $('.dibujoT_'+nro+' #comercios').addClass('display_none');
          $('.torre_'+nro+' #locales_comerciales option[value="0"]').attr('selected',true);  
        }
    });

    $('#tab_content').on('click','#coch_cub',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
          $('.torre_'+t+' #no_coch_cub').removeAttr('checked');
          $('.torre_'+t+' #coch_cub').attr('checked', true); 
          $('.torre_'+t+' #cocheras_cub').prop('disabled',false);
          $('.torre_'+t+' #cocheras_cub').empty();
          $('.torre_'+t+' #cocheras_cub').append('<option value="0"></option>');
          for(i=1;i<31;i++){
              $('.torre_'+t+' #cocheras_cub').append('<option value="'+i+'">'+i+'</option<');
          }
         }
        }
        else{
          $('.torre_'+nro+' #cocheras_cub').prop('disabled',false);
          $('.torre_'+nro+' #cocheras_cub').empty();
          $('.torre_'+nro+' #cocheras_cub').append('<option value="0"></option>');
          for(i=1;i<31;i++){
              $('.torre_'+nro+' #cocheras_cub').append('<option value="'+i+'">'+i+'</option<');
          }
        }
    });

    $('#tab_content').on('click','#no_coch_cub',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
          $('.torre_'+t+' #coch_cub').removeAttr('checked');
          $('.torre_'+t+' #no_coch_cub').attr('checked', true); 
          $('.torre_'+t+' #coch_cub').removeAttr('checked');
          $('.torre_'+t+' #no_coch_cub').attr('checked', true); 
          $('.torre_'+t+' #cocheras_cub').prop('disabled',true);
          $('.dibujoT_'+t+' #cochera_cub').addClass('display_none');
          $('.torre_'+t+' #cocheras_cub option[value="0"]').attr('selected',true);
         }
        }
        else{
          $('.torre_'+nro+' #cocheras_cub').prop('disabled',true);
          $('.dibujoT_'+nro+' #cochera_cub').addClass('display_none');
          $('.torre_'+nro+' #cocheras_cub option[value="0"]').attr('selected',true);   
        }
    });

    $('#tab_content').on('click','#coch_dec',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
          $('.torre_'+t+' #no_coch_dec').removeAttr('checked');
          $('.torre_'+t+' #coch_dec').attr('checked', true); 
          $('.torre_'+t+' #cocheras_desc').prop('disabled',false);
          $('.torre_'+t+' #cocheras_desc').empty();
          $('.torre_'+t+' #cocheras_desc').append('<option value="0"></option>');
          for(i=1;i<31;i++){
              $('.torre_'+t+' #cocheras_desc').append('<option value="'+i+'">'+i+'</option<');
          }
         }
        }
        else{
          $('.torre_'+nro+' #cocheras_desc').prop('disabled',false);
          $('.torre_'+nro+' #cocheras_desc').empty();
          $('.torre_'+nro+' #cocheras_desc').append('<option value="0"></option>');
          for(i=1;i<31;i++){
              $('.torre_'+nro+' #cocheras_desc').append('<option value="'+i+'">'+i+'</option<');
          } 
        }
    });

    $('#tab_content').on('click','#no_coch_dec',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
          $('.torre_'+t+' #coch_dec').removeAttr('checked');
          $('.torre_'+t+' #no_coch_dec').attr('checked', true); 
          $('.torre_'+t+' #cocheras_desc').prop('disabled',true);
          $('.dibujoT_'+t+'  #coch_desc').addClass('display_none');
          $('.torre_'+t+' #cocheras_desc option[value="0"]').attr('selected',true);
         }
        }
        else{
          $('.torre_'+nro+' #cocheras_desc').prop('disabled',true);
          $('.dibujoT_'+nro+'  #coch_desc').addClass('display_none');
          $('.torre_'+nro+' #cocheras_desc option[value="0"]').attr('selected',true);  
        }
    });

    $('#tab_content').on('click','#tiene_bauleras',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }


        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+' #no_tiene_bauleras').removeAttr('checked');
           $('.torre_'+t+' #tiene_bauleras').attr('checked', true); 
           $('.torre_'+t+' #bauleras').prop('disabled',false);
           $('.torre_'+t+' #bauleras').empty();
           $('.torre_'+t+' #bauleras').append('<option value="0"></option>');
           for(i=1;i<31;i++){
            $('.torre_'+t+' #bauleras').append('<option value="'+i+'">'+i+'</option<');
           }
           $('.torre_'+t+' #habilitar_otrosEspacios').addClass('display_none');
         }
        }
        else{
           $('.torre_'+nro+' #bauleras').prop('disabled',false);
           $('.torre_'+nro+' #bauleras').empty();
           $('.torre_'+nro+' #bauleras').append('<option value="0"></option>');
           for(i=1;i<31;i++){
            $('.torre_'+nro+' #bauleras').append('<option value="'+i+'">'+i+'</option<');
           }
           $('.torre_'+nro+' #habilitar_otrosEspacios').addClass('display_none');
        }


    });
    $('#tab_content').on('click','#no_tiene_bauleras',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }
        if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
            $('.torre_'+t+' #tiene_bauleras').removeAttr('checked');
            $('.torre_'+t+' #no_tiene_bauleras').attr('checked', true); 
            $('.torre_'+t+' #bauleras').prop('disabled',true);
            $('.dibujoT_'+t+' #baulera').addClass('display_none');
            $('.torre_'+t+' #bauleras option[value="0"]').attr('selected',true);
            $('.torre_'+t+' #habilitar_otrosEspacios').addClass('display_none');
          }
        }
        else{
            $('.torre_'+nro+' #bauleras').prop('disabled',true);
            $('.dibujoT_'+nro+' #baulera').addClass('display_none');
            $('.torre_'+nro+' #bauleras option[value="0"]').attr('selected',true);
            $('.torre_'+nro+' #habilitar_otrosEspacios').addClass('display_none');
        }

    });

    $('#tab_content').on('change','#locales_comerciales',function(){
       var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }
         
       var cant= $('.torre_'+nro+' #locales_comerciales').val();

       if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+'  #locales_comerciales option[value='+ cant +']').attr("selected",true);
           $('.dibujoT_'+t+' #comercios').removeClass('display_none');
           $('.dibujoT_'+t+' #list_com').empty();
           /*$('#uf_primarias .torre_'+t+' #agrup_locales_comerciales').removeClass('display_none');
           $('#uf_primarias .torre_'+t+'  #list_comercios').empty();*/
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+t+' #list_com').append('<div class="icono_com">'+i+'</div>');
           // var nuevo_elem=$('<div class="icono_Comercial" >'+i+'</div>');/* droppable data-name="'+t+'_'+i+'*/
            /*  nuevo_elem.droppable({ 
                       drop: function( event, ui ) { 
                            value=ui.draggable.html();
                            tipo=ui.draggable.data().name;
                            pertenece = nro+'_'+this.dataset.name;

                            if (tipo=="cochera_cubierta"){
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).prop('hidden',false);
                                $('#uf_secundarias .torre_'+t+' #hidden_'+value).attr( "title", '"'+pertenece+'"' );
                                $('#cc_dpto_'+pertenece).append('<div class="icono_cc tabla_cc_'+pertenece+'_'+value+'">'+value+'</div>')
                            }
                            else {
                                if (tipo == "cochera_descubierta") {
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).prop('hidden',false);
                                     $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).attr( "title", '"'+pertenece+'"' );
                                     $('#cd_dpto_'+pertenece).append('<div class="icono_dc tabla_dc_'+pertenece+'_'+value+'">'+value+'</div>')
                                }
                                else {
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).prop('hidden',false);
                                     $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).attr( "title", '"'+pertenece+'"' );
                                     $('#b_dpto_'+pertenece).append('<div class="icono_bau tabla_bau_'+pertenece+'_'+value+'">'+value+'</div>')
                                }
                            }
                        }, 
                        out: function( event, ui ) { 
                         value=ui.draggable.html();
                             tipo=ui.draggable.data().name;
                             pertenece = t+'_'+this.dataset.name;

                             if (tipo=="cochera_cubierta"){
                                 $('#uf_secundarias .torre_'+t+' #hidden_'+value).prop('hidden',true);
                                 $('#cc_dpto_'+pertenece+' .tabla_cc_'+pertenece+'_'+value).remove();
                             }
                             else {
                                 if (tipo == "cochera_descubierta") {
                                      $('#uf_secundarias .torre_'+t+' #hidden_dc_'+value).prop('hidden',true);
                                      $('#cd_dpto_'+pertenece+' .tabla_dc_'+pertenece+'_'+value).remove();
                                 }
                                 else {
                                      $('#uf_secundarias .torre_'+t+' #hidden_b_'+value).prop('hidden',true);
                                      $('#b_dpto_'+pertenece+' .tabla_bau_'+pertenece+'_'+value).remove();
                                 }
                             }
                        
                        } 
                    });

                    $('#uf_primarias .torre_'+t+' #list_comercios').append(nuevo_elem);*/
           }

           $('#todas_'+t+' .loc_com').removeClass('display_none');
           $('#todas_'+t+' .loc_com .cant').html(cant);
         }
       }
       else{
           $('.dibujoT_'+nro+' #comercios').removeClass('display_none');
           $('.dibujoT_'+nro+' #list_com').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+nro+' #list_com').append('<div class="icono_com">'+i+'</div>');
           }

           $('#todas_'+nro+' .loc_com').removeClass('display_none');
           $('#todas_'+nro+' .loc_com .cant').html(cant);
       }
    });

    $('#tab_content').on('change','#cocheras_cub',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

       var cant= $('.torre_'+nro+' #cocheras_cub').val();

       if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+'  #cocheras_cub option[value='+ cant +']').attr("selected",true);
           $('.dibujoT_'+t+' #cochera_cub').removeClass('display_none');
           $('.dibujoT_'+t+'  #list_cc').empty();
           $('#uf_secundarias .torre_'+t+' #cochera_cub').removeClass('display_none');
           $('#uf_secundarias .torre_'+t+'  #list_cc').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+t+'  #list_cc').append('<div class="icono_cc" >'+i+'</div>');
            nuevo_elem = $('<div class="icono_cc" data-name=cochera_cubierta>'+i+'</div>');
            nuevo_elem.draggable();
            $('#uf_secundarias .torre_'+t+' #list_cc').append(nuevo_elem);
            $('#uf_secundarias .torre_'+t+' #list_cc').append('<div class="help_hidden"><div id="hidden_'+i+'" class="icono_cc_done" hidden=true>'+i+'</div><div class="help_hover">1A<div></div><img src="images/icon-arrow-up.png" style="top:-9px"></div></div>');
           }

           $('#todas_'+t+' .cocheras_cub').removeClass('display_none');
           $('#todas_'+t+' .cocheras_cub .cant').html(cant);
         }
       }
       else{
           $('.dibujoT_'+nro+' #cochera_cub').removeClass('display_none');
           $('.dibujoT_'+nro+'  #list_cc').empty();
           $('#uf_secundarias .torre_'+nro+' #cochera_cub').removeClass('display_none');
           $('#uf_secundarias .torre_'+nro+'  #list_cc').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+nro+'  #list_cc').append('<div class="icono_cc" >'+i+'</div>');
            nuevo_elem = $('<div class="icono_cc" data-name=cochera_cubierta>'+i+'</div>');
            nuevo_elem.draggable();
            $('#uf_secundarias .torre_'+nro+' #list_cc').append(nuevo_elem);
            $('#uf_secundarias .torre_'+nro+' #list_cc').append('<div class="help_hidden"><div id="hidden_'+i+'" class="icono_cc_done" hidden=true>'+i+'</div><div class="help_hover">1A<div></div><img src="images/icon-arrow-up.png" style="top:-9px"></div></div>');
           }

           $('#todas_'+nro+' .cocheras_cub').removeClass('display_none');
           $('#todas_'+nro+' .cocheras_cub .cant').html(cant);
       }
    });

    $('#tab_content').on('change','#cocheras_desc',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

       var cant= $('.torre_'+nro+' #cocheras_desc').val();

       if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+'  #cocheras_desc option[value='+ cant +']').attr("selected",true);
           $('.dibujoT_'+t+' #coch_desc').removeClass('display_none');
           $('.dibujoT_'+t+'  #list_dc').empty();
           $('#uf_secundarias .torre_'+t+' #coch_desc').removeClass('display_none');
           $('#uf_secundarias .torre_'+t+'  #list_dc').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+t+'  #list_dc').append('<div class="icono_dc">'+i+'</div>');
            nuevo_elem = $('<div class="icono_dc" data-name=cochera_descubierta>'+i+'</div>');
            nuevo_elem.draggable();
            $('#uf_secundarias .torre_'+t+' #list_dc').append(nuevo_elem);
            $('#uf_secundarias .torre_'+t+' #list_dc').append('<div id="hidden_dc_'+i+'" class="icono_dc_done" hidden=true>'+i+'</div>') /**/
           }

           $('#todas_'+t+' .cocheras').removeClass('display_none');
           $('#todas_'+t+' .cocheras .cant').html(cant);
         }
       }
       else{
           $('.dibujoT_'+nro+' #coch_desc').removeClass('display_none');
           $('.dibujoT_'+nro+'  #list_dc').empty();
           $('#uf_secundarias .torre_'+nro+' #coch_desc').removeClass('display_none');
           $('#uf_secundarias .torre_'+nro+'  #list_dc').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+nro+'  #list_dc').append('<div class="icono_dc">'+i+'</div>');
            nuevo_elem = $('<div class="icono_dc" data-name=cochera_descubierta>'+i+'</div>');
            nuevo_elem.draggable();
            $('#uf_secundarias .torre_'+nro+' #list_dc').append(nuevo_elem);
            $('#uf_secundarias .torre_'+nro+' #list_dc').append('<div id="hidden_dc_'+i+'" class="icono_dc_done" hidden=true>'+i+'</div>') /**/
           }

           $('#todas_'+nro+' .cocheras').removeClass('display_none');
           $('#todas_'+nro+' .cocheras .cant').html(cant);
       }
    });

    $('#tab_content').on('change','#bauleras',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

       var cant= $('.torre_'+nro+' #bauleras').val();

       if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
           $('.torre_'+t+'  #bauleras option[value='+ cant +']').attr("selected",true);
           $('.dibujoT_'+t+' #baulera').removeClass('display_none');
           $('.dibujoT_'+t+'  #list_b').empty();
           $('#uf_secundarias .torre_'+t+' #baulera').removeClass('display_none');
           $('#uf_secundarias .torre_'+t+'  #list_b').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+t+'  #list_b').append('<div class="icono_bau">'+i+'</div>');
            nuevo_elem = $('<div class="icono_bau" data-name=baulera>'+i+'</div>');
            nuevo_elem.draggable();
            $('#uf_secundarias .torre_'+t+' #list_b').append(nuevo_elem);
            $('#uf_secundarias .torre_'+t+' #list_b').append('<div id="hidden_b_'+i+'" class="icono_bau_done" hidden=true>'+i+'</div>') /**/
           }

           $('#todas_'+t+' .bauleras').removeClass('display_none');
           $('#todas_'+t+' .bauleras .cant').html(cant);
         }
       }
       else{
           $('.dibujoT_'+nro+' #baulera').removeClass('display_none');
           $('.dibujoT_'+nro+'  #list_b').empty();
           $('#uf_secundarias .torre_'+nro+' #baulera').removeClass('display_none');
           $('#uf_secundarias .torre_'+nro+'  #list_b').empty();
           for (i=1;i<=cant;i++){
            $('.dibujoT_'+nro+'  #list_b').append('<div class="icono_bau">'+i+'</div>');
            nuevo_elem = $('<div class="icono_bau" data-name=baulera>'+i+'</div>');
            nuevo_elem.draggable();
            $('#uf_secundarias .torre_'+nro+' #list_b').append(nuevo_elem);
            $('#uf_secundarias .torre_'+nro+' #list_b').append('<div id="hidden_b_'+i+'" class="icono_bau_done" hidden=true>'+i+'</div>') /**/
           }

           $('#todas_'+nro+' .bauleras').removeClass('display_none');
           $('#todas_'+nro+' .bauleras .cant').html(cant);
       }
    });

    /*-------------------Ingreso de espacios comunes----------------------------------*/

    $('#tab_content').on('click','.logo_close_done',function(){
      var cant_torres = $('#cant_torres').val();
      for(i=1;i<=cant_torres;i++){
          if($('.tab_'+i).hasClass('tab_activa')){
              var nro = i;
          }
      }

      var eliminar=$(this).parent().children()[1].value;

      var nombre=$(this).parent().parent().attr('id');
      var total_list=$('.dibujoT_'+nro+' #list_'+nombre+' .elemento_list').length;

      if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
          var list=$('.dibujoT_'+t+' #list_'+nombre+' .elemento_list');

          for(i=0;i<total_list;i++){
            if(list[i].children[1].innerHTML==eliminar){
                borre=i;
                list[i].remove();
            }
          }
          borre++;

          for(i=borre;i<total_list;i++){
            list[i].children[0].innerHTML=i;
          }

          total = $('.dibujoT_'+t+' #list_'+nombre+' .elemento_list').length;

          if(total==0){
            $('.dibujoT_'+t+' #'+nombre+'_dib').addClass('display_none');
            $('#todas_'+t+' .'+nombre+'_todas').addClass('display_none');
          }
          else{
            $('#todas_'+t+' .'+nombre+'_todas .cant').html(total);
          }

           
          $('.torre_'+t+' .close_'+nombre+'_'+borre).parent().remove();
        }
      }
      else{
        var list=$('.dibujoT_'+nro+' #list_'+nombre+' .elemento_list');

          for(i=0;i<total_list;i++){
            if(list[i].children[1].innerHTML==eliminar){
                borre=i;
                list[i].remove();
            }
          }

          for(i=borre+1;i<total_list;i++){
            list[i].children[0].innerHTML=i;
          }

          if($('.dibujoT_'+nro+' #list_'+nombre+' .elemento_list').length==0){
            $('.dibujoT_'+nro+' #'+nombre+'_dib').addClass('display_none');
            $('#todas_'+nro+' .'+nombre+'_todas').addClass('display_none');

          }
          $(this).parent().remove();
        }
      
    });

    $('#tab_content').on('click','.nuevo_espacio',function(){
        var texto="Ingrese un espacio común...";
        var espacio=$(this).val();
        
    if (espacio==texto) {
            $(this).val("");
        }
    });

    $('#tab_content').on('blur','.nuevo_espacio', function(){
      var texto="Ingrese un espacio común...";
      var cant_torres = $('#cant_torres').val();
      for(i=1;i<=cant_torres;i++){
          if($('.tab_'+i).hasClass('tab_activa')){
              var nro = i;
          }
      }

      var nombre=$(this).attr('id');
      var nombre_id=nombre.split('_')[0]+'_'+nombre.split('_')[1];

      var espacio=$(this).val();

      if ($('#torres_iguales').is(':checked') &&  (nro==1)){
         for (t=1;t<=cant_torres;t++){
          var nombre_dibujo=nombre_id+'_dib';
          var cant=$('.torre_'+t+' #'+nombre_id+' .espacio_listo').length+1;
          var prox=cant+1;
          if ((espacio!=texto)&(espacio!="")){
            $('.torre_'+t+' #'+nombre_id).append('<div class="div_input" >' +
                                     '<div class="logo_close"></div>' +
                                     '<input type="text" id="'+nombre+'" class="nuevo_espacio '+nombre_id+'_'+prox+'" value="Ingrese un espacio común...">' +
                                     '<input type="checkbox" name="con_reserva" id="con_reserva"> Uso con reserva' +
                                     '</div>');

            $('.torre_'+t+' .'+nombre_id+'_'+cant).removeClass('nuevo_espacio');
            $('.torre_'+t+' .'+nombre_id+'_'+cant).addClass('espacio_listo');
            $('.torre_'+t+' .'+nombre_id+'_'+cant).val(espacio);

            $('.torre_'+t+' .'+nombre_id+'_'+cant).parent().children('.logo_close').addClass('logo_close_done close_'+nombre_id+'_'+cant);
            $('.torre_'+t+' .'+nombre_id+'_'+cant).parent().children('.logo_close').addClass('logo_close_done');
            $('.torre_'+t+' .'+nombre_id+'_'+cant).parent().children('.logo_close').removeClass('logo_close');
           
            $('#todas_'+t+' .'+nombre_id+'_todas').removeClass('display_none');
            $('#todas_'+t+' .'+nombre_id+'_todas .cant').html(cant);
            $('.dibujoT_'+t+' #'+nombre_dibujo).removeClass('display_none');
            $('.dibujoT_'+t+' #list_'+nombre_id).append('<div class="elemento_list"><div class="number">'+cant+'</div>' +
                                    '<div class="nombre_espacio">'+espacio+'</div></div>');
          }
          else{
           $(this).val("Ingrese un espacio común...");
          }
         }
      }
      else{
        if ((espacio!=texto)&(espacio!="")){
        $('.torre_'+nro+' #'+nombre_id).append('<div class="div_input" >' +
                                 '<div class="logo_close"></div>' +
                                 '<input type="text" id="'+nombre+'" class="nuevo_espacio" value="Ingrese un espacio común...">' +
                                 '<input type="checkbox" name="con_reserva" id="con_reserva"> Uso con reserva' +
                                 '</div>');
        $(this).removeClass('nuevo_espacio');
        $(this).addClass('espacio_listo');

        $(this).parent().children('.logo_close').addClass('logo_close_done');
        $(this).parent().children('.logo_close').removeClass('logo_close');

        var nombre_dibujo=nombre_id+'_dib';
        var cant=$('.torre_'+nro+' #'+nombre_id+' .espacio_listo').length;
        $('#todas_'+nro+' .'+nombre_id+'_todas').removeClass('display_none');
        $('#todas_'+nro+' .'+nombre_id+'_todas .cant').html(cant);
        $('.dibujoT_'+nro+' #'+nombre_dibujo).removeClass('display_none');
        $('.dibujoT_'+nro+' #list_'+nombre_id).append('<div class="elemento_list"><div class="number">'+cant+'</div>' +
                                '<div class="nombre_espacio">'+espacio+'</div></div>');
        }
        else{
         $(this).val("Ingrese un espacio común...");
        }
      }
    });

    $('.ver_todas').on('click', function(){
       /* $('#vista_todas').addClass('activa');
        $('#vista_todas').removeClass('display_none');*/
        $('.vista_vertodas').addClass('visible');
    });

    $('#form_edificios').on('click','.ver_todas', function(){
       // $('#vista_todas').addClass('activa');/*vertodas_*/
      //  $('#vista_todas').removeClass('display_none');
      $('.vista_vertodas').addClass('visible');
    });


    $('.hide_vertodas').on('click',function(){
        $('.vista_vertodas').removeClass('visible');
    });


    /************************************---Paso 4--- **************************************************/
    

});
 