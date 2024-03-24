// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let votosNulos = 145;
let votosBrancos = 220;
let votosValidos = 380;

let eleitores = votosNulos + votosBrancos + votosValidos;

let votosNulosPorcentagem = (votosNulos / eleitores) * 100 ;
let votosBrancosPorcentagem = (votosBrancos / eleitores) * 100 ;
let votosValidosPorcentagem = (votosValidos / eleitores) * 100 ;

document.write(`O total de eleitores é ${eleitores}+ "<br>"+ "<br>"`);
document.write(`A procentagem de Votos nulos e de ${votosNulosPorcentagem}%+ "<br>"+ "<br>"`);
document.write(`A procentagem de Votos brancos e de ${votosBrancosPorcentagem}%+ "<br>"+ "<br>"`);
document.write(`A procentagem de Votos válidos e de ${votosValidosPorcentagem}%`);