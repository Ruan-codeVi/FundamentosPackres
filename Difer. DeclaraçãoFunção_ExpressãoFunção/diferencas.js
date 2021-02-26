/* Diferença entre (Declaração de função) e (Expressão de função).
    
    Declaração de função: 
    São criadas e avaliada antes do resto do cádigo, nomes dados as
    declarações de função são usados PELO NAVEGADOR par a criar e definir uma variavel que vai se referir a essa função

    Expressões de função:
    São funções criadas na medida que o código executa, em tempo de execução(runtime).
    nas expressões de função tipicamento não se fornece nome para a função, ou atribui-se a função a uma variavel ou usa a expressão de função de outas maneiras


    Funções tem status de Primeira classe no javaScrpit
    *Você atribuir funções a variaveis
    * Você pode passar funções para outras funções
    * Vocẽ pode retornar funções de outras funções


    Exemplos
*/ 

let migracaoPassaros = true;

//Declaração de Função
function quack(num){
    for(let cont = 0; cont < num; cont ++){
        console.log('Quack!')
    }
}
//Expressão de função
let voar = function(num){
    for(let cont = 0; cont < num; cont++){
        console.log('Voa!')
    }
}

if(migracaoPassaros){
    quack(4)
    voar(4)
};