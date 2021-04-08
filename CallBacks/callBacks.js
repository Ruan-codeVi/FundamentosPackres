/* Callbacks Function são funções que vão ser chamadas
depois. São tambem cidadoes de primeira classe

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