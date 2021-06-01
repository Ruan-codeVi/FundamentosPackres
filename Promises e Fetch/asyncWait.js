// A prtir do ES7 surgiu o Async o que é?
//  Wait  é a tag que espera uma promise ser resolvida, torna ó código assincrono
// É a forma de criar promises de maneira mais simples e lidar com promises dentro de promises

const simpleFunction = async ()=>{ // com arrow function
    return 1234
} // Retornado a a promise
// simpleFunction().then((dado)=> console.log('Promise arrow funct',dado))
                // ou

const simpleFunction1 = async function(){ //com função anonima
    return '1234'
} // Retornado a a promise
// // simpleFunction1().then(function(dado){
//     return console.log('Promise função anonima',dado)
// })

// Utilizando o await pra invocar um promise em outra promise
const asyncTimer =()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('1 de jun 2021')
    },1000)
})
const simplesFunc = async ()=>{
    const data = await asyncTimer() // await = esperar a promise asyncTimer ser resolvida pra ser armezaneda na variavel data
    return data
}
simplesFunc().then((data)=>{
    console.log('Dado vindo da promise asyncTimer,',data)
}).catch((err)=>{
    console.log(err)
})