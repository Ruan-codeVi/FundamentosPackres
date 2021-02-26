let tick = true;
function ticker(){
    if(tick){
        console.log('Tick');
        tick = false;
    }else{
        console.log('Tock');
        tick = true;
    }
}
// setinterval é um método de repetição, e funciona com dois argumentos um deles tem que ser o tempo
// Para parar um timer de intervalo salve a função setInterval em uma variável

let pararSetInterval = setInterval(ticker, 1000)
//use clearInterval(nome da variavel)

clearInterval(pararSetInterval);