// Como obejto literais eram escritos antes do ES6


// Objeto literal
var obj = {
    prop: 'Valor'
}
console.log('Objeto literal antes ES6',obj)

//Valor sendo uma variavel externa
var variavel = 'valor externo';

var objt = {
    prop: variavel
}
console.log('\nObj literal com valor de prop sendo externo', objt)


// Com ES6 foi criado o short hand, podendo omitir o lado direito fazendo que a chave e valor tenham o mesmo nome

let valor = 'valor externo do obj';
let obj1 = {
    valor
}
console.log('\nshort hand no obj literal',obj1)

// Short hand também com método sendo uma função externa

function saudacao(){
    console.log('\nOlá mundo, função externa do obj')
}
const newObjt = {
    saudacao
}
 newObjt.saudacao()



 //  Como era definido uma variavel sendo como propriedade de um objeto e atribuir um valor pra essa prop

 /* O problema é que tinha que criar o objeto antes de fazer
essa atribuição da propriedade */  

let propName = 'test'; // var

let obj2 ={} // objeto literal
//nome do obj + [conchetes] está dizendo que o que esta dentro vai ser a prop do obj
obj2[propName] = 'valor da prop';
console.log('\nobj2',obj2)


// Com ES6 é definido uma variavel sendo como propriedade de um objeto e atribuir um valor pra essa prop
const propName01 = 'test2'
const obj3 = {
    [propName01]: 'valor da prop'
}
console.log('\nobj3',obj3)
