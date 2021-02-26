/* Objetos contém ESTADO e COMPORTAMENTO. As proprieadades de um objeto nos permite
manter um estado sobre o objeto - como exemplo nivel de combustivel, sua tempertura atual etc.
    Os métodos de um objeto nos permitemter comportamento - como ligar um carro, ligar ar condicionado, ligar radio etc.
*/

// Exemplo

let fiat = {
    montadora: 'Fiat',
    modelo: '500',
    cor: 'preto',
    ocupantes: 2,
    kilometragem: '0km',
    ligado: false,
    nivelCombustivel: 0,
    // sensorCintoSeg: false,
    
    //métodos - são funções dentro de objetos
    ligarMotor: function(){
        this.ligado = true;
        if(this.nivelCombustivel == 0){
            console.log(`O tanque do ${this.montadora} ${this.modelo} está vazio, abasteça antes para dar a partida!`)
        } else{
            this.ligado = true;
            console.log('Motor Ligado!');
        }
    },
    desligarMotor: function(){
        this.ligado = false;
    },
    // colocarCinto: function(){
    //     this.sensorCintoSeg = true;
    //     if(this.sensorCintoSeg == 'sim'){
    //         console.log('Cinto ok,')
    //     }else{
    //         console.log(`Esta sem cinto! O motor do ${this.montadora} ${this.modelo} foi desligado! e não dá partida sem que o motorista estaja usando cinto de segurança`)
    //        this.ligado = false;
    //     }
    // },
    dirigir: function(){
        if(this.ligado){
        
            if(this.nivelCombustivel > 0){
                console.log(`${this.montadora} ${this.modelo} Vrum Vrum!`);
                this.nivelCombustivel = this.nivelCombustivel - 1;
            }else{
                console.log(`O tanque do ${this.montadora} ${this.modelo} está vazio. Abasteça por favor!`);
                this.desligarMotor();
            }
        }else{
            console.log('Ligue o motor primeiro')
        }
    },
    addCombustivel:function(abastecer){
        this.nivelCombustivel = this.nivelCombustivel +  abastecer;
    }
}
/* this é usado para acessar propriedades e métodos de um objeto.
Exemplo para utilizar propriedade de objeto, dentro de um método precisa-se usar o this na frente, ponto o nome da propriedade.
this.nomePriedade

Para utilizar um método de objeto, dentro de outro método precisa-se usar o this na frente, ponto nome do método
this.desligarMotor();
*/ 

//Chamando os metodos do objeto, nome_Objeto.método() 
fiat.ligarMotor();
                //armgumento   
fiat.addCombustivel(2);
fiat.ligarMotor();
// fiat.colocarCinto('sim');
fiat.dirigir();

// fiat.colocarCinto('sim');
fiat.dirigir();
fiat.dirigir();

// 



