// event handle ou callback
window.onload = unit;

let biscoitos = {
    instrucoes: 'Pré aqueça o forno em 350º graus...',
                   //(parâm)
    assar: function(tempo){
        window.alert('Assando os biscoitos');
//função Javascript   argumtos
          setTimeout (pronto, tempo)
    }
};
// event handler
function unit(){
                                //elemento DOOM
    let botao = document.getElementById('botao');
    //var propJavascript  handler
    botao.onclick       = handleBotao;
};

function handleBotao(){
    window.alert('Prepanrando Biscoitos');
    //objeto  propr argum
    biscoitos.assar(2500);
};
function pronto(){
    window.alert('Biscoitos estão prontos, retire-os do forno');
    window.alert('Espere os biscoitos esfriarem!');
    
    let prontos = function(){
        window.alert('Os bicoitos estão bons, hora de comer!');
    }
    setTimeout(prontos, 2500);
};