const textoLetras = "Hola soy 7beelzebub7";
const contenedorLetras = document.getElementById("letras");

textoLetras.split("").forEach(letra => {
  const span = document.createElement("span");
  span.textContent = letra;
  span.classList.add("letra");

  span.addEventListener("mouseenter", () => {
    span.classList.add("lila");
  });

  span.addEventListener("mouseleave", () => {
    span.classList.remove("lila");
  });

  contenedorLetras.appendChild(span);
});


const textoPalabras = "tambien conocido como el señor de las moscas";
const contenedorPalabras = document.getElementById("palabras");

const palabras = textoPalabras.split(" ");  

palabras.forEach(palabra => {
  const span = document.createElement("span");
  span.textContent = palabra;  
  span.classList.add("palabra");

  span.addEventListener("mouseenter", () => {
    span.classList.add("lila");
  });

  span.addEventListener("mouseleave", () => {
    span.classList.remove("lila");
  });

  contenedorPalabras.appendChild(span);
  contenedorPalabras.appendChild(document.createTextNode(" ")); 
});


const textoTodo = "y asociado con el pecado de la gula";
const contenedorTodo = document.getElementById("todo");

contenedorTodo.textContent = textoTodo;

contenedorTodo.addEventListener("mouseenter", () => {
  contenedorTodo.classList.add("lila");
});

contenedorTodo.addEventListener("mouseleave", () => {
  contenedorTodo.classList.remove("lila");
});

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const idImagen = boton.getAttribute("data-img");
    const contenedor = document.getElementById(idImagen);

    contenedor.classList.toggle("mostrar");
  });
});

const mensajeAlarma = document.getElementById("mensajeAlarma");
const activarAlarma = document.getElementById("activarAlarma");
const alarmas = [
  "¡ALERTA DE TORTUGAS INVISIBLES!",
  "¡PELIGRO: GATOS EN MODO FURIA!",
  "¡EMERGENCIA: DIMENSIÓN DESCONOCIDA ABIERTA!",
  "¡ATENCIÓN: INVASIÓN DE PAYASOS CUÁNTICOS!"
];
activarAlarma.addEventListener("click", () => {
  const aleatoria = Math.floor(Math.random() * alarmas.length);
  mensajeAlarma.textContent = alarmas[aleatoria];
});


const btn = document.getElementById("glitchear");
const texto = document.getElementById("texto");
const frases = [
  "El gobierno te controla.",
  "La derecha controla el mundo.",
  "La sandía controla el tiempo.",
  "Tu reflejo te está juzgando.",
  "ERROR: Realidad no encontrada.",
  "¡Despierta! Este no es tu cuerpo.",
  "Los números te observan.",
  "Próxima parada: universo Ϟ∑π∞"
];
btn.addEventListener("click", () => {
  document.body.classList.toggle("glitch");
  const aleatorio = Math.floor(Math.random() * frases.length);
  texto.textContent = frases[aleatorio];
});


const insulto = document.getElementById("insulto");
const boton = document.getElementById("generar");
const inicio = [
  "¡Por la barba de Neptuno,",
  "¡En nombre del Kraken,",
  "¡Que los tiburones bailen flamenco,",
  "¡Por las calaveras del Caribe,"
];
const medio = [
  "tu código navega peor que",
  "eres más confuso que",
  "tus funciones tienen más vueltas que",
  "tu lógica es tan torcida como"
];
const final = [
  "una brújula sin norte!",
  "un pulpo haciendo yoga!",
  "un loro borracho!",
  "un mapa dibujado por un cangrejo!"
];
boton.addEventListener("click", () => {
  const i = Math.floor(Math.random() * inicio.length);
  const m = Math.floor(Math.random() * medio.length);
  const f = Math.floor(Math.random() * final.length);
  insulto.textContent = `${inicio[i]} ${medio[m]} ${final[f]}`;
});


const calcularBtn = document.getElementById("calcularOscuridad");
const resultado = document.getElementById("resultadoOscuridad");
calcularBtn.addEventListener("click", () => {
  const p1 = document.getElementById("pregunta1").value;
  const p2 = document.getElementById("pregunta2").value;
  const p3 = document.getElementById("pregunta3").value;
  let puntaje = 0;
  const valores = { bajo: 10, medio: 30, alto: 50 };
  puntaje += valores[p1] + valores[p2] + valores[p3];
  resultado.textContent = `Nivel de oscuridad: ${puntaje}%. Recomendación: ${puntaje > 100 ? "escuchar doom metal." : "tomar un poco de sol."}`;
});

const consultarOraculo = document.getElementById("consultarOraculo");
const preguntaOraculo = document.getElementById("preguntaOraculo");
const respuestaOraculo = document.getElementById("respuestaOraculo");

const respuestasTerribles = [
  "Sí, pero robando un caballo.",
  "No, a menos que estés disfrazado de bocachico.",
  "Hazlo... mientras gritas como cabra.",
  "Solo si bailas primero sobre una mesa.",
  "Consulta con un pato antes de decidir.",
  "Nunca. A menos que Chayan te lo pida."
];

