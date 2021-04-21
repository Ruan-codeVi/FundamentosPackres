// Javascript ES6 - ecmascript 6 - Operador spread

// Operador spread faz junções de array's e objetos

// Exemplos
let podium = [1,2,3]
//Utilizando o spread para juntar esse dois array's
let classificados = [...podium,4,5,6]
console.log('Operador spread',classificados)

// Spread Operator em obejtos
{
let pessoa = {
    nome: 'juan',
    sobreNome: 'vitor',
    idade: 28
}
console.log(pessoa)

let novasInfos = {
    ...pessoa,
    peso: 70,
    altura: 1.80.toFixed(2),
    cidade: 'São Paulo'
}
console.log(novasInfos)
}
// Exemplo onde o spread operator é muito util no dia a dia

function cadastroPessoa(info){
    
    let novosDados = {
        ...info,
        futuro: 'Programador Js',
    }
    return novosDados
}
//Simulando um cadastro de pessoa
console.log(cadastroPessoa({nome:'juan', nomeFamilia: 'Barbosa', cidade: 'São Paulo'}))
