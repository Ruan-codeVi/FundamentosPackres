const usuarios = ['joao','ana','lucas']
// OBJETO genero
const genero={
    Homem: Symbol('H'), // Symbol cria um valor unico podendo duas variaveis terem valores iguais 
    Mulher: Symbol('M')
}
// Array de objetos
const pessoas =[
{
    nome:'joao',
    idade: 25,
    sexo: genero.Homem
},
{
    nome:'ana',
    idade: 16,
    sexo: genero.Mulher
},
{
    nome: 'lucas',
    idade: 18,
    sexo: genero.Homem
}]

// // Verificando o tamanho e quantidade de itens no Array
console.log('Retornado o tamanho do array de obj pessoas:\n', pessoas.length)

// // Verificar se é array
console.log('A var const pessoas é um array?:\n', Array.isArray(pessoas))

// Iterar os itens do Array - função forEach(Para cada)
 //forEach aceita com argumento 1º função de callback e nessa função pode passar com parametros (item, index, array(completo))
pessoas.forEach(item => // pegando só a prop 'nome' do array pessoas, passando uma arrow function
    console.log(`Nome: ${item.nome}`)
);


 //Iterando com os três parametro na função callback passada em forEach
pessoas.forEach((item, index, arrCompleto) => //Mais de um param precisa de parent (), mas não de chavex pq só tem uma linha de execução
console.log(`\nIterando o array pessoas com os três parametros: item, index, arrayCompleto \n Nomes = ${item.nome} Index = ${index}`, arrCompleto ) 
);


//filrar o array pessoas trazendo só os homens

    const homens1 = pessoas.filter(function(pessoa){ //utilizando função anonima
    if(pessoa.sexo === genero.Homem){
        return pessoa
    }
})
// console.log('\n Array filtrado  func. Anon. retornando só os homens', homens1)


const homens = pessoas.filter(pessoa => pessoa.sexo === genero.Homem) 
// como a arrow function tem só uma linha não precisa de chaves{}
console.log('\n Array filtrado Arrow-func. retornando só os homens', homens)

{
// Adicionando a 'prop curso' ao array pessoas usando o map para gerar uma cópia nova
const pessoasComCurso = pessoas.map(item =>{ // Precisou de chaves{}, pq têm mais de uma execução
    item.curso = 'Introdução ao Javascript'
    return item
}) 
console.log('\n Introduzino uma prop nova em pessoas utilizando map:', pessoasComCurso)
}

// Somar total idade do array pessoas usando reduce
const totalIdade = pessoas.reduce((somaIdades, item)=>{
    somaIdades = somaIdades + item.idade
    /* ou 
    somaIdades+= item.idade
    */ 
    return somaIdades

},0)
console.log(`\n Retornado a soma de todas as idades do array pessoas usando Reduce\n ${totalIdade} Total idades somadas`)

// Juntando funções de array

// Filtrando a idades pares do array pessoas e depois com o retorno de filter somar todas as idades com Reduce

const filterAndReduceIdades = pessoas.filter(item => item.idade % 2 == 0).reduce((somIdades, item)=>{
    somIdades = somIdades + item.idade
    /* ou 
    somaIdades+= item.idade
    */ 
    return somIdades
},0)
console.log(`\n Filter idades pares, reduce para somar idades e retornar um number:\n ${filterAndReduceIdades} Total idades somadas\n`)


// Laço de repetição for in
let numeros = [3,2,5,'Joao']
numeros.mensagem = 'olá mundo' // como tudo é objeto no Javascript dá prar criar prop em arrays e funções
for(let i in numeros){
    console.log(numeros[i])
}
/* Laço de repetição for of
For of: só executa laços de valores(itens) 
que estão contidos no array ou seja dentro de do array
*/ 
for(let i of numeros){ 
    console.log('\nblob', i)
}