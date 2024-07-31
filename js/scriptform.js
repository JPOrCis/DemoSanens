/*validar campos de formulario*/
$(document).ready(function() {
    $('#contactForm input, #contactForm textarea, #contactForm #consentimiento').on('keyup change', function() {
        var formValid = true;
        $('#contactForm input[required], #contactForm textarea[required]').each(function() {
            if ($(this).val() === '') {
                formValid = false;
                return false;
            }
        });
        if ($('#consentimiento').is(':checked')) {
            $('#submitButton').prop('disabled', !formValid);
        } else {
            $('#submitButton').prop('disabled', true);
        }
    });

    // Limpiar el formulario después del envío
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Evitar que se envíe el formulario por defecto

        // Realizar la solicitud AJAX
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                alert(response); // Mostrar mensaje de éxito
                $('#contactForm')[0].reset(); // Limpiar el formulario
                $('#submitButton').prop('disabled', true); // Desactivar el botón de enviar
            },
            error: function(error) {
                console.error('Error al enviar el formulario:', error);
            }
        });
    });
});

/*background menu toggle activo*/
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});