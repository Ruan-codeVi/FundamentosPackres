// Método join: Junta todos os elementos de um array, separados por um delimitador e retorna uma string
const numbers = [1,2,3,4,5]
const arrPraText = numbers.join('-')
console.log('separou os elementos do array e retornou uma string\n', arrPraText)

//-----------------------------------------------------------------------------------------------------


/* Método reduce: Retorna um novo tipo de dado iterando cada posição de um array, 
assim como o forEach e o map o método reduce também itera item por item mas pode retornar
qualquer tipo de novo dado.
Pedi uma função callback, no primeiro parãmetro é o que vai ser retornado do array 
segundo parâmetro é o elemento iterado do array */
                                                                                        //zero é o valor que a variavel contTotal inicia
const retornaSoma = numbers.reduce((contTotal, elemento) => contTotal = contTotal + elemento, 0)
console.log('Transformando o array e um number, soma todos os itens do array arr\n', retornaSoma)
const estudantes = [{nome: 'Juan', nota: 10},{nome: 'Lucas', nota:4},
{nome: 'João', nota:3}, {nome: 'Juliana', nota: 8}]

let mediaNota = estudantes.reduce((media, aluno)=>{
    return(media = media + aluno.nota)},0) / estudantes.length

console.log('\nSomando todas a notas do array estudantes e fazendo a Média',mediaNota)



// Criando um novo obj de um array de objts
const animals = [
{
    nome:'zorro',
    tipo: 'Cachorro',
    idade: 8,
    peso: 35
},
{
    nome:'listrada',
    tipo: 'Vaca',
    idade: 5,
    peso: 400
},{
    nome:'trovão',
    tipo: 'Cavalo',
    idade: 12,
    peso: 280
},
{
    nome:'quack',
    tipo: 'Pato',
    idade: 2 ,
    peso: 3
},
{
    nome:'Gerivalda',
    tipo: 'Galinha',
    idade: 1,
    peso: 1
}]
const somaPesoIdade = animals.reduce((total, animal) =>{
    return{
        totalIdade: total.totalIdade + animal.idade,
        totalPeso: total.totalPeso + animal.peso
    }
// argumento para o reduce
},{totalIdade:0, totalPeso:0})
console.log('\nRetornando do array animals e criando um novo obj.\n', somaPesoIdade)