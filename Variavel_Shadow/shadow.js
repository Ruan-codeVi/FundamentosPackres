/*O que acontece quando eu nomeio uma variável local
 com o nome de uma variavél global existente?*/

//   var Global
 var beanCounter = 10;
 
 function getNumberOfItems(ordertype){
    //   var Local
     var beanCounter = 5;

     if(ordertype == 'order'){
         beanCounter = beanCounter * 5;
     } else{
         return 'Item não encontrado'
     }
     return beanCounter
 }
var item = getNumberOfItems('order')
 console.log(item);
 

/*Quando você faz isso, qualquer referência a var beanCounter dentro da função getNumberOfItems
apenas faz referencia a var beanCounter local NÃO A GLOBAL.
Então dizemos que a variavél global(fora da função), está na sombra(shadow) da variável local(dentro da função).
Em outras palavras, não podemos ver a variável global pq a versão local está no caminho.*/  

// Exercicio
var x = 32;
var y = 44;
var radius = 5;

var centerY = 0;
var centerX = 0;
var width = 600;
var heigth = 400;

function setup(width, heigth){
    centerX = width / 2;
    centerY = heigth / 2;

}

function computeDistance(x1,y1,x2,y2){
    var dx = x1 - x2;
    var dy = y1 - y2;
    var d2 = (dx * dx) + (dy * dy);
    var d = Math.sqrt(d2);
    return d;
}

function circleArea(r){
    var area = Math.PI * r * r
    return area
}

// Invocando as função e passando os argumento para as funções

setup(width, heigth);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);

console.log(`Area: ${area}`);
console.log(`Distancia: ${distance}`);
