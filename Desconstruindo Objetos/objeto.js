// Desconstruindo Objeto em Javascript

// Criando Objeto Pessoa

let pessoa = {
    nome: 'juan',
    sobreNome: 'vitor',
    idade: 28,
    cargo: 'Desenvolvedor Front End'
}
console.log(pessoa)

// Descontruindo o objeto pessoa
// Ta pegado do objeto pessoa a propriedade nome, e definindo a uma varivale nome
let {nome} = pessoa;
console.log('obj pessoa',nome)

let {idade} = pessoa;
console.log('obj pessoa ',idade)
console.log(`obj pessoa ${nome} ${idade}`)

// Descontruindo  mais de uma propriedade do objeto

let {sobreNome, cargo} = pessoa
console.log(`obj pessoa ${sobreNome} ${cargo}`)
