const meuTexto = 'hello world'
meuTexto.split('')
console.log(meuTexto.__proto__.split === String.prototype.split)
// console.log(meuTexto)

// FORMA ANTIGA DE CRIAR UM OBJETOS

function animal(){}
console.log(animal.constructor)
// Quem é construtor de aninal?

// Construtor Animal
function Animal0(){
    this.quantidPatas = 4;
}
const cachorro = new Animal0();
console.log(cachorro.quantidPatas)

console.log('\n Cachorro criado o __proto__ é criado também, e proto  aponta para o prototype de Aninal\n'
,cachorro.__proto__ === Animal0.prototype) 


console.log('\n Construtor Animal é criado o __proto__ é criado também, e proto aponta para o constructor de função\n'
,Animal0.__proto__ === Function.prototype) 

// Como saber de quem é a instância
console.log('item é instancia do item 2?',cachorro instanceof Animal0)
console.log('item é instancia do item 2?', cachorro instanceof Function)


// Função construtora deriva de outro construtor
{
function Animal(quantdPatas){
    this.quantdPatas = quantdPatas //atribt

    // Implementando Métodos
    this.movimenta = function(){}
}
function Cachorro(morde){
    Animal.call(this, 4)
    this.morde = morde
    /* Quando é instanciado um novo obj com new Cachorro
    COnstrutor Cachoro está pegando a consctrutor Animal e chamando mais a função call 
    e como argumento da função call, permite passar um contexto para copia,
     atraves de this passado, agora objetos instanciados(criados) por Cachorro podem ter acesso as propriedades da consctrutor  Animal
     Podendo fazer uma especie de 'copia' para dentro do objeto instanciado por Cachorro.
     o segundo argumento são os parametros
    dessa consctrutor que foi passada junto de call.
    ou seja toda vez que instanciar novo obj,
     esse obj vai na consctrutor passado com o call e  copia todos o this.prop desse construtor e joga dentro do obj instanciado
     
    PUG INSTÃNCIA de Cachorro possue também a propriedade quantdPatas que é do construtor Animal
      */ 
    
    //  Método

    this.late = function(){
        console.log("Au Au")
    }
}
const pug = new Cachorro(false)
const pato = new Animal(2)
console.log('\nConstrutor Cachorro\n',pug)
console.log('\nConstrutor Animal : Pato\n', pato)
}
// FORMA MAIS UTUAL DE CRIAR OBJETO EM JS
class Animal{
    constructor(quantdPatas){
        this.quantdPatas = quantdPatas
    }
}
class Cachorro extends Animal{
    constructor(morde, raca){
        super(4) // o super é obrigatório representa o contexto this da classe Animal, a mesma função de call
        this.morde = morde
        this.raca = raca
        
    }
}
const pitbullVar = new Cachorro(true, 'pitbull')
console.log('\nConstruindo objs através de Class\n',pitbullVar)

// Usando prototype para criar herença da forma ANTIGA, com constructor de função
{
function Pessoa(){}
Pessoa.prototype.maiorIdade = 18
Pessoa.prototype.ramoNegocio = function(){
    //Acão aqui
}

function PessoaFisica(cnpj){
    Pessoa.call(this)
    this.nomeLimpo = true;
    this.cnpj = cnpj
}
PessoaFisica.prototype = Object.create(Pessoa)
PessoaFisica.prototype.pedirEmpresp = function(valor){
        this.valor_Emprest = valor
    console.log(`\nEmprestimo em Reais  R$${valor}`)
}

const fulano = new PessoaFisica(545155454415)
fulano.pedirEmpresp(1000)
console.log(fulano)
}




// Refatorando o Codigo de cima com Class para construir Obj

class Pessoa{
    constructor(){}

    ramoNegocio(){

    }
}

class PessoaFisica extends Pessoa{
    constructor(cnpj){
        super()
        this.nomeLimpo = true;
        this.cnpj = cnpj
    }

    pedirEmpresp(valor, nome){
        this.valor_Emprest = valor
        this.nome = nome
        console.log(`\nEmprestimo em Reais  R$${valor}`)
    }
}

const ciclano= new PessoaFisica(000000000000.toFixed(10))
ciclano.pedirEmpresp(100000, 'ciclano da silva')
console.log('\n',ciclano)


// Static: permite acessar métodos/atributos sem precisar instanciar(criar)

class Person{
    static andar(){
        console.log('\n...Andando')
    }
}
console.log(Person.andar())