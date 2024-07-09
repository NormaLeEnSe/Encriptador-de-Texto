function encriptar() {
  // Obtener el texto del textarea/input
  const textoUsuario = document.getElementById("textarea__usuario").value;

  // Verificar si el texto contiene mayúsculas o caracteres con acentos
  const tieneMayusculas = /[A-Z]/.test(textoUsuario);
  const tieneAcentos = /[áéíóúÁÉÍÓÚñÑüÜ]/.test(textoUsuario);
  if (tieneAcentos || tieneMayusculas) {
    alert("Favor de insertar caracteres validos");
    return;
  }

  // Cambiar las letras por su código encriptado
  const textoEncriptado = textoUsuario
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  //solo se podra encriptar cuando el usuario haya escrito algo
  if (textoUsuario === "") {
    alert("Ingresa el texto que deseas encriptar");
  } else {
    // Mostrar el texto encriptado en el div de la img
    document.querySelector(".container__img .h2__div__img").innerText =
      textoEncriptado;
    document.getElementById("btnCopiar").disabled = false;
    ocultarObjetos();
  }
}

function desencriptar() {
  // Obtener el texto del textarea/ input
  const textoUsuarioDesencriptado =
    document.getElementById("textarea__usuario").value;

  // Cambiar código a lenguaje normal
  const textoDesencriptado = textoUsuarioDesencriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  //solo se podra desencriptar cuando el usuario haya escrito algo
  if (textoUsuarioDesencriptado === "") {
    alert("Ingresa el texto que deseas Desencriptar");
  } else {
    // Mostrar el texto desencriptado en el div de la img
    document.querySelector(".container__img .h2__div__img").innerText =
      textoDesencriptado;
    document.getElementById("btnCopiar").disabled = false;
    ocultarObjetos();
  }
}

function ocultarObjetos() {
  //ocultar la img y el h2
  document.querySelector(".img_munieco").style.display = "none";
  document.querySelector(".p__div__img").style.display = "none";
}

function copiarTexto() {
  texto = document.querySelector(".container__img .h2__div__img").innerText;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
