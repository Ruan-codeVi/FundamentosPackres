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