/*O QUE É IMUTABILIDADE é ato de criar novos resultados sem alterar os dados antigos
PARA QUE SERVE IMUTABILIDADE  é importante para evitar dores de cabeça
como alterações de atributos e valores.
*/ 

const user = {
    nome: 'João',
    sobreNome: 'Monteiro da silva'
}

function pegarNomeInteiroUser(user){
    return{
        ...user,
        nomeInteiro: `${user.nome} ${user.sobreNome}`
    }
}

const userNomeInteiro = pegarNomeInteiroUser(user)

console.log(userNomeInteiro, user)



// Segundo Exemplo Lista de Alunos Aprovados

//Array de objetos

const alunos =[{
    nome: 'jose',
    nota: 9
},

{
    nome: 'Lucas',
    nota: 2
},

{
    nome: 'Maria',
    nota: 6
}];

function pegarAlunosAprovados(listaAlunos){
    return listaAlunos.filter(alunos => alunos.nota >= 7)
}

console.log(`Alunos aprovados:`);
console.log(pegarAlunosAprovados(alunos))

console.log('\nLista de Alunos:')
console.log(alunos)