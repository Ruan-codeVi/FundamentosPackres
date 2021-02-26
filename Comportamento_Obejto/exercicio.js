// Exercicio
/* Criando um carro mais parecido com um real.
1º cria uma propriedade para saber se o motor está ligado ou não
2º Criar metodos para  psrtida ou parar
3º Criar uma verificação condicional no método direção para garantir que o carro
está ligado antes de dirigir*/ 

//* IMPORTANTE OBJETOS COM FUNÇÕES DENTRO DE PROPRIEDADE, SÃO CHAMADOS DE MÉTODOS
let hyndaiCarro ={
    montadora: 'Hyndai',
    modelo: 'veloster',
    ano: 2014,
    cor: 'preto',
    passageiros: 5,
    pontencia: '145 cv',
    motorPontencia: 1.6,
    motorLigado: false,
    // MÉTODO
    partida: function(){
    // o This aqui aponta para a propriedade motorLigado que está fora dessa propriedade partida, e muda para true
    this.motorLigado = true;
    },
    // MÉTODO
    parar: function(){
    // This serve para apontar para a propriedade fora desse metodo(function);
    // O seja ele vai no objeto e pega This(ESTÀ)propriedade do objeto motorLigado igual a false 
    this.motorLigado = false;
    },
    // MÉTODOS
    dirigir: function(){
        if(this.motorLigado){
            alert('Carro ligado! Rom Rom');
        }else{
            alert('Você Precisa ligar o carro')
        }
    }
}
// Simulando um teste driver
// Digirir antes de ligar, ele tem como estado false
hyndaiCarro.dirigir();
// Iniciando partida, qundo coloca objeto e usa o métedo partida ele muda a propriedade original (motorLigado) para True
hyndaiCarro.partida();
// Agora o metodo dirigir está com a propriedade motorLigado igual a true
hyndaiCarro.dirigir();
// Metodo para muda de novo a propriedade motorLigado para false 
hyndaiCarro.parar();

// COMO FUNCIONA O THIS
/* THIS é como uma variavel que é atribuida ao objeto cujo o método acabou de ser chamado
Método: Função sendo passado na propriedade de um objeto
exemplo 
objeto HyndaiCarro chama o metodo dirigir.

HyndaiCarro
*/ 