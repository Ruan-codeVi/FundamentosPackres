// A prtir do ES7 surgiu o Async Wait o que é?
// É a forma de criar promises de maneira mais simples e lidar com promises dentro de promises

const simpleFunction = async ()=>{ // com arrow function
    return 1234
}
simpleFunction().then((dado)=> console.log('Promise arrow funct',dado))
                // ou

                const simpleFunction1 = async function(){ //com função anonima
    return '1234'
}
simpleFunction1().then(function(dado){
    return console.log('Promise função anonima',dado)
})