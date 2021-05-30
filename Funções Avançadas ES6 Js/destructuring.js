// Destructuring è muito usado pra pegar parte de variaveis e atribuindo a outras variaveis

// * Se quisesse pegar os itens do array e atribuir em variaveis
var frutas = ['maça','banana', 'laranja',['tomate']]

// Maneira antiga
var maca = frutas[0]
var banana = frutas[1]
var laranja = frutas[2]
var tomate = frutas[3][0] // ARRAY DENTRO DE ARRAY
console.log('Antes do Es6',maca)
console.log('Antes do Es6',banana)
console.log('Antes do Es6',laranja)
console.log('Antes do Es6',tomate)

// COm ES6 surigu o Destructuring

/*Lado esquerdo é o tipo que vai destruido, 
como os itens  vem de um array e vão ser armazenados em variaveis,
 basta do lado esquerdo colocar [] sinal de array e colocar dentro [] os nomes das variáveis
 tomar cuidado com a ordem com os nomes das variaveis novas e as posições do array
 *Depois é colocar atribuir essa destruição do array principal
*/

// Destructuring
let [maca1, banana1, laranja1,[tomate1]] = frutas
console.log('\nApós Es6, Destructuring',maca1)
console.log('Após Es6, Destructuring',banana1)
console.log('Após Es6, Destructuring',laranja1)
console.log('Após Es6, Destructuring',tomate1)


// Objetos

// *Se quisesse pegar algum atributo do obj e salvar em uma variável

// ANTES DE ES6

let obj ={
    name: 'Astra'
}

let name1 = obj.name
console.log('\n Antes do ES6,',name1)

// DEPOS DO ES6
let obj1 ={
    nome: 'Eren'
}
let{nome} = obj1
console.log('\n Depois do ES6,', nome)







