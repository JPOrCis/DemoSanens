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


/*botones de whatasapp*/
document.getElementById('whatsappButton1').addEventListener('click', function() {
  const phoneNumber = '+51964339790'; // Reemplaza con tu número de teléfono
  const message = 'Separa tu cita aquí';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});

document.getElementById('whatsappButton2').addEventListener('click', function() {
  const phoneNumber = '+51919444680'; // Reemplaza con tu número de teléfono
  const message = 'Opera con nosotros';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
