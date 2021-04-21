/*  Operador Rest é sempre usado nos parametros das funções, 
ele que recebe o tamanho que for como argumento para a função.
*/
{
function minhaLista(nomes){
    console.log(nomes)
}
minhaLista('juan','eren', 'mikasa')}
/*A função só mostra um nome 
pq não sabe quantos argumentos(nomes) foi passado no parametro da função
como só há um parametro ele recebe apenas um nome do argumento passando na função 
*/ 

// Utilizando o rest operator
function minhaLista2(...nomes2){
    console.log(nomes2)
}
minhaLista2('juan','eren','mikasa')

//Com numeros 
function listaNumerosTelefonicos(numeros){
    console.log(numeros)
} 
listaNumerosTelefonicos(['Juan', 988403494],['Maria', 987393494],
['Erne', 978542648],['Mikasa', 999574123])

// Resolvendo com rest, o problema de receber apenas um argumento na função listaNumerosTelefonicos
function listaNumerosTelefonicos2(...numeros2){
    console.log(numeros2)
} 
listaNumerosTelefonicos2(['Juan', 988403494],['Maria', 987393494],
['Erne', 978542648],['Mikasa', 999574123])

// Exercicio
function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [ 
// essa variavel está juntando os dois array atres do spread operator que tbm usa o três pontos
        ...usuarios,
        ...novosUsuarios
    ]
    return console.log(totalUsuarios)
}
let usuarios = ['Matheus', 'Lucas', 'Maria']
//adicionando novos usuarios
let novosUsuarios = cadastrar(usuarios,'Eren', 'Mikasa')
