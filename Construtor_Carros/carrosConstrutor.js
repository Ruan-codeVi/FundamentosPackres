function Carros(montadora, modelo, ano, cor, capacPassag, conversivel, kilometragem, motoLigado){
    this.montadora = montadora,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor,
    this.capacPassag = capacPassag,
    this.conversivel = conversivel,
    this.kilometragem = kilometragem,
    this.motoLigado = motoLigado,

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
// criando os objetos
let chevy = new Carros('Chevy','Bel Air',1957,'vermelho',2,false,1021);
let cadilac = new Carros ('GM','Cadilac',1955,'azul',5,false,12892);
let taxi = new Carros('Webville Motors','Taxi',1955,'amarelo', 4, false,281341);
let fiat = new Carros('Fiat','500',1957,'Marron',2,false,88000);

let carrosArray = [chevy, cadilac, taxi,fiat];

for(let cont = 0; cont < carrosArray.length; cont++){
    carrosArray[cont].dirigir();
    carrosArray[cont].ligar();
    carrosArray[cont].dirigir();
    carrosArray[cont].parar();

    
}

/* O problema que está aparente nesse código
 é quantidade de parêmetros no construtor Carros, tornando dificil de ler e dar manutenção
 
 Outro problema é que quando for invocar o construtor Carros,
 temos que garantir que passamos os argumento exatamente na ordem dos parâmetros
*/

// refatorado o código para resolver esses problemas está no arquivo retrabalhandoCarros

