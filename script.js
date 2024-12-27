// Función para validar un número de teléfono de EE.UU.
function checkPhone() {
    const str = document.getElementById('user-input').value;
    const resultDiv = document.getElementById('results-div');
    if (!str) { // Si el valor está vacío
        alert("Please provide a phone number");
        return;
    }
    const result = telephoneCheck(str);
    resultDiv.innerText = result ? `Valid US number: ${str}` : `Invalid US number: ${str}`;
    resultDiv.classList.remove('hidden'); // Mostramos el resultado
}

// Función para limpiar el contenido del div de resultados
function clearTextContent(elementId) {
    const resultDiv = document.getElementById(elementId);
    resultDiv.textContent = "";
    resultDiv.classList.add('hidden'); // Ocultamos el div al limpiar
}

// 4. Validación de formato de número telefónico de EE.UU.
function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    if (!regex.test(str)) return false; // Comprobamos si el formato es válido con la regex
    const digits = str.replace(/[^\d]/g, ''); // Eliminamos los caracteres no numéricos
    return digits.length === 10 || (digits.length === 11 && digits[0] === '1'); // Verificamos que el número tenga 10 dígitos o 11 si comienza con '1'
}

// Evento para limpiar el contenido del div al hacer clic en el botón
document.getElementById('clear-btn').addEventListener('click', function() {
    clearTextContent('results-div');
});

// Ocultamos el div de resultados al iniciar la página
window.onload = function () {
    document.getElementById('results-div').classList.add('hidden');
};
