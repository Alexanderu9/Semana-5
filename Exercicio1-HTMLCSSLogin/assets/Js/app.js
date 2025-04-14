const tipoDeSetor = ["comercial", "RH", "TI"];


const divErro = document.getElementById("erro");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const select = document.getElementById("select");
const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");
const novoBotao = document.createElement("button");



function digitarUsuario() {
  return usuario.value;
}

function digitarSenha() {
  return senha.value;
}


boton.addEventListener("click", (e) => {
  e.preventDefault();
  const setor = select.value;
  const user = digitarUsuario();
  const pass = digitarSenha();
  
 
switch (setor) {
  case "comercial":
  
    if (user === "CMCL12" && pass === "Com&c1@l") {
      console.log("Bem vindo ao setor comercial");
      novoBotao.textContent = "Produtos em venda";
      novoBotao.id = "boton";
      boton2.appendChild(novoBotao);
      novoBotao.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "../setorComercial.html";
      divErro.innerHTML = "Bem vindo ao setor comercial";
      divErro.classList.remove("erro");
      divErro.classList.add("confirm");
      });
    } else {
      divErro.innerHTML = "Usuario ou senha invalidos!!";
      divErro.classList.remove("confirm");
      divErro.classList.add("erro");
    }

    break;

  case "RH":
   
    if (user === "98HR" && pass === "RH!@2025") {
      console.log("Bem vindo ao setor RH");
      divErro.innerHTML = "Bem vindo ao setor RH";
      novoBotao.textContent = "Ver cargos e salários";
      novoBotao.id = "boton";
      boton2.appendChild(novoBotao);
      novoBotao.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "../cargos.html";
      });
      divErro.classList.remove("erro");
      divErro.classList.add("confirm");
    } else {
      divErro.innerHTML = "Usuario ou senha invalidos!!";
      divErro.classList.remove("confirm");
      divErro.classList.add("erro");
    }

    break;

  case "TI":
    if (user === "DEV4567TI" && pass === "IT&&||==2025") {
      console.log("Bem vindo ao setor TI");
      divErro.innerHTML = "Bem vindo ao setor TI";
      divErro.classList.remove("erro");
      divErro.classList.add("confirm");
    } else {
      divErro.innerHTML = "Usuario ou senha invalidos!!";
      divErro.classList.remove("confirm");
      divErro.classList.add("erro");
    }
    break;

  default:
    divErro.innerHTML = "setor nao encontrado";
    console.log("Setor não encontrado!!");
    divErro.classList.add("erro");
    break;
}
});
