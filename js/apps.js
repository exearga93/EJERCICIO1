document.addEventListener("DOMContentLoaded", function () {
  let numeroMagico;
  const botonComenzar = document.getElementById("iniciar-juego");
  const botonEnviar = document.getElementById("enviar-numero");
  const inputNumero = document.getElementById("numero-usuario");

  botonComenzar.addEventListener("click", function () {
    numeroMagico = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    console.log('Número mágico generado:', numeroMagico)
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
      alert("¡Felicitaciones! Adivinaste el número!");
    } else if (numeroUsuario < numeroMagico) {
      alert(
        "El número que ingresaste es menor al número mágico. Intenta de nuevo."
      );
    } else {
      alert(
        "El número que ingresaste es mayor al número mágico. Intenta de nuevo."
      );
    }
  });
});
