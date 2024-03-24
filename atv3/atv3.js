// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let semana = Number(prompt('Digite o número da semana'));

if (semana == 1){
    document.write('Hoje é domingo.');
} else if(semana == 2){
    document.write('Hoje é segunda-feira.')
}else if(semana == 3){
    document.write('Hoje é terça-feira.')
}else if(semana == 4){
    document.write('Hoje é quarta-feira.')
}else if(semana == 5){
    document.write('Hoje é quinta-feira.')
}else if(semana == 6){
    document.write('Hoje é sexta-feira.')
}else if(semana == 7){
    document.write('Hoje é sábado.')
}