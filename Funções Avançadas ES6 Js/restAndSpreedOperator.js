// Antes do ES6 como era feito para pegar varios argumento e parametro com tamanho menor

/* Utilizava-se o 'arguments' para poder passar argumentos maiores em quantidade 
    do que os parametros da função suportava inicialmente.
    Fazendo de maneira mais imperativa consequentemente tornando o código mais verboso
*/
function somar(a,b){
    let valores = 0
    for(let i = 0; i < arguments.length; i++){
        valores+= arguments[i]
    }
    return valores
}
// console.log(somar(2,2,5,5,1,6)) 

/* Com ES6 foi criado o Rest operator ... trẽs pontos para receber qualquer tamanho de argumento,
 armazenando tudo em um array assim podendo usar método de array pra manipular esses argumentos 
 armazenados
*/

                            //REST OPERATOR  ...

// Está forma é mais declarativa
function somar1(...args){ //rest operator + o nome dessa 'variavel rest'
    return args.reduce((somaTotal, num) => somaTotal + num, 0) //{
        // somaTotal= somaTotal + num
        // return somaTotal
    //},0)
}
 console.log('Soma total:', somar1(2,3,5,4))


function multi (...numbers){
    return numbers.reduce((valorAcum, num) => valorAcum * num,1)
}
console.log('Multiplicação total',multi(5,5,2,2))



                           //SPREAD OPERATOR ...

const frase = 'Digital innovation one'

function showMess(...args){ //rest operator
    console.log(args) // poedira passar arguments 
}
showMess(...frase) // spread operator
/* Usando o rest operator na função para receber a quebra da string que está armazenada na varivel frase

Na invocação da função showMess recebe como argumento o spread + variavel frase
*/ 

// Spread em Array
const arrNUm = [1,2,3,4,5,6]
function showNum(){ // poderia passar Rest
    console.log('\n',arguments) 
}
showNum(...arrNUm)

// Construindo Array's literais com Spread
const num = [1,2,3,4]
// Para juntar dois array existe o método concat mas com spread também dá fazer
const num2= [...num, 5,6,7,8]
const concaTArr = num.concat(['5','6','7','8'])
console.log('\nUsando método Concat para juntar os arrays',concaTArr)
console.log('\nJuntanto arrays com Spread operator',num2)
const numbers01 = ['one','two', 'tree']
const numbers02 = ['for','five','six']
const newNumbArr = [...numbers01, ...numbers02, 'seven','eight','nine']
console.log('\n',newNumbArr)

/* Spread em objetos literais, só pode ser usado para copiar chaves e valores de outros objetos
 para construir um novo objeto
*/
let object = {
    prop: 123
}
let object02 ={
    ...object,
    newProp: 'Olá'
}
console.log('\nSpread em obj literal',object02)



