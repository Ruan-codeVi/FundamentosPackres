/*Para adicionar itens ao um array de maneira mais tranquila sem se preocupar com indice/posição
 é atravez do método push*/
 
var pontos = [60,50,60,58,54,54,58,50,52,54,48,69,64,66,61,31,46];
var saida;
var pontualMaisAlta = 0;
for(var contador = 0; contador < pontos.length; contador++){
    saida = `Bubble solution # ${contador} Pontução: ${pontos[contador]}`;
    console.log(saida)
    if(pontos[contador] > pontualMaisAlta){
        pontualMaisAlta = pontos[contador];
    }
}
console.log(`Tamanho test: ${pontos.length}`);
console.log(`Pontuação Mais alta: ${pontualMaisAlta}`);

var melhoresBubble = []
for( var contador = 0; contador < pontos.length; contador ++){
    if(pontos[contador] == pontualMaisAlta){
        melhoresBubble.push(contador);
    }
}
console.log(`A soluções com a pontuação mais alta foi: ${melhoresBubble}`)


// Refatorando 

