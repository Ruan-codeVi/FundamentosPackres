// Desconstruindo Array's

let pessoa = ['Juan','Vitor', 28, 1.80, 70]

// Têm 2 modos de desconstruir um array
// 1º Forma passando a posição do elemento no array.
{
let {1:sobreNome} = pessoa;
console.log(sobreNome);
// Descontruindo com mais de uma posição
let {0: nome, 3: altura, 4:peso} = pessoa
console.log(`nome: ${nome} altura: ${altura.toFixed(2)}, peso: ${peso}`);
}
/* 2º Criando um novo array com os nomes da varivaies desejadas 
e atribuido ao array original. * Lembrar de seguir a ordem para a criação
das novas variaveis com os elemento do array original.
*/ 
{
let [primeiroNome, segundoNome, idade, altura, peso] = pessoa
console.log('[]',primeiroNome, segundoNome, idade, altura.toFixed(2), peso)
console.log('[]', segundoNome)
}
/* Pode-se desconstruir quantos elementos quiser, basta seguir a ordem dos
elementos do array original para a criação dos nomes da variaves.
* Não dá para desconstruir um por um, somente utilizando a posição do elemento no array original 
*/ 
let [nome, sobreNome] = pessoa
console.log(nome, sobreNome)