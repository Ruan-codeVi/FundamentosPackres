// Principais Funções de object em JavasScript
let user ={
    nome: 'Juan',
    restoNome: 'vitor Barbosa dos santos'
}
console.log(user)

// Recupera a chaves do objeto  *Chaves são os nomes das propriedades do objeto
console.log('Propriedades do objeto user:', Object.keys(user))

// Recupera o valores dos objetos *Valores são os atributos das propriedades 
console.log('Valores do objeto user:', Object.values(user))

// Retorna um array de arrays contendo [nome prop, valor prop ] separando por arrays
console.log('\nLista de propriedades e valores:', Object.entries(user))


// Merga 'Mescla' propriedades de objeto *Muito usado na imutabilidade

// *ESTÁ NÃO É UMA FORMA MUITO BOA DE FAZER PQ ALTERA O OBJETO USER DIRETAMENTE
Object.assign(user,{linkedin: 'RuancodeVi'})
console.log('\nAdicionando a prop linkedin no objeto user', user)

 
/* Object.assing é função que ajuda no conceito de imutabilidade
    Object.assing como primeiro argumento pedi um objeto, ja no segundo argumento aceita
    N possibilidades de objetos
*/ 

//FORMA MAIS CORRETA DE USAR OBJECT.ASSIGN 
// * Passa no primeiro argumento UM OBJETO NOVO E VAZIO e depois faz o merge que queira
console.log('\nRetorna um novo objeto e margeia com dois ou mais objetos:', Object.assign({}, user, {idade:28}))
//Constatando que user no foi alterado nessa Mescla
console.log('\nComparando o objeto user para comprovar que o objeto não foi alterado diretamente, mas que foi criado uma cópia nova do objeto user', user)  


// Função freeze serve para impedir qualquer alteração no objeto original

const carro = {
    potencia: '140cv'
}
// utilizando a funçao objected freeze
Object.freeze(carro)

//Alterando o valor da prop potencia
carro.potencia = '220cv'
//Deletando a prop potencia
delete carro.potencia

// criando um prop nova no obejto carro
carro.eficiencia = '15km por litro'

// console.log('\nVariavel const com Objeto carro :', carro)
console.log('\nVariavel const com Objeto carro com Object.freeze :', carro)

/* Função seal impedi a criação e exclusão de propriedades do obj original, 
    mas permite alterar valores de prop ja existentes no objeto original
*/  

const pessoa ={
    nome: 'juan',
    altura: '1.80'
}
Object.seal(pessoa)

// Criando prop nova
pessoa.peso = '70kg'

//Deletando prop nome
delete pessoa.nome

console.log('\n função object seal, alterações ?:', pessoa) //Não permitiu criar e nem excluir prop

// Altera prop peso
pessoa.nome = 'Joana'
console.log('\n função object seal, alterações ?:', pessoa)