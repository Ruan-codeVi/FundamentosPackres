/* Funções tambem são valores, esse valor é, na verdade uma referencia à função, podem
ser definidas por declarção de função ou por expressão de função
*/

//Exercicio jogo das Conchas


//Expressao de função
let venceu = function(){
    console.log('Venceu!')
}
let perdeu = function(){
    console.log('Perdeu!')
}
//var  expressão de função
let a = venceu;
let b = perdeu;
let c = perdeu;

// atribuições de valores
c = a; // c venceu
a = b; // a perdeu
b = c; // b venceu
c = a; // c perdeu
a = c; // a perdeu
a = b; // a venceu
b = c; // b perdeu,

// invocando a referencia - variavel a
a();
