/* hoisting é a mecanisco do Js para permitir usar var e função 
antes mesmo delas serem criada.
Hoistings significa suspender, levantar
 e só existe dois tipos de Variaveis tipo var e funções
 
 O hoisting de var só eleva a criação da variavel mas não sua atribuição*/

 function fn(text){
     console.log(text) 
     // como hoisting de var só cria a variavel mas nao atribue o valor, console exibe undefined

     var text = 'Exemplo';

    // console.log(text)
 }

 fn();

//  hoisting de função

console.log(soma())

function soma(){
    return 5 + 2
}

function fn1(){
    function mensagem(value){
        console.log(value)
    }
    mensagem('Hoisting de função')
}
fn1()


