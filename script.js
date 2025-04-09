// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');

// Función para voltear la tarjeta
function voltearTarjeta() {
    tarjeta.classList.add('volteada');
}

// Función para volver a la cara frontal
function volverACaraFrontal() {
    tarjeta.classList.remove('volteada');
}

// Añadir event listeners a los botones
verDetallesButton.addEventListener('click', voltearTarjeta);
volverButton.addEventListener('click', volverACaraFrontal); 