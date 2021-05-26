/* forEach: iteração para cada item dentro de um array, 
para cada item é possivel fazer uma lógica */

const arr = ['joao','matheus','lucas','Eren','Dead-Pool']
arr.forEach((valor, index)=>{
    console.log(`${index}: ${valor}`)
});

/*  Map Também itera cada item do array, 
mas retorna um novo array com o mesmo tamanho
*/

const numeros = [1,2,3,4,5]
const multi = numeros.map(item => item * 2)
console.log('método map', multi)
console.log(numeros)



/* Flat: Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursisa
de acordo com a profundidade especificada(depth)
*/ 

const cidades = ['São Paulo','Minas Gerias',['Rio de Janeiro','Mato Grosso',['Santa Catarina','Rio grande do Sul','Espirito Santo']]]
console.log(cidades)
const arrCaidade = cidades.flat(1) // o param é o index que corresponde a quais camadas do array vão se juntar
console.log(arrCaidade)
console.log('Array orginal',cidades)
const arrCaidade1 = cidades.flat(2)
console.log('flat',arrCaidade1)


// flatMap: Retorna um novo array assim como o map e executa um flat de profundidade 1
let number = [1,2,3,4,5]
console.log('\n Array number',number)
let novoArrMulti = number.flatMap(item =>[[item * 3]])
console.log('FlatMap',novoArrMulti)
console.log('\n Array number sem alteração depois do flatmap',number)



// Método Keys: Retorna um Array interator que contém as chaves para cada elemento do array

let moveis = ['cama','fogão','geladeira']
let iteratorMoveis =  moveis.keys(); 
// está pegando todas as chaves do array moveis e criando um Array interator
console.log('Retorna 1ª chave ou seja o index do 1º elemento do array moveis\n', iteratorMoveis.next());
console.log('Retorna 2ª chave ou seja o index do 2º elemento do array moveis\n', iteratorMoveis.next());
console.log('Retorna 3ª chave ou seja o index do 3º elemento do array moveis\n', iteratorMoveis.next());
console.log('Quando retorna done: true é pq acabou\n', iteratorMoveis.next());



// Método values: Retorna um Array interator que contém os valores para cada elemento do array

let casa = ['sala','cozinha','quarto', 'banheiro']
let iteratorCasa = casa.values();
console.log('Retorna 1º valor ou seja o do 1º elemento do array casa\n', iteratorCasa.next());
console.log('Retorna 2º valor ou seja o do 2º elemento do array casa\n', iteratorCasa.next());
console.log('Retorna 3º valor ou seja o do 3º elemento do array casa\n', iteratorCasa.next());
console.log('Retorna 4º valor ou seja o do 4º elemento do array casa\n', iteratorCasa.next());
console.log('Quando retorna done: true é pq acabou\n', iteratorCasa.next());



// Método entries: Retorna um Array interator que contém os pares chaves/valor para cada elemento do array
const moeda = ['Dólar','Real','Euro','Libra']
const iteratorMoeda = moeda.entries();
console.log('Retorna chave e valor  ou seja index e elemento do array moeda\n', iteratorMoeda.next());
console.log('Retorna chave e valor  ou seja index e elemento do array moeda\n', iteratorMoeda.next());
console.log('Retorna chave e valor  ou seja index e elemento do array moeda\n', iteratorMoeda.next());
console.log('Retorna chave e valor  ou seja index e elemento do array moeda\n', iteratorMoeda.next());
console.log('Quando retorna done: true é pq acabou\n', iteratorCasa.next());


