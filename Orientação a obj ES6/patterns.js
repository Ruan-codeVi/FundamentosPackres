/* Factory : Todas as funções que retornam um objeto, 
sem a necessidade de chamá-las com o new, 
são consideradas funções factory(fabrica).
*/

// Exemplo de um função factory
// function FakeUser(){
//    return ({
//        this.nome = 'Guilherme',
//        this.lastName = 'Cabrini'
//    });
// }
// const user = FakeUser()
// console.log(user)




// Isto não é uma função Factory

function FakeUser(){
    this.nome = 'Guilherma',
    this.lastName = 'Cabrini'
}
const user = new FakeUser()





/*                                  
                                    SINGLETON

Singleton: O objetivo desse pattern é criar uma única instância de uma função
construtora e retorná-la toda vez em que for necessário utilizá-la uma criada não se pode modificar
essa instancia.
*/ 
function NovaPessoa(){
	if(!NovaPessoa.instance){
	 NovaPessoa.instance = this;
     }
	return NovaPessoa.instance
}
const p = NovaPessoa.call({nome: 'Joao'});
// call é o contexto que vai ser alterado da função construtora NovaPessoa
const p2 = NovaPessoa.call({nome: 'Custon Name'})
console.log(p)
console.log(p2)




// PATTERN DECORATOR
/* 
function readOnly(target, name,  description){
    description.writable = false
    return description
}
class job{
    @readOnly
    title(){
        return 'CEO'
    }
}
*/