$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

});

var mostrarAceptado = function () {
    swal("Registro correcto", "Empieza ahora", "success");

    setTimeout(function () {
        location.href = "proyectos.html"
    }, 3000);
}

var mostrarProyectos = function () {
    setTimeout(function () {
        location.href = "tema2.html"
    }, 3000);
}

var mostrarOk = function(event){
    event.preventDefault();
    swal("Registro correcto", "Empieza ahora", "success");

}

$("#form-registro").click(mostrarAceptado);
$("#sumbmit-proyectos").submit(mostrarok);

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2 // Creates a dropdown of 15 years to control year
});


/* HTML feedback chat */
var ingresarComentario = document.getElementById("ingresarComentario");
var comentarioEnTiempoReal = document.getElementById("comentarioEnTiempoReal");

function duplicar() {

    comentarioEnTiempoReal.innerHTML = ingresarComentario.value;

}

function publicarComentario() {
    //Se comienza guardando el valor que el usurio ingrese en comentarioEnTiempoReal, clonando todos sus atributos, para así poderlo publicar d emanera identica.

    var comentarioPublicado = comentarioEnTiempoReal.cloneNode(true);

    var nuevosComentarios = document.getElementById("comentariosPublicados");

    nuevosComentarios.insertBefore(comentarioPublicado, nuevosComentarios.firstChild);

    var lineaSeparadora = document.createElement("hr");

    nuevosComentarios.insertBefore(lineaSeparadora, nuevosComentarios.firstChild);
    comentarioEnTiempoReal.removeAttribute("style");
}

function letraChica() {
    comentarioEnTiempoReal.style.fontSize = "20px";

}

function letraMediana() {
    comentarioEnTiempoReal.style.fontSize = "40px";
}

function letraGrande() {
    comentarioEnTiempoReal.style.fontSize = "80px";
}

function colorDeTexto() {
    var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de texto que desees:  ");
    eleccionUsuario = "#" + eleccionUsuario;
    comentarioEnTiempoReal.style.color = eleccionUsuario;

}

function alinearIzquierda() {
    comentarioEnTiempoReal.style.textAlign = "left";
}

function centrar() {
    comentarioEnTiempoReal.style.textAlign = "center";
}

function alinearDerecha() {
    comentarioEnTiempoReal.style.textAlign = "right";
}


function colorDeFondo() {
    var eleccionUsuario = prompt("Ingresa el código hexadecimal del color de fondo que desees:  ");
    eleccionUsuario = "#" + eleccionUsuario;
    comentarioEnTiempoReal.style.backgroundColor = eleccionUsuario;

}
