/* Problemas que dava quando não se passava algum argumento pra função 
e o como os desenvolvedores antecipava alguns desses problemas causados 
por não passar algum argumento para a função
*/ 
{
function multi(a, b){
    return a * b
}
// console.log(multi(5)) 
}
/* NaN não é um número é retornado,
 pq ele recebe o 5 e multiplica 5 por undefined
e como não foi passado o segundo argumento ele vai ser undefined,
 pq foi passado apenas um argumento na função que tem dois param. (a e b)
*/


/*          COMO ERA RESOLVIDO, PARA GARANTIR QUE OS VALORES DOS ARGUMENTOS 
        FUNCIONASSEM CORRETAMENTE ANTES DE SURGIR O ES6 
*/

// 1º forma produz um outro erro quando é passado os dois argumentos mas o b recbendo valor 0 
function mult1(a,b){
    b = b || 1
    return a * b
}
/* quando passado os dois args, e o b receba 0 como valor 
ele faz a condição do b e como 0 em js é igual a false
o b assume 1 e acaba retornando o valor de a
mas qualquer número vezes 0 é o próprio 0
*/
// console.log('\nCom operador lógico, mas Produz erro quando 0 zero é passado pra b', '\nResult:',mult1(5,0))  

// 2ª forma
function mult2(a,b){
    if(typeof b === 'undefined'){
        b = 1
    }
    return a * b
}
// console.log('\nCom typeof no if','\nResult:',mult2(5,0))  

// 3ª forma, não podruz erros
function multi3(a, b){
    b = typeof b === 'undefined' ? 1 : b
    return a * b
}
// console.log('\nCom operador ternario','\nResult:',multi3(5,0))  

// APOS O SURGIMENTO DO ES6 JS 

// Agora é possivel atribuir um valores e função como padrão para um parâmetro
function newMulti(a, b = 1){
    return a * b
}
// console.log('\nAtribuindo valor padrão no parâmetro da função','\nResult:', newMulti(5,0))
// console.log('\nAtribuindo valor padrão no parâmetro da função ','\nResult2:', newMulti(5,undefined))


// const randoNu = Math.floor(Math.random()*100)
// console.log(randoNu)

/* Atribuindo uma função como valor padrão de um parâmetro toda vez que esse argumento não for passado 
e ficar como undefined. Isso é chamado de lazy evaluation
*/
function numberRandon(){
    
    return Math.floor( Math.random() * 10)
}

function multiplicar( a, b = numberRandon()){
    return a * b
}

   
 console.log(multiplicar(5,5))
 console.log(multiplicar(5))
 console.log(multiplicar(5))

