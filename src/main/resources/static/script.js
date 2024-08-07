
function validateEmail(input) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z.]*$/;
    const invalidPattern = /[\sñÑáéíóúÁÉÍÓÚ]/; 
    const value = input.value.toUpperCase();
    input.value = value;
    const isValid = emailPattern.test(value) && !invalidPattern.test(value);
    const errorMessage = document.getElementById('correo-error');
    if (!isValid) {
        input.classList.add('error');
        errorMessage.textContent = 'Correo no válido. No debe contener espacios, tildes o la letra "ñ".';
    } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
    }
}

function updateCharacterCount(input, maxLength) {
    const charCount = input.value.length;
    const charCountDisplay = document.getElementById(input.id + '-char-count');
    charCountDisplay.textContent = `${charCount}/${maxLength}`;
    if (charCount > maxLength) {
        input.value = input.value.substring(0, maxLength);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fields = ['nombres', 'apellidos', 'correo', 'descripcion'];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario para validación

        let hasError = false;

        fields.forEach(function(field) {
            const input = document.getElementById(field);
            const errorSpan = document.getElementById(`${field}-error`);

            if (!input.value.trim()) {
                errorSpan.textContent = `El campo ${field} es obligatorio.`;
                input.classList.add('border-red-500');
                hasError = true;
            } else {
                errorSpan.textContent = '';
                input.classList.remove('border-red-500');
            }
        });

        if (!hasError) {
            form.submit();
        }
    });
});