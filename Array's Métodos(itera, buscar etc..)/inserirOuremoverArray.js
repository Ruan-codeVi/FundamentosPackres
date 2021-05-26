// Inserir ou Remover itens de um Array

// Método Push: ADICIONA UM OU MAIS ELEMENTOS NO FINAL do array e retorna o tamanho do novo array

const frutas = ['banana','maça']
console.log(frutas)
// Método push no array frutas
const addFruta = frutas.push('acerola', 'melância')
console.log('Retorna o tamanho depois do push',addFruta) // retorna 4
// Para saber os elementos depois do push é no array original
console.log('Itens adicionados no final do array frutas',frutas)


// Método Pop: REMOVE O ULTIMO ELEMENTO de um array e retorna o elemento removido

const removeFruta = frutas.pop();
console.log('Retornando item Removido de frutas, com pop\n',removeFruta)
console.log('Array frutas depois do pop',frutas)



// Método unshift: ADICIONA UM OU MAIS ELEMENTOS NO INICIO do array e retorna o novo tamanho do array
const addIncioFruta = frutas.unshift('mexerica')
console.log('Também retorna o novo tamanho',addIncioFruta)
console.log('Item adicionado no inicio ',frutas)


// Método slice: Retorna um novo array 'fatiando' o array de acordo com inicio  e fim

const nomes = ['pedro', 'julio', 'micheallo','rafael', 'donatello']
const newArr = nomes.slice(0,2) 
/* dois param, o primeiro é o start(inicio) e o segundo param é o fim.
 Usa o index de array, ele não conta a posição que foi passado
 quando é passado com é dois parametros*/ 
console.log(newArr)

// Passando só um parametro para slice
const umParam = nomes.slice(3)
/* Com um param, vai até esse index que corresponde no array 
e mostra ele e os proximos elementos a direita do array */ 
console.log('Um param no método slice',umParam)

// passando -1 como param em slice, sempre retorna o ultimo elementos do array
const paramNegativo = nomes.slice(-1)
console.log('Passando - 1 no param do método slice', paramNegativo)

// passando parametro negativo, retorna o próprio elemento e os elementos a esquerda dele
const paramNegativo2 = nomes.slice(-3)
console.log('Passando param negativo no metodo slice,\nretorna o último elemento do array mais os elementos a esquerda dele\n',paramNegativo2)


// Método splice:Altera um array adicionando novos elementos enquanto remove elemento antigos
const num02 = [1,2,3,4,5]
const removerItens = num02.splice(2)
console.log('Itens removidos',removerItens)
console.log('Array num02 foi alterado',num02)

// Adicionando item no array 
num02.splice(0,0, 'first')
/* O primeiro param é o start, 
o segundo é quantidade de itens a serem removidos que é 0
o terceiro param é o elemento a ser adicionado no array */
console.log(num02)

const carros = ['fusca','parati','brasilia']
const removeCar = carros.splice(1,2,'veloster','elantra')
console.log('Retornando itens removidos',removeCar)
console.log('Retornando o array atualizado',carros)

