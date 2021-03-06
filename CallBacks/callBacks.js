/* Callbacks Function são funções que vão ser chamadas
depois. São tambem cidadões de primeira classe

HOF(High order Functions): São funções que recebem outras função como parametro ou retornam outras funções
*/ 

// Cidadao de primeira classe: Função pode ser armazenadas em variaveis, constante, 
//retornar valores, retornar funções e passar uma função como parametro para outra função

// função armazenda em uma const
const soma = function(a, b){// função anônima
    return a + b
}
console.log(soma(10,5))

// Retornando uma outra função

function soma2(c){
    return function somaInterna(d){
         return c + d
    } 
}
// 1 Possibilidade invoncando direto
console.log(soma2(4)(5)) 
// invocando uma função que está retornando outra função

// 2 Possibilidade armazenando soma2 em uma const
const resultadoSoma2 = soma2(10)
console.log(resultadoSoma2(10))

// Recebendo um função como parametro 
function subtrai(a,b, funcaoCallback){
    funcaoCallback(); //invocando
    return a - b
}
// 1 Possib de saida de informação
console.log( subtrai(10,3, function(){ 
/* passando uma função anonima 
direto como argumento da função subtrai
*/ 
}));

/* 2 Possib Armazenar a invocação de subtrai com seus argumentos 
em uma const
*/ 
const resultadoSubtri = subtrai(5,3, function(){
    console.log("Função callback")
})
console.log(resultadoSubtri)

// ___________________________________________________________

function mult(a,b, fnCallBack){
    const resut = a * b 
    fnCallBack(resut) // invocando função
    return resut
}
const resultMult = mult(10,5 ,function(valor){ // função anonima
    console.log("Foi", valor -10)
})
console.log(resultMult)

// Sem função anomina sendo passada direta como argumento
function fnMult(valor){
    console.log("Foi", valor -10 )
}
const resultMult1 = mult(10,5, fnMult) // foi passada só a referencia da função ou seja o nome
console.log(resultMult)


// Exemplos de funções Callback
/*    
       1 Exemplo com escutadores do DOM 

     button.addEventListener('click', function(event){ //Com função anonima
       // ação qualquer
    })
        Sem função anonima 

    function handlerButton(event){
        // ação qualquer
    }
    button.addEventListener('click',handlerButton)


    2 Exemplo com função que trata Arrays
    [1,2,3,4,5].map(V => v *2) // Com arrow function

    3 Com função de tempo
    setTimeout(function(){ // função anonima

    }, 500)

    função tempoHandler(){
        //ação qulquer
    }
    settimeout(tempoHandler, 5000)

    4 Promisse
    getUsuarios().then(function(listaUsuarios){ //função anon.
        console.log(listaUsuarios)
    })
        //Sem função Anon.
    function carregausuarios(listaUsuarios){
        console.log(listaUsuarios)
    }
    getUsuarios().then(carregausuarios)
*/ 
setTimeout(function(){// função anonima
    console.log('Oi')
},5000)

function tempohandler(){
    console.log('ola')
}
setTimeout(tempohandler, 500)// sem função anonima

// Exemplo de código sincrono
/* Funções como map, filter, reduce, flatMap, every,
 some e includes todas essas usam funções de callback
*/ 

// MAp
//Como seria se fossemos dobrar esse valores do array.
{
// Colocar chaves fecha um o escopo novo e pode-se criar novas variaveis e array com os mesmos nomes
//Forma Procedural(Passo a Passo)
const numeros = [1,5,3,9,7]
const numerosDobrad = []
for(let i = 0; i < numeros.length; i++){
    numerosDobrad.push(numeros[i] *2)
}
console.log(numerosDobrad)

// Refatoração, criando uma função para dobrar qualquer array

function dobrarArray (array){
    const numerosDobrados = []
    for(let i = 0;i < array.length; i++){
        numerosDobrados.push(array[i]* 2)
    }
    return numerosDobrados
}
console.log(dobrarArray([5,2,3]));
console.log(dobrarArray([1,10,22,24]))

/* Mesmo tendo um função que dobre qualquer Array 
que for passado como argumento para a função, ele limita muito
pq só dobra a cada nova ação que fosse criada teria que mudar essa função
*/

//Refatoração da função acima, recriando a função Map nativa do js 

function map(arraY, fncallback){
    const arrayResult = []
    for(let i = 0;i < arraY.length; i++){
        arrayResult.push(fncallback(arraY[i]))
        // arrayResult vai receber os argumentos que irao ser passados para a função map quando for invocada
    }
    return arrayResult
}

//retornando um array do obj dentro da função anon
console.log(
    map([5,7,10],function(valor){//chamando a função passando os argumentos: Um array e Uma função anonima
        return({data: valor * 2}) 
    })
)

// Agora pode customizar
console.log(
    map([5,7,10],function(valor){//chamando a função passando os argumentos: Um array Uma função
        return  valor /2 
    })
)

//retornando uma string
console.log(
    map([5,7,10],function(valor){//chamando a função passando os argumentos: Um array Uma função
        return `Valor é ${valor}` 
    })
)
}
//Numeros pares
const numeros = [2,9,10,3,5,8]
const numerosPares = []

for(let i = 0; i<numeros.length; i++){
    if(numeros[i] % 2 ==0){
        numerosPares.push(numeros[i])
        
    }
}
console.log(numerosPares)

// Refatorando, Criando uma função para dar flexibilidade podendo manipular os arrays como quiser

function filter(arr, fnCallBack){
    const arrayResult = []

    for(let i =0; i < arr.length; i++){
        if(fnCallBack(arr[i])){ // a função fnCallBack está sendo invocada e estamos passando um valor pra ele 
        // esta puxando qualquer info de qualquer array passado como argumento para a função
            arrayResult.push(arr[i])
        }
    }
    return arrayResult
}
// Pares
console.log(
    filter([9,10,14,17,22,11], function(valor){
        return (valor % 2) ===0
    })
)

// Impares
console.log(
    filter([9,10,14,17,22,11], function(valor){ // com função anonima
        return (valor % 2) !==0
    })
)

/* 
TRECHO ACIMA SEM FUNÇÕES ANONIMAS

function ePar(valor){
return (valor % 2) ===0
}
console.log(
    filter([9,10,14,17,22,11],ePar))

function eImpar(valor){
return (valor % 2) !==0
} 
console.log(
    filter([9,10,14,17,22,11],eImpar))  
*/

/* COM ARROW FUNCTIONS
console.log(
    filter([9,10,14,17,22,11], valor => (valor %2) ===0)
)  

console.log(                   argum    funç  bloco da funç
    filter([9,10,14,17,22,11], valor    =>   (valor %2) !==0)
)
*/ 
