// Frases
const frases = [
  'A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz.',
  'Experiência é o nome que cada um dá a seus erros.',
  'Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença.',
  'Sucesso é encontrar aquilo que se tenciona ser e depois fazer o que é necessário para isso.',
  'Contanto que você acredite em si mesmo, você pode fazer qualquer coisa.',
  'A palavra “impossível” foi inventada para ser desafiada.',
  'Há ainda tanta coisa linda na vida para se descobrir.',
  'Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons.',
  'Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.',
  'Em meio ao caos, respire fundo.'
]

// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const fraseEscolhida = document.querySelector("#frase");
let randonFrase = Math.round(Math.random() * 9);

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

// Funções
function handleTryClick() {
  fraseEscolhida.innerText = frases[randonFrase];
  toogleScreen();
}

function handleResetClick() {
  randonFrase = Math.round(Math.random() * 9);
  toogleScreen();
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
