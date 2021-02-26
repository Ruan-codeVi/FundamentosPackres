/* Grande partes dos handler's são atribuidos para propriedades como onload, onmouseover etec.
 Mas nem todos eventos funcionam assim por exemplos baseados em tempo vocẽ chama uma função
 setTimeout e passa seu handler para ele*/

//  Exemplo de handler baseado em tempo

function handlerTimeout(){
    window.alert('Esse handler é baseado em uma função não em uma propriedade')
}
// chamamos a função setTimeout que recebe dois argumentos, o event handler e a duração em milissegundos
setTimeout(handlerTimeout, 5000);