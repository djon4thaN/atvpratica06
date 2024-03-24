// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turno = String(prompt('Em que turno você estuda? Digite: M, V ou N para diferentes turnos.'));

switch(turno){
    case 'M':
        document.write('Bom dia!');
    break;
    case 'V':
        document.write('Boa tarde!');
    break;
    case 'N':
        document.write('Boa noite!');
    break;
    default:
        document.write('Valor inválido.')
}