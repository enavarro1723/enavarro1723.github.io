document.addEventListener('DOMContentLoaded', function() {
    const emailContainers = document.querySelectorAll('.email-container');

    emailContainers.forEach(function(container) {
      const emailField = container.querySelector('.email');
      const copyBtn = container.querySelector('.copy-btn');
      const copySuccess = container.querySelector('.copy-success');

      copyBtn.addEventListener('click', function() {
        emailField.select();
        document.execCommand('copy');
        // Deseleccionar el campo después de copiar
        window.getSelection().removeAllRanges();

        // Mostrar el mensaje de confirmación temporal
        copySuccess.style.display = 'inline';
        setTimeout(function() {
          copySuccess.style.display = 'none';
        }, 2000); // Ocultar el mensaje después de 2 segundos
      });
    });
  });