// Criar uma classe lista de tarefas

class ListaTaferas{
    constructor(){
        this.tarefas = [];
    }
    // metodo que vai adicionar tarefa em tarefas array
    addTarefa(){
        this.tarefas.push('Nova tarefa')
        console.log(this.tarefas)
    }
}
// Instanciando
const minhaTarefa = new ListaTaferas();

function chamarMinhaTarefa (){
    minhaTarefa.addTarefa()
}
// invocando função
chamarMinhaTarefa();
 
//  TRABALHANDO COM HERANÇA DE CLASSES  

// Criando nova classe
class List{
    constructor(){
        // crinado um variavel
        this.data = [];
    }
    // Criando um método
    adiconar(...dateParet){ // colocando um parametro para receber argumentos
        this.data.push(dateParet)
        console.log(this.data)
    }
}
class ListaTaferas2 extends List{ // extends: é usado para criar a conexão para herança de classes
/* Esta dizendo para extender tudo
 que tem na classe list, para a classe listaTaferas2
 assim listaTaferas2 pode usar metodos
 de list também.   
*/ 
    constructor(){
        super(); // Para poder herda tudo que tem em na classe list

        this.pessoa = [] 
    }
    // método
    mostraPessoa(...dados){
        this.pessoa.push(dados)
        console.log(this.pessoa)
    }
}
// Instãnciando
const herenca = new ListaTaferas2()
// chamando os métodos na instãncia herença
herenca.adiconar('Javascript','Sujeito Programador')
herenca.mostraPessoa('Juan', 28, 'Futuro Programador','Curso Fabrica de Apps');