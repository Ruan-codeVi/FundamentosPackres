/* Arrows function são sempre funções anonimas, isso explica o pq são
bastantes usadas como funções de call back e trata do this de maneira 
completamente diferente.

Vatagem que permite escrever função com menos linhas
*/ 

// Comparação sem Arrow function
function soma(a,b){
    return a + b
}

// Com arrow function
/* Dicas de uso arrow functions são sempre anonimas
 1 Se for não anonima precisa-se armazenar em um const ou variavel
 2 se tiver apenas uma instrução a palavra return pode ser omitida
 3 Também não precisa utilizar chave {} 
 4 Quando tiver apenas um parametro na função o parentese () por ser omitido*/ 
const soma = (a,b) => a + b

// Mais um exemplo verificando se é adulto: sem Arrow function

function eAdulto(idade){
    return idade > 18
}
// Com arrow function
const eAdulto = idade => idade > 18

// Outro exemplo retornando um número aleatorio: sem arrow funct

// Sem Arrow funct
function pegarNumerosAleat (){
    return Math.random()
}
// Com Arrow Funct
let pegarNumerosAleat = () => Math.random()
// * quando não tem parametro é só passar parenteses() vazio.


// Outro exemplo utizando callback: sem arrow funct
document.addEventListener('click', function(){
    console.log('clicou')
})
// Com arrow Funct anonima
document.addEventListener('click',()=> console.log('ciico'))
// * quando não tem parametro é só passar parenteses() vazio.

// Diferença ao this: Fuções e Arrow Functions

/* this em função anonima ou com nome: Quando nos criamos uma função, 
essa função cria um contexto novo
então se utilizarmos um this dentro da função anonima ou não
o this vai tar referenciado a essa função somente

this em uma Arrow: Quando nos usando o this dentro da arrow function, esse this
está se referenciando ao contexto externo da Arrow function
*/

// Exemplo
let funcaoAnonima = function(){
    //novo COntexto
    // this se refere a essa função somente
} 
let funcaoArrowFun = ()=>{
    //this se refere ao contexto global
}