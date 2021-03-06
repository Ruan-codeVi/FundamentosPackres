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

// DEPOIS DO ES6
let obj1 ={
    nome: 'Eren'
}
let{nome} = obj1 // para criar uma varivavel com nome diferente seria {nome: nome2} = obj1
console.log('\n Depois do ES6,', nome)


// Destructuring de obj dentro de outro objs

// ANTES DO ES6

let pessoa = {
    nome:'juan',
    prop: {
        idade: 28,
       coresFavoritas: ['Rosa', 'Roxo']
    }
}
let idade = pessoa.prop.idade
let cor1 = pessoa.prop.coresFavoritas[0]
console.log('\n Objeto dentro de objeto, Antes do ES6,',idade)
console.log('\n Array dentro de objeto, Antes do Es6,', cor1)


// APOS DO ES6

/* Destructuring em  objetos literais
    *Colocar o tipo de variavel let, var ou const
    *Abrir chaves {}
    * Colocar a propriedade que vai destruida, podendo usar o mesmo nome de prop para ser
    o nome da nova variavel ou criando um novo nome pra essa variavel atraves de : dois pontos
    e nome.
    *Pode-se fazer destructuring em objetos que estão dentro de outros objetos, indicando o nome
    da proprieade que cria esse obj, e para destruir prop desse objeto aninhado basta fazer
    {obj:{}}
*/ 

let pessoa1 = {
    nome1:'juan',
    prop1: {
        idade1: 28
    }
}
let {prop1: {idade1}} = pessoa1 // poderia fazer mais destructuring e renomear as variaveis
console.log('\nApos ES6 destructuring obj dentro de obj,', idade1)

// Pode-se fazer destructuring em array's dentro de obj e vice e versa

let maria ={
    sobrenome: 'silva',
    obj2: {
        idade: 14,
        coresFavoritas: ['Rosa','Roxo'] 
    }
}    //prop     //obj //renoneado prop          //destruibdo o array  
let {sobrenome, obj2:{idade: anos, coresFavoritas:[corFav1, corFav2]}} = maria
console.log('\nDestructuring em arrays que estão em obj,',sobrenome,anos, corFav1)
console.log('Destructuring em arrays que estão em obj,',corFav2)


// ANTES DO ES6, PEGANDO UM ATRIBUTO DE ARRAY DE OBJ

const arrObj = [{nome: 'João', tipo:'Pessoa'}]
const novaPessoa = arrObj[0].nome
console.log('\nPegando um atributo e salvando em uma variavel, Antes do ES6,',novaPessoa)



// DEPOIS DO ES6, PEGANDO UM ATRIBUTO DE ARRAY DE OBJ - Destructuring

const arrObj1 = [{nome1: 'João1', tipo1:'Pessoa1'}]
const [{nome1}] = arrObj1 // poderia dar um novo nome pra variavel const [{nome1: newNome}]
console.log('\nPegando um atributo e salvando em uma variavel, Depois do ES6,',nome1)


// Passando um array como referencia de parametro da uma função

// ANTES DO ES6
function soma(arr){
    let a = arr[0]
    let b = arr[1]
    return  a + b
}
console.log('\nPassando array como parametro,',soma([5,2]))

// APOS O ES6 - Usando o destructuring
                    //default values
function soma1([a,b] = [0,0]){ // pode-se usar com default values tambem
    return a + b
}
console.log('\nDestructuring no parametro araay,',soma1())
console.log('\nDestructuring no parametro array,',soma1([5,5]))


// Passando um objeto como referencia de parametro da uma função

function multi({a,b}){
   return a * b
}
console.log('\nObjeto no parametro da função, usando destructuring, ',multi({a: 5, b: 10 }))



