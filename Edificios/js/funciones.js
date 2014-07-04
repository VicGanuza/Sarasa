$(document).ready(function(){

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

    /*Click en los pasos para poder modificar o corregir pasos anteriores*/
    $('#paso_1').on('click',function(){
        $('#titulo_header').html('Alta de administrador');
        $('#titulo').html('<h1 class="titles">Bienvenido a <span class="blue">Consorcio</span>abierto.</h1><h3 class="titles">Ingresa tus datos y empeza a optimizar tu manera de trabajar.</h3>');
        $('#formulario_concorcio').addClass('display_none');
        $('#form_agrupacion').addClass('display_none');
        $('#estructura_edificio').addClass('display_none');
        $('#formulario_persona').removeClass('display_none');
        $('#confirmar_paso2').addClass('display_none');
        $('.terminos').removeClass('display_none');
        $('#confirmar_paso1').removeClass('display_none');
        $('#confirmar_paso3').addClass('display_none');
        $('#confirmar_paso4').addClass('display_none');
    });

    $('#paso_2').on('click',function(){
        $('#titulo_header').html('Alta de consorcio');
        $('#titulo').html('<h1 class="titles">Ingres&aacute; los datos del consorcio a configurar</h1>');
        $('#formulario_concorcio').removeClass('display_none');
        $('#formulario_persona').addClass('display_none');
        $('#estructura_edificio').addClass('display_none');
        $('#form_agrupacion').addClass('display_none');
        $('#confirmar_paso2').removeClass('display_none');
        $('.terminos').addClass('display_none');
        $('#confirmar_paso1').addClass('display_none');
        $('#confirmar_paso3').addClass('display_none');
        $('#confirmar_paso4').addClass('display_none');
    });

    $('#paso_3').on('click',function(){
        $('#titulo_header').html('Configuraci&oacute;n de la estructura f&iacute;sica del consorcio');
        $('#titulo').html('<h1 class="titles">Diagram&aacute; la estructura f&iacute;sica del edificio.</h1>');
        $('#formulario_concorcio').addClass('display_none');
        $('#formulario_persona').addClass('display_none');
        $('#estructura_edificio').removeClass('display_none');
        $('#form_agrupacion').addClass('display_none');

        $('#confirmar_paso2').addClass('display_none');
        $('.terminos').addClass('display_none');
        $('#confirmar_paso1').addClass('display_none');
        $('#confirmar_paso2').addClass('display_none');
        $('#confirmar_paso3').removeClass('display_none');
        $('#confirmar_paso4').addClass('display_none');
    });



    $('#confirmar_paso1').on('click',function(){
        $('#titulo_header').html('Alta de consorcio');
        $('#paso_1').addClass('paso_done');
        $('#paso_2').removeClass('paso_grey');
        $('#titulo').html('<h1 class="titles">Ingres&aacute; los datos del consorcio a configurar</h1>');
        $('.terminos').addClass('display_none');
        $('#confirmar_paso1').addClass('display_none');
        $('#confirmar_paso2').removeClass('display_none');
        $('#formulario_persona').addClass('display_none');
        $('#formulario_concorcio').removeClass('display_none');
    });


    $('#confirmar_paso2').on('click',function(){
        $('#titulo_header').html('Configuraci&oacute;n de la estructura f&iacute;sica del consorcio');
        $('#paso_2').addClass('paso_done');
        $('#paso_3').removeClass('paso_grey');
        $('#titulo').html('<h1 class="titles">Diagram&aacute; la estructura f&iacute;sica del edificio.</h1>');
        $('#formulario_concorcio').addClass('display_none');
        $('#confirmar_paso2').addClass('display_none');
        $('#confirmar_paso3').removeClass('display_none');
        /*Falta validar formulario dos*/
        $('#estructura_edificio').removeClass('display_none');
    });


    $('#confirmar_paso3').on('click',function(){
        $('#titulo_header').html('AGRUPACIÓN E IDENTIFICACIÓN DE UNIDADES FUNCIONALES');
        $('#paso_3').addClass('paso_done');
        $('#paso_4').removeClass('paso_grey');
        $('#titulo').html('<h1 class="titles">Agrup&aacute; e identific&aacute; las UF con sus consorcistas</h1>');
        $('#confirmar_paso3').addClass('display_none');
        $('#confirmar_paso4').removeClass('display_none');
        $('#estructura_edificio').addClass('display_none');
        $('#form_agrupacion').removeClass('display_none');
       /* $('#body_form').html($('#form_agrupacion'));
        $('#form_edificios').addClass('display_none');
        $('#form_agrupacion').removeClass('display_none');*/

        $('#uf_secundarias .torre_1').removeClass('display_none');
      /*  $('#uf_secundarias .torre_1 #coch_desc').removeClass('display_none');
        $('#uf_secundarias .torre_1 #baulera').removeClass('display_none');*/
        
        $('#uf_primarias .torre_1').removeClass('display_none');
       // $('#uf_primarias .torre_1 #numeracion_uf_prim').removeClass('display_none');
    });


    /* Funcionalidad formar edificio*/

    /*al cargar la cantidad de torres, genera las pestañas correspondientes*/
    $('#cant_torres').on('change',function(){
        var cant_torres=$(this).val();
        
        if (cant_torres>0){
          $('#torres_iguales').prop('disabled',false);
          $('#no_torres_iguales').prop('disabled',false);
        }
        $('#torres_list').empty();
        $('#dibujos_list').empty();
        $('#person_torres').empty();

        $('#uf_secundarias .tabs').empty();
        $('#uf_primarias .tabs').empty();

        var agrup_form=$('body').find('.sec_form').html();
        var prim_form=$('body').find('.prim_form').html();

        $('#sec_content').empty();
        $('#prim_content').empty();
        
        var form_html = $('body').find('.torre_form').html();
        var dibujo_form = $('body').find('.dibujo').html();
        $('#tab_content').empty();
        $('#dib_content').empty();
        if (cant_torres>0){
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
            $('#uf_primarias .tabs').append('<div class="tab_agrupacion tabprim_activa prim_navegate prim_torre-1">Torre 1</div>');
            $('#prim_content').append('<div class="torre_1 prim_form display_none"></div>');
            $('#prim_content .torre_1').html(prim_form);

            /*Carga de los tabs de agrupacion secundarias*/
            $('#uf_secundarias .tabs').append('<div class="tab_agrupacion tabsec_activa sec_navegate sec_torre-1">Torre 1</div>');
            $('#sec_content').append('<div class="torre_1 sec_form display_none"></div>');
            $('#sec_content .torre_1').html(agrup_form);

            for (i=2;i<=cant_torres;i++){
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

            }
            $('#torres_list').append('<li><a href="#ver_todas">ver todas</a></li>');
            $('#dibujos_list').append('<div class="ver_todas"><p style="width:50px; float:left;"> ver todas </p><img src="images/ver_todas_dib.png"></div>');
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
    });

    /* Si no tiene unidades en la PB, solo genera las opciones del select de los pisos*/
    $('#tab_content').on('click','.no_uni_pb',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];

        $('.'+torre+' #unidades_pb').prop('disabled',true);
        $('.'+torre+' #unidades_pb option[value="0"]').attr('selected',true);
        $('.'+torre+' #cant_pisos').prop('disabled',false);
        $('.'+torre+' #unidades_pb').empty();
        $('.'+torre+' #cant_pisos').empty();
        $('.'+torre+' #cant_pisos').append('<option value="0"></option>');
        for (i=1;i<31;i++) {
           $('.'+torre+' #cant_pisos').append('<option value="'+i+'">'+i+'</option>');
        }
    });

    /*Cuando cambia la cantidad de pisos del edificio los dibuja*/
    $('#tab_content').on('change','#cant_pisos', function(){
        var torre = $(this).parent().parent()[0].className.split(' ')[0];
        var nro = torre.split('_')[1];

		$('.dibujoT_'+nro+' #edificio').empty();
        $('.torre_'+nro+' #edificio_uf_prim').empty();
        $('.dibujoT_'+nro+' #uf_cant').empty();
        $('.dibujoT_'+nro+' #pisos_num').empty();
        $('.dibujoT_'+nro+' #pisos_num_uf_prim').empty();
        var tiene_unidades = $('.torre_'+nro+' input:radio[name=unidades_PB]:checked').val();
        var cant_uni = $('.torre_'+nro+' #unidades_pb').val();
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var cantidad_pisos= this.value;
        if (!cant_uni) {
            cant_uni = 0;
        }
        $('.dibujoT_'+nro+' .mensaje').addClass('display_none');
        $('.dibujoT_'+nro+' #edif_dibujo').removeClass('display_none');
        $('.dibujoT_'+nro+' #numeracion').removeClass('display_none');

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

        /* Agrega los pisos del edificio y los nros*/
        for (i=cantidad_pisos; i>0; i--){
            $('.dibujoT_'+nro+' #uf_cant').append('<input type="text" name="piso_'+i+'" size="5" maxlength="50" class="largo-total column piso cant_deptos"></div>');
			$('.dibujoT_'+nro+' #edificio').append('<div id="piso_nro_'+i+'" class="largo-total column piso"></div>');
            $('#uf_primarias .torre_'+nro+' #edificio_uf_prim').append('<div id="uf_prim_piso_nro_'+i+'" class="largo-total column piso"></div>');
            $('.dibujoT_'+nro+' #pisos_num').append('<div id="piso_'+i+'" class="nro_piso">'+i+'</div>');
            $('#uf_primarias .torre_'+nro+' #pisos_num_uf_prim').append('<div class="nro_piso">'+i+'</div>');
		}

        /* Agrega la planta baja*/
        $('.dibujoT_'+nro+' #uf_cant').append('<div id="cant_pb" class="largo-total column piso">'+cant_uni +'</div>');
        $('.dibujoT_'+nro+' #edificio' ).append('<div id="pb" class="largo-total column piso"></div>');
        $('#uf_primarias .torre_'+nro+' #edificio_uf_prim' ).append('<div id="pb_uf_prim" class="largo-total column piso"></div>');
        $('.dibujoT_'+nro+' #pisos_num').append('<div class="nro_piso">PB</div>');
        $('#uf_primarias .torre_'+nro+' #pisos_num_uf_prim').append('<div class="nro_piso">PB</div>');
        
        /* Agrega las unidades funcionales de la planta baja */
        unidades = cant_uni;
        if (tiene_unidades=='Si') {
            for (i=1; i<=cant_uni; i++){
                $('.dibujoT_'+nro+' #pb').append('<div id="local_'+i+'" class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
                $('#uf_primarias .torre_'+nro+' #pb_uf_prim').append('<div id="local_'+i+'" class="dpto-'+unidades+' column  dpto">'+Abc.charAt(i-1)+'</div>');
            }
        }
    });

    /*En el caso de que todos tengan la misma cantidad de dptos por piso, cuando cambia el select los va dibujando*/
     $('#tab_content').on('change','#cant_deptos',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];
        var nro = torre.split('_')[1];

    	var cant_pisos= $('.torre_'+nro+' #cant_pisos').val();
        var ig_por_piso=$('.torre_'+nro+' input:radio[name=igualesxpiso]:checked').val();
        var cp=cant_pisos;
        var unid_pb = $('.torre_'+nro+' #unidades_pb').val();
    	var cant_deptos= this.value;
    	
        /* Agrega los departamentos por piso */
    	for (i=1;i<=cant_pisos;i++){
    		$('.dibujoT_'+nro+' #piso_nro_'+i).empty();
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
                            $('#cc_dpto_'+pertenece).append('<div class="icono_cc">'+value+'</div>')
                        }
                        else {
                            if (tipo == "cochera_descubierta") {
                                 $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).prop('hidden',false);
                                 $('#uf_secundarias .torre_'+nro+' #hidden_dc_'+value).attr( "title", '"'+pertenece+'"' );
                                 $('#cd_dpto_'+pertenece).append('<div class="icono_dc">'+value+'</div>')
                            }
                            else {
                                 $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).prop('hidden',false);
                                 $('#uf_secundarias .torre_'+nro+' #hidden_b_'+value).attr( "title", '"'+pertenece+'"' );
                                 $('#b_dpto_'+pertenece).append('<div class="icono_bau">'+value+'</div>')
                            }
                        }
                   }, 
                   out: function( event, ui ) { 
                   
                   } 
                });
                $('#uf_primarias .torre_'+nro+' #uf_prim_piso_nro_'+i).append(nuevo_elem);

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

        $('#carga_personalizada').css('top','50%');
        $('#carga_personalizada').css('left','30%');

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

      /*  $('#caga_body').append($('#uf'));
        $('#caga_body').append($('#edif_dibujo'));
        $('#caga_body').append($('#numeracion'));
        $('.dibujoP_'+i+' #uf').css({'display' : 'block'});
        */

        $('.content_whitegrey').css({'background-color':'#FFFFFF', 'width' :'598'});
        $('#title-2').removeClass('display_none');

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
/*
        $('#torres_list li').removeClass('tab_activa');
        $('#tab_content div').addClass('display_none');
        $('.torre_'+nro).removeClass('display_none');
        $('.torre_'+nro+' div').removeClass('display_none');
        $('.tab_'+nro).addClass('tab_activa');
        */

    });

    $('#uf_secundarias').on('click','.sec_navegate',function(){
        var clase=$(this)[0].className.split(' ')[2];
        var nro = clase.split('-')[1];
        $('#uf_secundarias .tab_agrupacion').removeClass('tabsec_activa');
        $('#uf_primarias .tab_agrupacion').removeClass('tabprim_activa');
        $('#uf_primarias .prim_torre-'+nro).addClass('tabprim_activa');
      /* $('#person_dib .dibujo').addClass('display_none');
        $('.dibujoP_'+nro).removeClass('display_none');
        $('.dibujoP_'+nro).removeClass('display_none');
        $('.dibujoP_'+nro+' #uf').removeClass('display_none');*/
        $(this).addClass('tabsec_activa');

      /*  $('#dibujos_list div').removeClass('activa');
        $('#dib_content .dibujo').addClass('display_none');
        $('.dibujoT_'+nro).removeClass('display_none');
        $('.dibujoT_'+nro).removeClass('display_none');
        $(this).addClass('activa');

        $('#torres_list li').removeClass('tab_activa');
        $('#tab_content div').addClass('display_none');
        $('#tab_content .torre_'+nro).removeClass('display_none');
        $('#tab_content .torre_'+nro+' div').removeClass('display_none');
        $('.tab_'+nro).addClass('tab_activa');*/

    });
    
    $('#uf_primarias').on('click','.prim_navegate',function(){
        var clase=$(this)[0].className.split(' ')[1];
        var nro = clase.split('-')[1];
        $('#uf_primarias .tab_agrupacion').removeClass('tabprim_activa');
        $('#uf_secundarias .tab_agrupacion').removeClass('tabsec_activa');
        $('#uf_secundarias .sec_torre-'+nro).addClass('tabsec_activa');
      /* $('#person_dib .dibujo').addClass('display_none');
        $('.dibujoP_'+nro).removeClass('display_none');
        $('.dibujoP_'+nro).removeClass('display_none');
        $('.dibujoP_'+nro+' #uf').removeClass('display_none');*/
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

        $('.dibujoP_'+nro+' #'+nombre).addClass('piso_listo');

        var cp=$('.torre_'+nro+' #cant_pisos').val();
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (p=cp;p>0;p--){
            $('.dibujoP_'+nro+' #piso_nro_'+p).empty();
            dptos = $('.dibujoP_'+nro+' [name=piso_'+p+']').val();
            
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
                $('.dibujoP_'+nro+' #piso_nro_'+p).append('<div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" >'+nombre+'</div>');
                $('#uf_primarias .torre_'+nro+' #uf_prim_piso_nro_'+p).append('<div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" >'+nombre+'</div>');
                inicio++;
              }
              else {
                $('.dibujoP_'+nro+' #piso_nro_'+p).append('<div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" contenteditable="true"></div>');
                $('#uf_primarias .torre_'+nro+' #uf_prim_piso_nro_'+p).append('<div id="dpto_nro_'+p+'_'+d+'" class="dpto-'+dptos+' column dpto" contenteditable="true"></div>');
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

      $('.content_whitegrey').css({'background-color':'#F7F7F7', 'width' : 'width: 550px;'});
      $('#carga_personalizada').hide();
      $('.carga_dptos').attr('checked', false);
      $('.torre_'+nro+' #habilitar_unidadesOtras').addClass('display_none');
      $('.torre_'+nro+' #habilitar_otrosEspacios').removeClass('display_none');
       
    });

    /*Configuracion personalizada*/
    $('#tab_content').on('click','.no_ig_x_piso',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];

        $('.'+torre+' #cargar_dptos').removeClass('display_none');
        $('.'+torre+' #cant_deptos').prop('disabled',true);
        $('.'+torre+' #cant_deptos').empty();
    });

   $('#tab_content').on('click','.ig_x_piso',function(){
        var torre = $(this).parent().parent().parent()[0].className.split(' ')[0];

        $('.'+torre+' #cargar_dptos').addClass('display_none');
        $('.'+torre+' #cant_deptos').prop('disabled',false);
        $('.'+torre+' #cant_deptos').append('<option value="0"></option>');
        for(i=1;i<13;i++){
            $('.'+torre+' #cant_deptos').append('<option value="'+i+'">'+i+'</option>');
        }
    });

    $('#tab_content').on('click','.denom_perso',function(e){
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       $('#denominacion_dpto').css('top','50%');
        $('#denominacion_dpto').css('left','30%');
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
        var Abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      //  alert($('#sel_alfa_d2').val());

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
            for (j=1;j<=pisos;j++){
                for (i=1;i<=dptos;i++){
                    $('.dibujoT_'+nro+' #dpto_nro_'+j+'_'+i).html($('#nom_depto_'+i).val());
                    $('.dibujoT_'+nro+' #uf_prim_dpto_nro_'+j+'_'+i).html($('#nom_depto_'+i).val());
                }
            }
        }
        else {
            k=1;
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
        }
        $('#denom_perso').attr('checked',false);
        $('#denominacion_dpto').hide();
        $('.denom_perso').attr('checked', false);
        $('.torre_'+nro+' #habilitar_unidadesOtras').addClass('display_none');
        $('.torre_'+nro+' #habilitar_otrosEspacios').removeClass('display_none');
    });

    /* Otras unidades*/
    $('#tab_content').on('click','#loc_com',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #locales_comerciales').prop('disabled',false);
        $('.torre_'+nro+' #locales_comerciales').empty();
        $('.torre_'+nro+' #locales_comerciales').append('<option value="0"></option>');
        for(i=1;i<31;i++){
            $('.torre_'+nro+' #locales_comerciales').append('<option value="'+i+'">'+i+'</option<');
        }
    });
    $('#tab_content').on('click','#no_loc_com',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }
        $('.torre_'+nro+' #locales_comerciales').prop('disabled',true);
        $('.dibujoT_'+nro+' #comercios').addClass('display_none');
        $('.torre_'+nro+' #locales_comerciales option[value="0"]').attr('selected',true);
    });
    $('#tab_content').on('click','#coch_cub',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #cocheras_cub').prop('disabled',false);
        $('.torre_'+nro+' #cocheras_cub').empty();
        $('.torre_'+nro+' #cocheras_cub').append('<option value="0"></option>');
        for(i=1;i<31;i++){
            $('.torre_'+nro+' #cocheras_cub').append('<option value="'+i+'">'+i+'</option<');
        }
    });
    $('#tab_content').on('click','#no_coch_cub',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #cocheras_cub').prop('disabled',true);
        $('.dibujoT_'+nro+' #cochera_cub').addClass('display_none');
        $('.torre_'+nro+' #cocheras_cub option[value="0"]').attr('selected',true);

    });
    $('#tab_content').on('click','#coch_dec',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #cocheras_desc').prop('disabled',false);
        $('.torre_'+nro+' #cocheras_desc').empty();
        $('.torre_'+nro+' #cocheras_desc').append('<option value="0"></option>');
        for(i=1;i<31;i++){
            $('.torre_'+nro+' #cocheras_desc').append('<option value="'+i+'">'+i+'</option<');
        }
    });
    $('#tab_content').on('click','#no_coch_dec',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #cocheras_desc').prop('disabled',true);
         $('.dibujoT_'+nro+'  #coch_desc').addClass('display_none');
        $('.torre_'+nro+' #cocheras_desc option[value="0"]').attr('selected',true);

    });
    $('#tab_content').on('click','#tiene_bauleras',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #bauleras').prop('disabled',false);
        $('.torre_'+nro+' #bauleras').empty();
        $('.torre_'+nro+' #bauleras').append('<option value="0"></option>');
        for(i=1;i<31;i++){
            $('.torre_'+nro+' #bauleras').append('<option value="'+i+'">'+i+'</option<');
        }
        $('.torre_'+nro+' #habilitar_otrosEspacios').addClass('display_none');

    });
    $('#tab_content').on('click','#no_tiene_bauleras',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

        $('.torre_'+nro+' #bauleras').prop('disabled',true);
        $('.dibujoT_'+nro+' #baulera').addClass('display_none');
        $('.torre_'+nro+' #bauleras option[value="0"]').attr('selected',true);
        $('.torre_'+nro+' #habilitar_otrosEspacios').addClass('display_none');

    });

    $('#tab_content').on('change','#locales_comerciales',function(){
       var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }
         
       var cant= $('.torre_'+nro+' #locales_comerciales').val();
       $('.dibujoT_'+nro+' #comercios').removeClass('display_none');
       $('.dibujoT_'+nro+' #list_com').empty();
       for (i=1;i<=cant;i++){
        $('.dibujoT_'+nro+' #list_com').append('<div class="icono_com">'+i+'</div>');
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
       $('.dibujoT_'+nro+' #cochera_cub').removeClass('display_none');
       $('.dibujoT_'+nro+'  #list_cc').empty();
       $('#uf_secundarias .torre_'+nro+' #cochera_cub').removeClass('display_none');
       $('#uf_secundarias .torre_'+nro+'  #list_cc').empty();
       for (i=1;i<=cant;i++){
        $('.dibujoT_'+nro+'  #list_cc').append('<div class="icono_cc" >'+i+'</div>');
        nuevo_elem = $('<div class="icono_cc" data-name=cochera_cubierta>'+i+'</div>');
        nuevo_elem.draggable();
        $('#uf_secundarias .torre_'+nro+' #list_cc').append(nuevo_elem);
        $('#uf_secundarias .torre_'+nro+' #list_cc').append('<div id="hidden_'+i+'" class="icono_cc_done" hidden=true>'+i+'</div>')
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
    });
    $('#tab_content').on('change','#bauleras',function(){
        var cant_torres = $('#cant_torres').val();
        for(i=1;i<=cant_torres;i++){
            if($('.tab_'+i).hasClass('tab_activa')){
                var nro = i;
            }
        }

       var cant= $('.torre_'+nro+' #bauleras').val();
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
      }
      $(this).parent().remove();
    });

    $('#tab_content').on('click','.nuevo_espacio',function(){
        var texto="Ingrese un espacio comun...";
        var espacio=$(this).val();
        
    if (espacio==texto) {
            $(this).val("");
        }
    });

    $('#tab_content').on('blur','.nuevo_espacio', function(){
      var texto="Ingrese un espacio comun...";
      var cant_torres = $('#cant_torres').val();
      for(i=1;i<=cant_torres;i++){
          if($('.tab_'+i).hasClass('tab_activa')){
              var nro = i;
          }
      }

      var nombre=$(this).attr('id');
      var nombre_id=nombre.split('_')[0]+'_'+nombre.split('_')[1];

      var espacio=$(this).val();
      if ((espacio!=texto)&(espacio!="")){
        $('.torre_'+nro+' #'+nombre_id).append('<div class="div_input" >' +
                                 '<div class="logo_close"></div>' +
                                 '<input type="text" id="'+nombre+'" class="nuevo_espacio" value="Ingrese un espacio comun...">' +
                                 '<input type="checkbox" name="con_reserva" id="con_reserva"> Uso con reserva' +
                                 '</div>');
        $(this).removeClass('nuevo_espacio');
        $(this).addClass('espacio_listo');

        $(this).parent().children('.logo_close').addClass('logo_close_done');
        $(this).parent().children('.logo_close').removeClass('logo_close');


        var nombre_dibujo=nombre_id+'_dib';
        var cant=$('.torre_'+nro+' #'+nombre_id+' .espacio_listo').length;
        $('.dibujoT_'+nro+' #'+nombre_dibujo).removeClass('display_none');
        $('.dibujoT_'+nro+' #list_'+nombre_id).append('<div class="elemento_list"><div class="number">'+cant+'</div>' +
                                '<div class="nombre_espacio">'+espacio+'</div></div>');
      }
      else{
       $(this).val("Ingrese un espacio comun...");
      }
    });


    /************************************---Paso 4--- **************************************************/
    

});
 