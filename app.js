alert('Bem vindos ao jogo do numero secreto!');
let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

while(chute != numeroSecreto) {
  chute = prompt ('Escolha um numero entre 1 e 1000');

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert (`O número secreto é menor que ${chute}`);
    } else {
      alert (`O numero secreto é maior que ${chute}`);
       
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? `tenativas` : `tentativa`
 alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);