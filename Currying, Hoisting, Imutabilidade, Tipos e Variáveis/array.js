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

// Verificando o tamanho e quantidade de itens no Array
console.log('Retornado o tamanho do array de obj pessoas:\n', pessoas.length)

// Verificar se é array
console.log('A var const pessoas é um array?:\n', Array.isArray(pessoas))

// Iterar os itens do Array - função forEach(Para cada)
{ //forEach aceita com argumento 1º função de callback e nessa função pode passar com parametros (item, index, array(completo))
pessoas.forEach(item =>{ // pegando só a prop 'nome' do array pessoas, passando um arrow function
    console.log(`Nome: ${item.nome}`)
});
}

{ //Iterando com os três parametro na função callback passada em forEach
pessoas.forEach((item, index, arrCompleto) =>{
    console.log(`Iterando o array pessoas com os três parametros: item, index, arrayCompleto \n Nomes = ${item.nome} Index= ${index}`, arrCompleto )  
});
}

// filrar o array pessoas trazendo só os homens
const homens = pessoas.filter(pessoa => pessoa.sexo === genero.Homem) // como a arrow function tem só uma linha não precisa de chaves{}
console.log('\n Array filtrado retornando só homens', homens)