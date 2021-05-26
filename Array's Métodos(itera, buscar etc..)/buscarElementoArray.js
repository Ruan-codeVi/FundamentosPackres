/* Método find: Retorna o primeiro item deu um array que satisfaz a condição passada
Pedi uma função de callback como argumento
*/

const num = [5,1,6,8,9,10,15,24]
const numPares = num.find(item => item > 10)
  
console.log('find, retorna o 1º elemento que satisfaz a condição',numPares)

//------------------------------------------------------------------------------------------------------ 

/* Método findIndex: Retorna o indice do primeiro item do array que satisfaz a condição passada
Pedi uma função de callback como argumento
*/
const retornaIndicePar = num.findIndex(item => item > 10)
console.log('\nfindIndex, retorna o index do 1º elemento que satisfaz a condição',retornaIndicePar)

//------------------------------------------------------------------------------------------------------- 

/*  Método filter: Retorna um novo array só contendo os elementos que satisfazem uma condição,
ele nãoaltera os array’s originais ele é um método que segue o principio da imutabilidade.
*/

const numerosImpares = num.filter(item => item % 2 != 0)
console.log('\nArray num', num)
console.log('\nFilter no array num, só números impares', numerosImpares)

//----------------------------------------------------------------------------------------------------

/* Método indexOf: Retorna o primeiro indice em que um elemento pode ser encontrado no array,
ou seja ele encontra a primeira ocorrência  e a sua posição no array. */ 

const arr = [1,3,1,4,3]
const primeiraOcorr = arr.indexOf(3)
console.log('Primeira Ocorrência, index:', primeiraOcorr)

//---------------------------------------------------------------------------------------------------------

/* Método lastindexOf: Retorna o último indice em que um elemento pode ser encontrado no array */ 

const ultimoOcorr = arr.lastIndexOf(3)
console.log('Ultimo Ocorrência, index:', ultimoOcorr)

//------------------------------------------------------------------------------------------------------------

/* Método includes: Retorna um booleano verificando se determinado elemento existe no array */

const existArr = arr.includes(3)
const existArr01 = arr.includes(2)
console.log('Existe no Array? booleano:', existArr, existArr01)

// ------------------------------------------------------------------------------------------------------------


/* Método some: Retorna um booleano verificando se há pelo menos um item de um array satisfaz a condição
*/ 
    const alunos = [{nome: 'Joao', nota: 7},{nome: 'Lucas', nota: 5},
    {nome: 'Juan', nota: 10}]
    const passou = alunos.some(estudante => estudante.nota >=8)
    console.log('Algum aluno passou',passou)


// -------------------------------------------------------------------------------------------------------------

/* Método every: Retorna um booleano verificando se todos os itens de um array satisfazem a condição */ 

const todosPass = alunos.every(estudante => estudante.nota >= 6)
console.log('Todos alunos passarão', todosPass)

//-------------------------------------------------------------------------------------------------------------


/* Método sort: Ordena os elementos de um array de acordo com a condição,
Pedi um função callback que o primeiro parametro é item corrente e o segundo parametro
é o próximo item
*/

const menorPraMaior = alunos.sort((itemCorrent, proximoItem)=> itemCorrent.nota - proximoItem.nota)
console.log('Ordenando notas da menor para a maior em array alunos', menorPraMaior)

const maiorPraMenor = alunos.sort((itemCorrent, proximoItem)=> proximoItem.nota - itemCorrent.nota  )
console.log('Ordenando notas da maior para a menor em array alunos', menorPraMaior)

//--------------------------------------------------------------------------------------------------------


// Método reverse: inverte os elementos de um array
let num03 = [1,2,3,4,5]
let inverteArr = num03.reverse()
console.log('Inverte o array num',inverteArr)



