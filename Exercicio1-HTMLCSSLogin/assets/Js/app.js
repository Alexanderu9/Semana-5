const tipoDeSetor = ["comercial", "RH", "TI"];

let setor = prompt("Digite seu setor (comercial, RH ou TI):");

let comercial = tipoDeSetor[0];
let RH = tipoDeSetor[1];
let TI = tipoDeSetor[2];

function digitarUsuario() {
  let usuario = prompt("Digite seu usuario?");
  return usuario;
}

function digitarSenha() {
  let senha = prompt("Digite sua senha?");
  return senha;
}

switch (setor) {
  case "comercial":
    let uComercial = digitarUsuario();
    let sComercial = digitarSenha();
    if (uComercial === "CMCL12" && sComercial === "Com&c1@l") {
      console.log("Bem vindo ao setor comercial");
    } else {
      console.log("Usuario ou senha invalidos");
    }

    break;

  case "RH":
    let uRH = digitarUsuario();
    let sRH = digitarSenha();
    if (uRH === "98HR" && sRH === "RH!@2025") {
      console.log("Bem vindo ao setor RH");
    } else {
      console.log("Usuario ou senha invalidos");
    }

    break;

  case "TI":
    let uTI = digitarUsuario();
    let sTI = digitarSenha();
    if (uTI === "DEV4567TI" && sTI === "IT&&||==2025") {
      console.log("Bem vindo ao setor TI");
    } else {
      console.log("Usuario ou senha invalidos");
    }
    break;

  default:
    console.log("setor nao encontrado");
    break;
}
