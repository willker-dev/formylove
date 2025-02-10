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
    let fraseAtual = frases[fraseIndex];
    let i = 0;
    let intervalo = setInterval(() => {
      mensagem.innerHTML += fraseAtual[i];
      i++;
      if (i === fraseAtual.length) {
        clearInterval(intervalo);
        fraseIndex++;
        setTimeout(() => {
          escreverFrase(mensagem);
        }, 1500);  // Tempo entre as frases
      }
    }, 80);  // Velocidade da digitação
  }
}
