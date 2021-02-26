/**
 *EXPRESSÕES DE FUÇÃO SÃO FUNÇÕES SEM NOME, LOGO SÃO ANÔNIMAS
 */


//event handler função anon
window.onload = function(){
    // var                     elemento DOOM
    let botao = document.getElementById('botao');
    //var //prop.Js    
    botao.onclick = function(){ //funç anôn = expressão de função
        window.alert('Prepanrando Biscoitos');
        //obj     prop.(param)
        biscoitos.assar(2500);
    }
};
// objeto
let biscoitos = {
    //prop's
    instrucoes: 'Pré aqueça o forno em 350º graus...',
          //funç_anôni(parâm)
    assar: function  (tempo){
    window.alert('Assando os biscoitos');
    //funçJs   /funç anôn
    setTimeout(function(){
    window.alert('Biscoitos estão prontos, retire-os do forno');
    window.alert('Espere os biscoitos esfriarem!');
    
    //funçJs  /funç anôn aninhada
   setTimeout(function(){
       window.alert('Os bicoitos estão bons, hora de comer!');
      //argum
    },10000);
      //argum
    }, tempo)
  }
};

// função setTimeout são funções próprias do Js, normalmente recebem 2 parâmetros 
