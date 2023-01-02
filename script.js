const imagen1 = "https://picsum.photos/id/1/200"
const imagen2 = "https://picsum.photos/id/2/200"
const imagen3 = "https://picsum.photos/id/3/200"
const imagen4 = "https://picsum.photos/id/4/200"
const imagen5 = "https://picsum.photos/id/5/200"

var imagenActual = document.getElementById("imagenActual");
var botonAnterior = document.getElementById("botonAnterior");
var botonSiguiente = document.getElementById("botonSiguiente");
var imagenes = [imagen1, imagen2, imagen3];

// Añadir una imagen al final del array
imagenes.push(imagen4);

// Añadir una imagen al principio del array
imagenes.unshift(imagen5);

var primeraImagen = imagenes[0]; 
  // Obtener los elementos de la página
  

  // Asignar manejadores de eventos a los botones
  botonAnterior.addEventListener("click", mostrarAnterior);
  botonSiguiente.addEventListener("click", mostrarSiguiente);

  // Funciones para mostrar la imagen anterior o siguiente
    function mostrarAnterior() {
  // Obtener el índice de la imagen actual
  var indiceImagenActual = imagenes.indexOf(imagenActual.src);

  // Verificar si es la primera imagen de la galería
  if (indiceImagenActual > 0) {
    // Mostrar la imagen anterior
    imagenActual.src = imagenes[indiceImagenActual - 1];
  }
}

// Función para mostrar la imagen siguiente
    function mostrarSiguiente() {
  // Obtener el índice de la imagen actual
  var indiceImagenActual = imagenes.indexOf(imagenActual.src);

  // Verificar si es la última imagen de la galería
  if (indiceImagenActual < imagenes.length - 1) {
    // Mostrar la imagen siguiente
    imagenActual.src = imagenes[indiceImagenActual + 1];
  }
}