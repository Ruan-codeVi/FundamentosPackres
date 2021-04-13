
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

/*  Map é um metodo de um Array,
    e espera um função de callBack como
    argumento
*/ 

/* Map:  1 Pega o array e intera ele um a um igual no for 
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



/* filter: faz a mesma lógica do map, mas na função passada como callback
 essa função tem que retornar um valor booleano true ou false. 
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
// Utilizando o Reduce para somar todos valores do ArrayNumeros
/* Explicando reduce:
*/ 
const arrayNumeros1 =[10,2,8,11];
const somaReduce = arrayNumeros1.reduce(function(valorAcumulador, valorArray){
     
   return valorAcumulador + valorArray

},0)
console.log('Reduce',somaReduce)