// event handle ou callback
window.onload = function(){
                                //elemento DOOM
let botao = document.getElementById('botao');
//var propJavascript // handler com expressção de função
    botao.onclick   = function(){
    window.alert('Prepanrando Biscoitos');
    //objeto /prop  argum
    biscoitos.assar(2500);
  }
}
//objeto
let biscoitos = {
    //prop's
    instrucoes: 'Pré aqueça o forno em 350º graus...',
    //função anônima(parâm)
    assar: function(tempo){
        window.alert('Assando os biscoitos');
//função Javascript   argumtos
        setTimeout (pronto, tempo)
    }
};

function pronto(){
    window.alert('Biscoitos estão prontos, retire-os do forno');
    window.alert('Espere os biscoitos esfriarem!');
                //função anôni.
    let prontos = function(){
        window.alert('Os bicoitos estão bons, hora de comer!');
    }
    //funçãoJS  arg's
    setTimeout(prontos, 2500);
};