/* Método find: Retorna o primeiro item deu um array que satisfaz a condição passada
Pedi uma função de callback como argumento
*/

const num = [5,1,6,8,9,10,15,24]
const numPares = num.find(item => item > 10)
  
console.log('find, retorna o 1º elemento que satisfaz a condição',numPares)

/* Método findIndex: Retorna o indice do primeiro item do array que satisfaz a condição passada
Pedi uma função de callback como argumento
*/
const retornaIndicePar = num.findIndex(item => item > 10)
console.log('\nfindIndex, retorna o index do 1º elemento que satisfaz a condição',retornaIndicePar)



/*  Método filter: Retonarna um novo array só contendo os elementos que satisfazem uma condição,
ele nãoaltera os array’s originais ele é um método que segue o principio da imutabilidade.
*/

const numerosImpares = num.filter(item => item % 2 != 0)
console.log('\nArray num', num)
console.log('\nFilter no array num, só números impares', numerosImpares)

