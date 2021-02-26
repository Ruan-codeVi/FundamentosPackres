/* Objetos literais: são objetos criado a mão que resolve em pequena escala
   Construtores: são o melhor caminho para criar criação de muitos objetos em grande escala
   em termos de código um construtor é bastante similiar a uma função que retorna um objeto: você define uma vez e o invoca
   todas as vezes que quiser criar um objeto novo.
*/ 

// Exemplo como criar um Construtor
//função constructor parece com função comum.
// Demos a função constructor um nome começando com letra maiúscula é uma convenção
 function Cachorro(nome, raca, peso){
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;

 }

 //  Como usar um constutor

 let sansao = new Cachorro('sansão','Pit bull', 50);
 let neguinha = new Cachorro('neguinha','vira-lata',14);
 let duque = new Cachorro('duque','vira-lata',20);
 let lupe = new Cachorro('lupe','vira-lata',21);
 let floquinhos = new Cachorro('floquinhos','chihuahua',10);
 let cachorros = [sansao,neguinha,duque,lupe,floquinhos];

 for(let cont = 0; cont < cachorros.length; cont++){
    let tamanho = 'pequeno';

     if(cachorros[cont].peso > 10){
         tamanho = 'grande';
     }
     console.log(`Cachorro: ${cachorros[cont].nome} / Porte: ${tamanho} / Raça: ${cachorros[cont].raca}`)
 };

//  Como os Construtores funcionam nos bastidores

// vamos começar pela instrução que foi usada pra criar o primeiro cachorro

/* let sansao = new Cachorro('sansão','Pit bull', 50);
  
    1º A PRIMEIRA COISA QUE NEW FAZ É CRIAR UM OBJETO NOVO E VAZIO.
    
    2º EM SEGUIDA, NEW DEFINE THIS PARA APONTAR PARA NOVO OBJETO, QUE É O MESMO
    NOME DA FUNÇÃO CONSTRUCTOR CRIADA ANTES.
    
    3º COM THIS DEFINIDO, CHAMAMOS A FUNÇÃO CONSTRUCTOR CACHORRO PASSANDO OS ARGUMENTOS 'SANSÃO', 'PIT BULL', 50
    
    4º EM SEGUIDA O CORPO DA FUNÇÃO {} CONSTRUCTOR É INVOCADA. COMO NA MAIORIA DOS CONSTRUTORES,
    CACHORRO ATRIBUI ESSE VALORES AS PROPRIEDADES DO OBJETO THIS


*/