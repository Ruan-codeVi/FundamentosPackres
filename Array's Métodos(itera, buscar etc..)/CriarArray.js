// Como criar um array

// 1º Forma: Criando uma variavél que recebe []colchetes contendo os elementos
const arr = [1,2,3]
console.log(arr)

// 2º Forma: Criando uma variavél que recebe uma nova instância  do tipo array usando ( ) parênteses 
const arr1 = new Array(1,2,3)
console.log('Array por instância',arr1)

const num = Array(3) 
// Declarando APENAS UM NÚMERO, ele cria um array vazio com esse tamanho
console.log('Sem new, e apenas um número',num)
const num1 = Array(3,2,1)
console.log('Sem new 01 ',num1)

// 3º Forma: Array.of Cria uma nova instância de array a partir do número de parâmetros informados
const pessoas = Array.of('João','Lucas','Eren')
const pessoaAndString = Array.of('leo',14,'Jojo',21,22)
console.log('Array.of',pessoas, pessoaAndString)


// 4º Forma: Arroy.from: Cria uma nova instância de array a paritr de um parametro array-like ou iterable object
// Array-like = Node list / Iterable object = setMap

/* Está pegando todas os elementos divs que encontrar na página e armazenando em divs, mas
vai ser armazenado em forma de node list e não vai ter o métodos de array. 
Então basta chamar a função Array.from e passar essa variável que tẽm a node list armazenada
como parãmetro pronto agora as função de array podem ser usadas  */ 

// const divs = document.querySelectorAll('div')
// const transforEmArray =  Array.from(divs)