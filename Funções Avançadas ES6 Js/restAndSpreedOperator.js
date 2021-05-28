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

// Está forma é mais declarativa
function somar1(...args){ //rest operator + o nome dessa 'variavel rest'
    return args.reduce((somaTotal, num) => somaTotal + num, 0) //{
        // somaTotal= somaTotal + num
        // return somaTotal
    //},0)
}
console.log( somar1(2,3,5,4))