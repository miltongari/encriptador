// Textarea
const inputText = document.getElementById("input-text");
const outText = document.getElementById("output-text");
const imagenPersona = document.getElementById("personid");

// Botones
const btnEncript = document.getElementById("btn-encript");
btnEncript.addEventListener("click", verificarTextoEncript);
const btnDesencript = document.getElementById("btn-desencript");
btnDesencript.addEventListener("click", verificarTextoDesencript);
const btnCopyText = document.getElementById("btn-copy");
btnCopyText.addEventListener("click", copyText);

// funcion para encriptar el texto


function verificarTextoEncript() {
  const caracteres = /^(?!.,*[^a-z0-9\sñ]).+$/;
  const texto = capturaText();

  if (caracteres.test(texto)) {
    enviarText(encriptarTexto(texto));
    
    //funcion para desaparecer informacion del lado derecho
    verificarInputVacio();

  } else {
    textVacio(texto);
  }
}

// funcion para desencriptar
function verificarTextoDesencript() {
  const caracteres = /^(?!.,*[^a-z0-9\sñ]).+$/;
  const texto = capturaText();

  if (caracteres.test(texto)) {
    enviarText(desencriptarTexto(texto));
    verificarInputVacio();
  } else {
    textVacio(texto);
  }
}

// Funciones de texto
function capturaText() {
  return inputText.value;
}

function enviarText(text) {
  return (outText.value = text);
}

function textVacio(texto) {
  if (texto == "") {
    alert("No hay texto");
  } else {
    alert("Tu texto tiene acentos, mayúsculas, lineas sin texto, o caracteres no permitidos.");
  }
}

function cleanText() {
  outText.value = "";
}

function copyText() {
  if (outText.value != "") {
    navigator.clipboard.writeText(outText.value);
    alert("Texto copiado.");
    cleanText();
  } else {
    console.log("Error.");
  }
}

// Encriptacion
function encriptarTexto(texto) {
  texto = texto.replaceAll("a", "ai");
  texto = texto.replaceAll("e", "enter");
  texto = texto.replaceAll("i", "imes");
  texto = texto.replaceAll("o", "ober");
  texto = texto.replaceAll("u", "ufat");
  return texto;
}

function desencriptarTexto(texto) {
  texto = texto.replaceAll("ufat", "u");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("ai", "a");
  return texto;
}



// textarea derecho vacio

function verificarInputVacio() {
  if (inputText.value === "") {
    
    imagenPersona.style.display = "block"; // Mostrar imagen

    outText.style.display = "none"; // Ocultar output-text
    btnCopyText.style.display = "none"; // Ocultar botón copiar
  } else {
    imagenPersona.style.display = "none"; // Ocultar imagen

    outText.style.display = "block"; // Mostrar output-text
    btnCopyText.style.display = "block"; // Mostrar botón copiar
  }
}

verificarInputVacio();
