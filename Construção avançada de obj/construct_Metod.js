// Pode-se colocar métodos em um construtor tambem
//construtor        parêmetros
function Cachorro(nome, raca, peso){
    //props
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
                //expressão de função
    this.latido = function(){
        if(this.peso > 15){
            console.log(`${this.nome} WOF WOF, Porte: Grande`)
        }else{
            console.log(`${this.nome} auau, Porte: Pequeno`)
        }
    }
 };
 // Como usar um constutor
//  Criando novos objetos
 let sansao = new Cachorro('sansão','Pit bull', 40);
 let neguinha = new Cachorro('neguinha','vira-lata',14);
 let duque = new Cachorro('duque','vira-lata',20);
 let lupe = new Cachorro('lupe','vira-lata',21);
 let floquinhos = new Cachorro('floquinhos','chihuahua',10);
 //criando um Array com esse objetos
 let cachorros = [sansao,neguinha,duque,lupe,floquinhos];
//iterando o array cachorros
 for(let cont = 0; cont < cachorros.length;cont++){
     cachorros[cont].latido();
 };
