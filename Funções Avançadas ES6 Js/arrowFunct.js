// Arrow function com retorno implicito de obj

let creatObjt = () => ({prop:'123'})
console.log('\nRtornado um obj de uma arrow function',creatObjt())


// Função construtora de obj- construtor classico

function Car(){
    this.Marca = 'Honda'
}
console.log('\nObjeto criado por função construtora',new Car)



// Com arrow function não é possivel criar construtores de objetos

const newCarro = ()=> {
    this.Marca = 'Honda'
}
// console.log(new newCarro)

// * Arrow's functions não sofrem hoisting (Levantar função) como as funções classicas

// Hoistiong com função classica

hoistingFun('\nSofro hoisting! Função clássica')

function hoistingFun(valor){
    console.log(valor)
}

// Arrow função not hoisting
// arrowFuntion('Arrow functions Não sofrem hoisting')
let arrowFuntion = valor => console.log(valor) // ReferenceError: Cannot access 'arrowFuntion' before initialization

// Criando um objeto com métodos na propriedades *NÃO CONFUNDIR COM UMA FUNÇÃO CONSTRUTORA DE OBJS

const obj = {
    mostrarMensagem: function mostrarMensagem(){
        setTimeout(() =>{
            this.logar('\nMostrando mensagem com contador')
        },2000)
    },
    logar: function logar(valor){
        console.log(valor)
    }
}
obj.mostrarMensagem()

// 2 FORMA

const obj1 = {
    monstrarMens: function(){ //função anoni
        setTimeout(() =>{
            this.logar1('\nObj com métodos/contador/funções anonimas')
        },4000)
    },
    logar1: function(mensg){
        console.log(mensg)
    }
}
 obj1.monstrarMens()

//  3 Forma usando Arrow's Functions

const novoObj = {
    showMensagem: function() { // *colocar arrow function aqui da problema por causa do escopo this
       setTimeout(() =>{
            this.prop('\nObj com métodos/contador/arrows functions')
        },9000)
    },
    prop: (valor1) => console.log(valor1)
}
novoObj.showMensagem()