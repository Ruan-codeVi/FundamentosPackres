//argumentos virando Objeto literal
let chevyParams = {
    montadora:'Chevy',
    modelo: 'Bell Air',
    ano:1957,
    cor:'vermelho',
    capacPassag: 2,
    conversivel: false,
    kilometragem:1021
    
}
let taxiParams = {
    montadora:'Webville Motors',
    modelo: 'Taxi',
    ano:1955,
    cor:'Amarelo',
    capacPassag: 4,
    conversivel: false,
    kilometragem:281341
}
//argumentos virando Objeto literal
let fiatParams = {
    montadora:'Fiat',
    modelo: '500',
    ano:1957,
    cor:'Marron',
    capacPassag: 2,
    conversivel: false,
    kilometragem:88000
    
}
//argumentos virando Objeto literal
let cadilacParams = {
    montadora:'GM',
    modelo: 'Cadilac',
    ano:1955,
    cor:'azul',
    capacPassag: 5,
    conversivel: false,
    kilometragem:12892
    
}


let cadilac = new Carros(cadilacParams);
let chevy = new Carros(chevyParams);
let taxi = new Carros(taxiParams);
let fiat = new Carros(fiatParams);

// Transformando os argumentos como um objeto literal
function Carros(parametros){
    this.montadora = parametros.montadora,
    this.modelo = parametros.modelo,
    this.ano = parametros.ano,
    this.cor = parametros.cor,
    this.capacPassag = parametros.capacPassag,
    this.conversivel = parametros.conversivel,
    this.kilometragem = parametros.kilometragem,
    this.motoLigado = parametros.motoLigado,

    this.ligar = function(){
        this.motoLigado = true;
    }

    this.parar = function(){
        this.motoLigado = false;
    }
    this.dirigir = function(){
        if(this.motoLigado){
            console.log(`${this.montadora} ${this.modelo} Vrum Vrum`)
        }else{
            console.log(`Ligue o motor do veículo primeiro`)
        }
    }
}

cadilac.ligar();
cadilac.dirigir();

// for(let cont = 0; cont < carrosArray.length; cont++){
//     carrosArray[cont].dirigir();
//     carrosArray[cont].ligar();
//     carrosArray[cont].dirigir();
//     carrosArray[cont].parar();

    
// }


