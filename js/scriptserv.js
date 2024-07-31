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