consultarOraculo.addEventListener("click", () => {
  if (preguntaOraculo.value.trim() === "") {
    respuestaOraculo.textContent = "Haz una pregunta primero, humano imprudente.";
    return;
  }
  const aleatoria = Math.floor(Math.random() * respuestasTerribles.length);
  respuestaOraculo.textContent = respuestasTerribles[aleatoria];
});

const palabraInput = document.getElementById("palabraProhibida");
const activarClonador = document.getElementById("activarClonador");
const zonaCastigo = document.getElementById("zonaCastigo");
let intervaloCastigo;

activarClonador.addEventListener("click", () => {
  clearInterval(intervaloCastigo);
  zonaCastigo.textContent = "";
  const palabra = palabraInput.value.trim();
  if (palabra === "") return;

  intervaloCastigo = setInterval(() => {
    zonaCastigo.textContent += `${palabra} `;
  }, 3000);
});

const estadoMental = document.getElementById("estadoMental");
const generarPeinado = document.getElementById("generarPeinado");
const resultadoPeinado = document.getElementById("resultadoPeinado");

const peinados = {
  caos: "Explosión Estelar de Gel",
  zen: "Lluvia de Loto Minimalista",
  estres: "Nido de Nervios con Flequillo",
  genio: "Torre de Pensamientos Retorcidos",
  raro: "Afro Cibernético con puntas de fuego"
};

generarPeinado.addEventListener("click", () => {
  const estado = estadoMental.value;
  if (!estado) {
    resultadoPeinado.textContent = "Elige primero tu estado mental, ser cósmico.";
  } else {
    resultadoPeinado.textContent = `Tu peinado es: ${peinados[estado]}`;
  }
});

const emocionInput = document.getElementById("emociónBinaria");
const traducirBinario = document.getElementById("traducirBinario");
const resultadoBinario = document.getElementById("resultadoBinario");

traducirBinario.addEventListener("click", () => {
  const emocion = emocionInput.value.trim();
  if (emocion === "") {
    resultadoBinario.textContent = "Dame una emoción, no seas frío como un bit sin corriente.";
    return;
  }

  let binario = "";
  for (let i = 0; i < emocion.length; i++) {
    binario += emocion[i].charCodeAt(0).toString(2).padStart(8, "0") + " ";
  }

  resultadoBinario.textContent = `"${emocion}" en binario es:\n${binario}`;
});

const mensajeUsuario = document.getElementById("mensajeUsuario");
const hablarPared = document.getElementById("hablarPared");
const respuestaPared = document.getElementById("respuestaPared");

const respuestasPared = [
  "Ajá.",
  "Te estoy escuchando... creo.",
  "¿Y eso qué tiene que ver conmigo?",
  "Mmm...",
  "¿Otra vez tú?",
  "Continúa, aunque no cambiará nada.",
  "Ok.",
  "Claro... lo que tú digas."
];

hablarPared.addEventListener("click", () => {
  if (mensajeUsuario.value.trim() === "") {
    respuestaPared.textContent = "Silencio también es una respuesta.";
    return;
  }

  const index = Math.floor(Math.random() * respuestasPared.length);
  respuestaPared.textContent = respuestasPared[index];
});

const expresionInput = document.getElementById("expresionMatematica");
const calcularExistencial = document.getElementById("calcularExistencial");
const resultadoExistencial = document.getElementById("resultadoExistencial");

const reflexiones = [
  "¿Realmente necesitabas saber eso?",
  "El universo sigue expandiéndose… ¿y tú haciendo cuentas?",
  "Todo es relativo, incluso este resultado.",
  "Tal vez la respuesta esté dentro de ti, no en esta calculadora.",
  "¿No era más fácil preguntarle a tu alma?",
  "¡Felicidades! Has logrado dominar lo mismo ue alguien de primaria."
];

calcularExistencial.addEventListener("click", () => {
  const expresion = expresionInput.value.trim();
  try {
    const resultado = eval(expresion);
    const pensamiento = reflexiones[Math.floor(Math.random() * reflexiones.length)];
    resultadoExistencial.textContent = `Resultado: ${resultado} — ${pensamiento}`;
  } catch {
    resultadoExistencial.textContent = "Eso ni un filósofo lo puede calcular bien.";
  }
});

const iniciarDestruccion = document.getElementById("iniciarDestruccion");
const cuentaRegresiva = document.getElementById("cuentaRegresiva");

iniciarDestruccion.addEventListener("click", () => {
  let tiempo = 5;
  cuentaRegresiva.textContent = `Autodestrucción en ${tiempo}...`;

  const intervalo = setInterval(() => {
    tiempo--;
    if (tiempo > 0) {
      cuentaRegresiva.textContent = `Autodestrucción en ${tiempo}...`;
    } else {
      clearInterval(intervalo);
      cuentaRegresiva.textContent = "¡BOOM!";
      destruirDOM();
    }
  }, 1000);
});

