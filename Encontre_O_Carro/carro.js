// Este codigo ajuda encontrar carros no estacionamento da Earl's Auto.

function encontreCarro(carros){
    for(let cont = 0; cont < estacionamento.length;cont ++) {
        if (carros == estacionamento[cont]){
         return cont
        }   
    }
    return - 1;
}
let chevy = {
    montadora: 'Chevy',
    modelo: 'Bell Air'
};
let taxi = {
    montadora: 'Webvile Motors',
    modelo: 'taxi'
};
let fiat1 ={
    montadora: 'Fiat',
    modelo: '500'
};
let fiat2 = {
    montadora: 'Fiat',
    modelo: '500'
};

let estacionamento = [chevy, taxi, fiat1, fiat2];

            //Função        argumerto
let localiz1 = encontreCarro(fiat2);
let localiz2 = encontreCarro(taxi);
let localiz3 = encontreCarro(chevy);
let localiz4 = encontreCarro(fiat1);

console.log(localiz1);
console.log(localiz2);
console.log(localiz3);
console.log(localiz4);


