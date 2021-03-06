
// Metodos exclusivo e mais importantes para manipular Array's: Map, Filter e Reduce

/* Map e filter
Servem para manipular o array e retornar um array no final

Reduce
Usa pra manipular o array e retornar outros tipo de valores
Pode retornar: Numeros, strings, array, function, objeto etc
*/ 

// Exemplo  modificando um array utilizando o for 

let numeros = [15,5,9,17]
let numerosDobrado = []
for(let i = 0; i < numeros.length; i++){
    // console.log(numeros[i]* 2)
    numerosDobrado.push(numeros[i] * 2)
}
console.log(numerosDobrado)
// _____________________________________________________________

/*  Map é um metodo de um Array,
    e espera um função de callBack como
    argumento
*/ 

/*Método Map():  1 Pega o array e intera ele um a um igual no for 
         2 Aplica a função com instrução 
         3 retorna o novo Array
*/

let numeros1 = [2,4,8,10]  
{ //Novo escopo
const novoArrayMap = numeros1.map(function(numeroParan){
    return numeroParan *2
});
console.log('novoArrayMap',novoArrayMap)
} // fecha escopo

// Com Array function Fica melhor ainda
{
const arrayMapArroFunct = numeros1.map(numeroParan => numeroParan *3)
console.log('Map com Arrow Function',arrayMapArroFunct)
// Como Arrow o retorno é imediato não precisa criar uma const pra receber pode ser direto no console
console.log('Map com Arrow Function', numeros1.map(numeroParan1 => numeroParan1 + 10))
}
// Outro Exemplo Map
const nome = ['JOÃO','MARIA','FULANO']
{ // chaves serv para criar e fechar um escopo podendo utilizar variaveis com mesmo nome
const nomeMinusculos = nome.map(function(nomesP){
    return nomesP.toLowerCase().toString()
})
console.log(nome)
console.log(nomeMinusculos)
}
// Com Arrow Function
const nomeMinusculos = nome.map(nomesP => nomesP.toLowerCase())
console.log(nome)  
console.log(nomeMinusculos)

// _________________________________________________________________________________________________________

/* Método filter(): faz a mesma lógica do map, mas na função passada como callback
 essa função tem que retornar um novo array objeto. 
 Porque o filter vai filtrar todo a array, e fazer um novo array a partir dos
 valores que fora analisados como true
 
*/ 

const arrayNumeros = [2,8,-10,-15,27,16,-20,10]
{
const numerosNegativos = arrayNumeros.filter(function(negativos){
    return negativos < 0
});
// console.log('filter Negativos',numerosNegativos);
}
{
// Com arrow Function
const numerosNegativos = arrayNumeros.filter(negativos => negativos < 0);
console.log('filter Negativos + plus Arrow Function',numerosNegativos);
}
// sem Const utlizando retorno imediato com arrow function
console.log('filter Negativos + plus Arrow Function * Sem const ',arrayNumeros.filter(negativos => negativos <0))


/* Manipulando ArrayNumeros sem metodo! 
    só usando laço for para interar. Pegando só numeros do array que são
    divisiveis por 2 e positivos.
 */

{ //criando escopo

let novoArray = [] // usando array vazio como auxiliar para criar novo array com só com itens desejados

for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i] % 2 === 0 && arrayNumeros[i] > 0 ) {
        novoArray.push(arrayNumeros[i])
    }
}
console.log('interação simples com for, Numeros Div por 2 e Posit',novoArray)
}

// Refatorando usando mesma lógica acima usando o metodo filter
{
const numerosFiltradosDivPosi = arrayNumeros.filter(function(numDivPosi){
    return numDivPosi % 2 === 0 && numDivPosi > 0
})
console.log('Com filter', numerosFiltradosDivPosi);
}

// Com Arrow Function
const numerosFiltradosDivPosi = arrayNumeros.filter(numDivPosi => numDivPosi % 2 === 0 
&& numDivPosi > 0);
console.log('Com filter + Arrow function', numerosFiltradosDivPosi);

