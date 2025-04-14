
const numeroConversao = document.getElementById("number");
const resultado = document.getElementById("result");
const boton3 = document.getElementById("boton3");

boton3.addEventListener("click", (e) => {
    e.preventDefault();
    const numero = parseInt(numeroConversao.value);
    const binario = numero.toString(2);
   resultado.innerHTML = binario;
  });