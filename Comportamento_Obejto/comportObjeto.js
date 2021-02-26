/* Objetos não apenas servem para armazenar números, strings e booleanos. 
Eles também são ativos, ele podem fazer coisas.
 */
// Exemplo
let fiat ={
    montadora: 'Fiat',
    modelo: '500',
    ano: 1957,
    cores: 'Azul claro',
    passageiros: 2,
    quilometragem: 8800,
    // pode-se passar função para uma propriedade 
    partida: function(){
        alert('Vrum Vrum');
    }
} 
// funções dentro de Objetos são chamandas de MÉTODOS

// Para chamar os métodos em objetos basta fazer igual no exemplo
//nomeObj.propriedadeNome()
fiat.partida();


