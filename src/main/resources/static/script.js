
function validateEmail(input) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/;
    const value = input.value.toUpperCase();
    input.value = value;
    const isValid = emailPattern.test(value);
    const errorMessage = document.getElementById('correo-error');
    if (!isValid) {
        input.classList.add('error');
        errorMessage.textContent = 'Correo no válido';
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

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('name').classList.add('error');
        document.getElementById('name-error').textContent = 'El nombre es obligatorio';
        isValid = false;
    } else {
        document.getElementById('name').classList.remove('error');
        document.getElementById('name-error').textContent = '';
    }

    if (email === '') {
        document.getElementById('email').classList.add('error');
        document.getElementById('email-error').textContent = 'El correo es obligatorio';
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('error');
        document.getElementById('email-error').textContent = '';
    }

    if (!isValid) {
        return;
    }

    const formData = {
        name: name,
        email: email
    };

    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})