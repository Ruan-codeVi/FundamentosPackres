/* O javascript vem com um conjunto de construtores para instanciar
alguns objetos úteis.

Vamos começar com um objeto interno do javascript, date.
*/ 

let agora = new Date();

let dataString = agora.toString();
console.log(dataString)

let ano = agora.getFullYear();
console.log(ano);

let diaDaSemana = agora.getDay();
console.log(diaDaSemana);

//Passando um data para o construtor Date
let aniversario = new Date(' Febry 5, 1993');
console.log(aniversario);