function destruirDOM() {
  const elementos = document.body.children;
  let i = elementos.length - 1;

  const borrar = setInterval(() => {
    if (i >= 0) {
      elementos[i].remove();
      i--;
    } else {
      clearInterval(borrar);
    }
  }, 200);
}

const botonOpinion = document.getElementById("botonOpinion");
const consejo = document.getElementById("consejo");

const consejos = [
  "Deberías tomar más agua. No me importa si no tienes sed.",
  "Nunca olvides cargar tu teléfono, el mundo depende de ti.",
  "¿Has intentado respirar profundamente? A veces funciona.",
  "Saluda a alguien extraño hoy, o no, allá tú.",
  "Si la vida te da limones, probablemente alguien más quiere limonada.",
  "Aprende a decir 'no', pero solo cuando quieras.",
  "No te preocupes, el Elon Musk no sabe lo que haces en internet."
];

botonOpinion.addEventListener("click", () => {
  const index = Math.floor(Math.random() * consejos.length);
  consejo.textContent = consejos[index];
});

const eventoHistorico = document.getElementById("eventoHistorico");
const reescribirHistoria = document.getElementById("reescribirHistoria");
const resultadoHistoria = document.getElementById("resultadoHistoria");

const versionesAbsurdas = [
  "Si Napoleón hubiera tenido TikTok, habría conquistado con bailes.",
  "¿Y si la Revolución Francesa empezó porque alguien olvidó apagar la estufa?",
  "Imagina que Cleopatra era influencer de moda en el Nilo.",
  "La Segunda Guerra Mundial podría haberse evitado con una reunión de Zoom.",
  "Si Einstein hubiera inventado el WiFi, el tiempo sería más rápido navegando.",
  "La invención de la rueda fue solo para jugar a las canicas gigantes."
];

reescribirHistoria.addEventListener("click", () => {
  if (eventoHistorico.value.trim() === "") {
    resultadoHistoria.textContent = "Necesito un evento para hacer un lío divertido.";
    return;
  }
  const index = Math.floor(Math.random() * versionesAbsurdas.length);
  resultadoHistoria.textContent = versionesAbsurdas[index];
});

const insultoUsuario = document.getElementById("insultoUsuario");
const guardarInsulto = document.getElementById("guardarInsulto");
const mostrarInsultos = document.getElementById("mostrarInsultos");
const listaInsultos = document.getElementById("listaInsultos");

const insultosGuardados = [];

guardarInsulto.addEventListener("click", () => {
  const texto = insultoUsuario.value.trim();
  if (texto === "") {
    listaInsultos.textContent = "No seas tímido, ¡insúltame algo!";
    return;
  }
  insultosGuardados.push(texto);
  insultoUsuario.value = "";
  listaInsultos.textContent = "Insulto guardado con furia.";
});

mostrarInsultos.addEventListener("click", () => {
  if (insultosGuardados.length === 0) {
    listaInsultos.textContent = "No hay insultos guardados... todavía.";
    return;
  }
  listaInsultos.textContent = "Insultos guardados:\n" + insultosGuardados.join("\n");
});

const mensajeLocura = document.getElementById("mensajeLocura");
const elementoLoco = document.getElementById("elementoLoco");

let nivelLocura = 0;

setInterval(() => {
  nivelLocura++;

  if (nivelLocura === 5) {
    elementoLoco.classList.remove("oculto");
    elementoLoco.className = "locura-1";
    mensajeLocura.textContent = "Empiezas a notar algo raro...";
  }
  if (nivelLocura === 10) {
    elementoLoco.className = "locura-2";
    mensajeLocura.textContent = "¿Escuchaste eso? Nada, sigue...";
  }
  if (nivelLocura === 15) {
    elementoLoco.className = "locura-3";
    mensajeLocura.textContent = "Esto ya no es normal.";
  }
  if (nivelLocura === 20) {
    elementoLoco.className = "locura-4";
    mensajeLocura.textContent = "¡Demasiada locura! ¡Corre!";
  }
}, 3000);

const botonEscapista = document.getElementById("botonEscapista");
const zonaBoton = document.getElementById("zonaBoton");
const mensajeEscape = document.getElementById("mensajeEscape");

zonaBoton.addEventListener("mousemove", (e) => {
  const rect = botonEscapista.getBoundingClientRect();
  const distancia = Math.hypot(e.clientX - rect.left, e.clientY - rect.top);
  if (distancia < 80) {
    const newX = Math.random() * (zonaBoton.clientWidth - botonEscapista.offsetWidth);
    const newY = Math.random() * (zonaBoton.clientHeight - botonEscapista.offsetHeight);
    botonEscapista.style.left = `${newX}px`;
    botonEscapista.style.top = `${newY}px`;
  }
});

botonEscapista.addEventListener("click", () => {
  mensajeEscape.textContent = "¡Lo lograste! Eres más rápido que un píxel.";
});