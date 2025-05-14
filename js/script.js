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

