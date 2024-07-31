/*barra navegacion color scroll*/
$(document).ready(function () {
    $(window).scroll(function () {
      // check if scroll is greater than 50px from top, add/remove navbar background
      if ($(this).scrollTop() > 50) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });
  });

/*background menu toggle activo*/
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

/*efecto fade scroll*/
$(document).ready(function() {
  $(window).scroll(function() {
    $('.section').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('active');
      }
    });
  });
});


//efecto tralacion izquierda-derecha
// Función para detectar cuando los elementos son visibles en la ventana del navegador
function elementVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return !(rect.bottom < 0 || rect.top - windowHeight >= 0);
}

// Función para activar animaciones cuando los elementos son visibles
function activateAnimations() {
  var elementos = document.querySelectorAll('.animacion-izquierda, .animacion-derecha');
  elementos.forEach(function(elemento) {
    if (elementVisible(elemento)) {
      elemento.classList.add('animacion-activa');
    }
  });
}

// Detectar el evento de scroll y activar las animaciones cuando sea necesario
window.addEventListener('scroll', function() {
  activateAnimations();
});

// Activar las animaciones al cargar la página (en caso de que ya estén visibles)
activateAnimations();


//efecto float arriba-abajo
// Función para detectar cuando los elementos son visibles en la ventana del navegador
function elementVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return !(rect.bottom < 0 || rect.top - windowHeight >= 0);
}

// Función para activar animaciones cuando los elementos son visibles
function activateAnimationsf() {
  var elementos = document.querySelectorAll('.animacion-float-arriba, .animacion-float-abajo');
  elementos.forEach(function(elemento) {
    if (elementVisible(elemento)) {
      elemento.classList.add('animacion-activaf');
    }
  });
}

// Detectar el evento de scroll y activar las animaciones cuando sea necesario
window.addEventListener('scroll', function() {
  activateAnimationsf();
});

// Activar las animaciones al cargar la página (en caso de que ya estén visibles)
activateAnimationsf();