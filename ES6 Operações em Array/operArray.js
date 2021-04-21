let lista = [1,2,3,4,5,6]
// Map: percorre um array e realiza alguma ação nesse array
const novaLista = lista.map(function(item){ // no paramento do map pode-se passar elemento do array e index(posição)
    return item + 10
})
console.log('Map',novaLista);
let somaItemPosi = lista.map(function(elemento, index){
    return elemento + index
})
console.log(somaItemPosi)

//find: ele serve para percorrer e econtrar um elemento no array

const paresLista = lista.find(function(item){
    return item % 2 === 0 // vendo quantos numeros pares existe na array
})
console.log(paresLista)

/* Reduce: tambem percorre array 
mas com a vantagem de poder retornar qualquer tipo de valor(
objeto, outros Array, booleanos, strings)
*/
let totalArray = lista.reduce(function(elemento, proximo){
    return elemento + proximo
})
console.log(totalArray)