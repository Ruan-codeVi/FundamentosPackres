// Diferença de escopo de variaveis locais e Globais
//  Variaveis declaradas fora de funções são Globais é acessadas a qualquer momento
// Variaveis declaradas dentro de Funções são Locais

// Variaveis Globais

var avatar = 'generic';
var abilidade = 1.0;
var pontoPorLevel = 200;
var usuarioPontos = 2008;
//       nomeFunção  parametro
function pegarAvatar (pontos){
    // variavel Local
    var level = pontos / pontoPorLevel;
    
    if(level == 0){
        return 'Teddy urso'
    } else if(level < 20){
        return 'gato de botas'
    } else if(level > 50){
        return 'GorilaZord'
    }
}
//       nomeFunção      parametros
function updatePontos (bonus,novosPontos){
    var contador = 0;
    
    while(contador<bonus){
        novosPontos = novosPontos + abilidade * bonus;
        contador = contador + 1;
    }
    return novosPontos + usuarioPontos;
}


// Invocando as funções passando os argumentos para os parametros
//               função       argumentos   
 usuarioPontos = updatePontos (1, 25);
//          função    argumento
 avatar = pegarAvatar   (25112);

 console.log(usuarioPontos);
 console.log(avatar);
