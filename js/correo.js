document.addEventListener('DOMContentLoaded', function() {
    const emailField = document.getElementById('email');
    const copyBtn = document.getElementById('copy-btn');
    const copySuccess = document.getElementById('copy-success');

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