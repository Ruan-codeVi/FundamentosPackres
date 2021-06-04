/* Para explicar async Wait, temos que saber que promises servem para lidar com
códigos assincronos em javaSript, são acões que acontencem em background em quanto o código
segue o fluxo enquanto essas ações estão esperando a resposta. Em algum momento elas vão ser usadas 
*/
// Async Wait são keys words - palavras chaves 
// Async Wait nada mais que sintaxe sugar, ele entende tudo em forma de promises por baixo dos panos


// Código assincrono

// Sintaxe de uma promisse
const promise = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('Final'),2000)
})
console.log('Inicio')

// Sintaxe, como receber resultados da promise

promise.then((tetxt)=> console.log(tetxt))
.catch((err)=>console.log(err))

// Ou
 promise.then(console.log)

//  Ou
promise.then(
    (res)=> setTimeout(()=> console.log(res),4000),
    (rej)=> console.log(rej)
)


// Async/Wait

/*Colocar async  na frente de funções ou blocos de códigos,
 automaticamente transforma o retorno dessa função em código assincrono
*/
(async function(){   
   console.log('Ola Mundo')

// O que interpretador faz
(function(){
    return new Promise((resolve, reject)=>{
        console.log('Ola Mundo')
        resolve()
    })
})()

// A mesma sintaxe de :

function funcQualquer(){
    console.log('Ola')
}
funcQualquer()