alert("Seja bem-vindo ao game!")

let p1 = prompt("Digite o seu nome");
let p2 = prompt("Digite um poder que gostaria de ter");
let p3 = prompt("Digite o nome de um vilão");
let p4 = prompt("Digite um lugar que gostaria de estar");
let msg = document.getElementById("msg");
msg.innerHTML = `<p>Olá ${p1} o seu poder é ${p2} você vai enfrentar o(a) ${p3} no(na)/em ${p4} </p>`