// Esercizio Carousel (Bonus) JS - jQuery

$(document).ready(function () {
$('.next').click(nextPicture);
$('.prev').click(prevPicture);

});

// Definizione funzioni
// Funzione che fa scorrere immagine e puntino guida in AVANTI
function nextPicture() {
  var imgAttiva = $('.slider-wrapper .images .active');
  var puntoGuida = $('.slider-wrapper .nav .active');
  imgAttiva.removeClass('active'); // Tolgo la class active dall'immagine attuale
  puntoGuida.removeClass('active');

  if(imgAttiva.hasClass('last')) { // Se sono sull'ultima immagine
    imgAttiva = $('.slider-wrapper .images .first'); // Punto con jQuery alla prima img con classe first
    puntoGuida = $('.slider-wrapper .nav .first');
    imgAttiva.addClass('active'); // Aggiungo la classe active
    puntoGuida.addClass('active');
  } else { // La classe active 'scorre' avanti di 1
    imgAttiva.next().addClass('active');
    puntoGuida.next().addClass('active');
  }
}
// Funzione che fa scorrere immagine e puntino guida INDIETRO
function prevPicture() {
  var imgAttiva = $('.slider-wrapper .images .active');
  var puntoGuida = $('.slider-wrapper .nav .active');
  imgAttiva.removeClass('active');
  puntoGuida.removeClass('active');

  if(imgAttiva.hasClass('first')) {
    imgAttiva = $('.slider-wrapper .images .last');
    puntoGuida = $('.slider-wrapper .nav .last');
    imgAttiva.addClass('active');
    puntoGuida.addClass('active');
  } else {
    imgAttiva.prev().addClass('active');
    puntoGuida.prev().addClass('active');
  }
}

function dotPicture() {
  var
}
