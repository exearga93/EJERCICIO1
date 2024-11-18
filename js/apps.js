document.addEventListener("DOMContentLoaded", function () {
  let numeroMagico;
  const botonComenzar = document.getElementById("iniciar-juego");
  const botonEnviar = document.getElementById("enviar-numero");
  const inputNumero = document.getElementById("numero-usuario");

  botonComenzar.addEventListener("click", function () {
    numeroMagico = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    alert("¡El juego ha comenzado! Adivina el número mágico entre 1 y 100.");
    inputNumero.value = ""; // Resetea el campo de entrada
  });

  botonEnviar.addEventListener("click", function () {
    const numeroUsuario = parseInt(inputNumero.value);

    if (isNaN(numeroUsuario)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    if (numeroUsuario === numeroMagico) {
      alert("¡Felicidades! Adivinaste el número mágico.");
    } else if (numeroUsuario < numeroMagico) {
      alert(
        "El número ingresado es menor que el número mágico. Intenta de nuevo."
      );
    } else {
      alert(
        "El número ingresado es mayor que el número mágico. Intenta de nuevo."
      );
    }
  });
});
