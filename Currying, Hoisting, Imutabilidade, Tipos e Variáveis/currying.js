/* Curryng é a técnica que usamos para transformar uma função 
que tem varias parametros e uma função que tem apenas um parametro 
e para cada parametro retorne uma nova função*/

//Nassa função o dois que seria o 'parametro a' se repete todas as vezes
function soma (a, b, c){
    return a + b + c
}
console.log(soma(2,3,4))
console.log(soma(2,5,1))
console.log(soma(2,0,10))


//utilizando o currying
function somaCurri(a){
    return function(b){ 
        return a +b
    }
    
}

const param2 = somaCurri(2)

console.log(`teste ${param2(5)}`)
console.log(`teste ${param2(1)}`)