/* Utilizando map e filter juntos, 
por exemplo pegar no arrayNumeros numeros impares 
e depois multiplicar esses valores por 2
*/
{
const metodosCombin = arrayNumeros.filter(function(valores){
 return valores % 2 != 0
}).map(function(valores){
    return valores * 2
})
console.log('Filter + map',metodosCombin)
}
// Com Arrow Function
const metodosArrayCombin = arrayNumeros.filter(
    valores => valores % 2 != 0).map(valores => valores * 2);
console.log(`filter + map com Arrow Function ${metodosArrayCombin}`)

// Desafio
// Somar todos os numeros do arrayNumeros do jeito comum
let soma = 0;
// {
// for(let i = 0; i < arrayNumeros.length; i++){
//     if(arrayNumeros[i] > 0){
//         soma = soma + arrayNumeros[i]
//     }
// }
// console.log('Iterando com for', soma)
// }
// ___________________________________________________________________

/* Método reduce():

*/ 
const arrayNumeros1 =[10,2,8,11];
const somaReduce = arrayNumeros1.reduce(function(valorAcumulador, valorArray){
     
   return valorAcumulador + valorArray

},0)
console.log('Reduce',somaReduce);
// ___________________________________________________________________________________________________

// Método every(): ele retorna um bolleano
// Quando usar; quando precisar testar se todos elemento de um array pasam por um teste especifico

//Checar se todos numero do array são maiores que 10
let arrayQualquer = [1,5,7,10,15,20]
{
let todoMaiores = arrayQualquer.every(function(elemento){
    return elemento > 10
})
console.log(todoMaiores)}

{ // Com arrow function
let todoMaiores = arrayQualquer.every(elemento => elemento >10)
console.log('Arrow Func',todoMaiores)
}
// Mais um exemplo
//Verificando se todos têm mais de 18 anos
let pessoas = [ //Array de obejtos
    {id: 12, nome:'joao', idade: 15},
    {id: 19, nome:'pedro', idade: 27},
    {id: 20, nome:'lucas', idade: 22},
    {id: 25, nome:'joana', idade: 27},
    {id: 32, nome:'eren', idade: 35},
]
{
const marioresP = pessoas.every(function(pessoa){
 return pessoa.idade >= 18
})
console.log('every com funct anonima', marioresP)
}
{
const marioresP = pessoas.every(pessoa => pessoa.idade >= 18)
console.log('every com Arrow funct',marioresP)
}

//_________________________________________________________________________________________________________

// Método some(): ele intera o array e testa se pelos menos um elemento é verdadeiro para retorna true
//Verificar se a algum numero primo no array

const arrayNumber = [6,8,11,14,42]
// criando a função que faz a lógico do numero primo 
function ePrimo(valor){
    for(let i = 2; i < valor; i++){
        if(valor % i === 0){
            return false
        }
    }
    return valor > 1
}
const resultPrimo = arrayNumber.some(ePrimo)
console.log('some com função declarada', resultPrimo)

// Mais um exemplo: verificar um array utilizando pra ver se há piloto

const person = [
    {id:12, nome: 'Lucas', piloto: false},
    {id:15, nome: 'Juan', piloto: true},
    {id:10, nome: 'João', piloto: false}
]
// Saindo com a respota direto no console.log
console.log('Some com Arrow function',person.some(elemento => elemento.piloto));

/* Método find(): Use find() quando: é preciso procurar/verificar 
por um valor dentro de um array e retorno vai ser do primeiro elemento
que satisfazer o teste
*/ 
const pizzas = ['Mussarela','Queijo','Calabresa', 'Portuguesa',
'Frango Catupery']
// Teste:  Procurar um array de pizzas um sabor que comece com P
console.log(pizzas.find(function(encontrarSabor){
    return encontrarSabor.startsWith('P'&&'C')
}))