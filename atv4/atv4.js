// Reescreva o exercício 3, utilizando apenas o SWITCH.

let semana = prompt('Digite o número da semana');

switch(semana){
    case '1':
        document.write('Hoje é domingo.');
    break;
    case '2':
        document.write('Hoje é segunda-feira.');
    break;
    case '3':
        document.write('Hoje é terça-feira.');
    break;
    case '4':
        document.write('Hoje é quarta-feira.');
    break;
    case '5':
        document.write('Hoje é quinta-feira.');
    break;
    case '6':
        document.write('Hoje é sexta-feira.');
    break;
    case '7':
        document.write('Hoje é sábado.');
    break;
    default:
        document.write('Insira um número válido. 😊');
}