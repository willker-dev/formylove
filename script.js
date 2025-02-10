const frases = [
  "Meu amor, quando te vi pela primeira vez, meu coração soube que seria você. Não importava o tempo, o lugar ou as circunstâncias.",
  "Cada segundo ao seu lado tem sido uma bênção, uma descoberta, um sonho realizado.",
  "Quando olho para você, vejo o meu futuro. Um futuro cheio de risos, de momentos sinceros, de cumplicidade e amor eterno.",
  "Com você, aprendi o verdadeiro significado de carinho, respeito e amor. Você é minha inspiração, meu abrigo, minha paz, meu lar.",
  "Não há palavras que possam expressar o quanto você me completa. Você é a parte que faltava em mim.",
  "E por isso, eu te faço uma promessa: iria para sempre ficar ao seu lado, nos bons e maus momentos. Quero viver ao seu lado por toda a eternidade.",
  "Débora, meu amor, minha vida, é com você que eu quero envelhecer, que eu quero construir nossa história, casar com você, ter nossa casa, conquistar o mundo juntos. 💍❤️",
  "Para sempre ao seu lado. Te amo, te amo, te amo!"
];

let fraseIndex = 0;

function começarMensagem() {
  const mensagem = document.getElementById("mensagem");
  const botao = document.getElementById("btnRevelar");

  // Esconde o botão
  botao.classList.add('hidden');

  mensagem.style.opacity = 1; // Revela a mensagem
  escreverFrase(mensagem);
}

function escreverFrase(mensagem) {
  if (fraseIndex < frases.length) {
    // Cria um novo elemento para a frase atual
    const divFrase = document.createElement("div");
    divFrase.classList.add("frase");
    mensagem.appendChild(divFrase);
    
    let fraseAtual = frases[fraseIndex];
    let i = 0;
    
    // Digitação da frase
    let intervalo = setInterval(() => {
      divFrase.innerHTML += fraseAtual[i];
      i++;
      if (i === fraseAtual.length) {
        clearInterval(intervalo);
        fraseIndex++;

        // Após um tempo, remove a frase anterior e continua com a próxima
        setTimeout(() => {
          if (fraseIndex < frases.length) {
            // Faz as frases anteriores desaparecerem
            let frasesAnteriores = mensagem.getElementsByClassName("frase");
            if (frasesAnteriores.length > 5) {
              // Faz a frase que está mais no topo desaparecer
              let primeiraFrase = frasesAnteriores[0];
              primeiraFrase.style.transition = "opacity 1s ease-out";
              primeiraFrase.style.opacity = 0;

              // Depois que a animação de desaparecimento terminar, remove a frase do DOM
              setTimeout(() => {
                primeiraFrase.remove();
              }, 1000); // Tempo da animação de fade-out
            }
            escreverFrase(mensagem); // Chama novamente para escrever a próxima frase
          }
        }, 1500); // Tempo entre as frases
      }
    }, 80);  // Velocidade da digitação
  }
}
