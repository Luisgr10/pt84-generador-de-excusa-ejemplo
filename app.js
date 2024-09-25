import "./style.css";

window.onload = function() {
  // Frases iniciales del Sombrero Seleccionador
  const inicio = [
    "¡Ah, muy interesante...!",
    "¡Vaya, vaya, veo grandes cualidades!",
    "Oh, esto será difícil...",
    "Hmm, veo mucho potencial aquí...",
    "¡Qué mente tan fascinante!",
    "¡Qué desafío tan emocionante!"
  ];

  // Frases intermedias de evaluación
  const mitad = [
    "tienes coraje, aunque también hay una chispa de inteligencia...",
    "veo lealtad, pero también una gran ambición...",
    "el valor es fuerte en ti, pero no puedo ignorar tu astucia...",
    "la sabiduría está presente, pero siento una ambición notable...",
    "una mente brillante, pero tu corazón es audaz...",
    "la paciencia y la lealtad fluyen por ti, aunque también la astucia..."
  ];

  // Casas de Hogwarts
  const casas = ["¡GRYFFINDOR!", "¡HUFFLEPUFF!", "¡RAVENCLAW!", "¡SLYTHERIN!"];

  // Función que selecciona una casa y muestra el resultado
  function seleccionarCasa() {
    // Seleccionar aleatoriamente las frases de inicio, mitad y la casa
    const fraseInicio = inicio[Math.floor(Math.random() * inicio.length)];
    const fraseMitad = mitad[Math.floor(Math.random() * mitad.length)];
    const fraseCasa = casas[Math.floor(Math.random() * casas.length)];

    // Construir la frase final
    const resultadoFinal = `${fraseInicio} ${fraseMitad} ${fraseCasa}`;

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerText = resultadoFinal;
  }

  // Evento del botón para seleccionar la casa
  document.getElementById("botonSeleccion").addEventListener("click", () => {
    console.log("Botón presionado: Seleccionando casa...");
    seleccionarCasa();
  });
};

