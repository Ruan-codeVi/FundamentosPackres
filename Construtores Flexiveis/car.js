let cadilacParams ={
    montadora: 'GM',
    modelo: 'cadilac',
    ano: '1957',
    cor: 'vermelho',
    passageiros: 5,
    conversivel: false,
    kilometragem: 1254

}

function Carros(paramas){
    this.montadora = paramas.montadora;
    this.modelo = paramas.modelo;
    this.ano = paramas.ano;
    this.cor = paramas.cor;
    this.passageiros = paramas.passageiros;
    this.conversivel = paramas.conversivel;
    this.kilometragem = paramas.kilometragem;
}

let cadilac = new Carros(cadilacParams);
//adicionando propr
cadilac.cromado = true;
//deletando propr
delete cadilac.conversivel;
delete cadilac.montadora;

console.log(cadilac  instanceof Carros);
console.log(cadilac)