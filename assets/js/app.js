  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
  });
          


var mostrarAceptado = function(){
   swal("Registro correcto", "Empieza ahora", "success");
    
   setTimeout(function(){ location.href="../../proyectos.html" }, 3000);
}

var mostrarProyectos = function(){
    setTimeout(function(){ location.href="../../tema2.html" }, 3000);
}

$("#form-registro").click(mostrarAceptado);
$("#sumbmit-proyectos").click(mostrarProyectos);
