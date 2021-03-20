/* São coleções sequenciais de elementos, mas diferente
de array não possuem aquelas posições que começam em 0123.
Cada elemento é constituido de um nó, que armazena tanto o valor
como a referência ao próximo elemento(ponteiro)
*/ 
function ListaLigada(){
    let NoConstrutor = function(elemento){
        this.elemento = elemento
        this.proximo = null
    }

    let tamanho = 0 // 1
    let cabeca = null // não mais null recebe no: Joao,Maria

    this.acrescentarFinal = function(elemento){ //joao
        //Adicona um elemento ao final da lista
        let no = new NoConstrutor(elemento),// Joao, null   
        atual //undfined                   // Lucas, null
                                          //  Maria, null  
        if(cabeca == null){
            cabeca = no 
        }else{
            atual = cabeca

            while(atual.proximo){
                atual = atual.proximo
            }
            atual.proximo = no
        }
        
        tamanho++
    }

    this.enserirPosicao = function(posicao, elemento){
    //Adicona um elemento em uma posição especifíca da lista
    }

    this.removerPosicao = function(posicao){
    // Remove um elemento em uma posição especifíca da lista
    }
    
    this.removerElemento = function(elemento){
    // Remover o elemento passado como parametro
    }

    this.indexOf = function(elemento){
    // Retorna a posição do elemento
    }
    this.estaVazio = function(){
    // Retorna se está vazio ou não a instância
    }

    this.tamanhoInstan = function(){
    // Retorna o tamanho da instãncia
    }
    this.toString = function(){
        // Converte em string
        let atual = cabeca
        let string = ''

        while(atual){
            string += atual.elemento + ' '
            atual = atual.proximo
        }
        return string
    }

    this.print = function(){
    // Imprime no console
    console.log(this.toString())
    }
}

let listaLig = new ListaLigada()
listaLig.acrescentarFinal('João')
listaLig.acrescentarFinal('Lucas')
listaLig.acrescentarFinal('Maria')
listaLig.print()

/* Debug

Método acrescentarFinal
1. Recebe o argumento na função, função copia esse valor para dentro do parametro elemento
joao é copiado
2 a 'variavel no' recebe uma nova instancia do construtor NoConstrutor, com o parametro joao
o construtor tbm copia o valor joao para seu proprio parametro elemento.

3 construtor No possui dois propriedades this.elemento que recebe joao
e this.proximo que tem null

4 a 'var no' recebe a instancia de NoConstrutor com valores joao, null

5 'If condição' verifica a var cabeça é igual a null? sim
entao var cabeça recebe a var no
cabeca = joao, null

6 Agora var cabeça não é mais null,cabeça agora é uma instancia de NoConstrutor
tem 'joao e null' armazenado

7 Passa direto pelo laço while pq esta dentro da condição else

10 Mais uma vez o método acrescentarFinal é chamado com argumento lucas
a função acrescentarFinal recebe o argumento, função copia esse valor para dentro do parametro elemento
lucas é copiado.

11 a 'variavel no' recebe uma nova instancia do construtor NoConstrutor, com o parametro Lucas
o NoConstrutor tbm copia o valor Lucas para seu proprio parametro elemento.
construtor NoConstrutor possui duas propriedades this.elemento que recebe Lucas
e this.proximo que tem null.

12 a 'var no' recebe a instancia de NoConstrutor com valores Lucas null

13 'If condição' verifica a var cabeça é igual a null? Não
cabeça recebeu joao, null então vai para o else

14 a var atual que era undfined agora recebe cabeca
atual recebe joao, null

15 dentro de else tem o laço while que verifica atual(joao,null).proximo é verdadeiro?
não proximo é null, então sai o laço

16 atual.proximo recebe o valor contido na nova instancia passada para a var no: lucas, null
elemento = joao
                --> Joao.Lucas ou seja a propriedade próximo de João recebeu lucas
proximo = lucas 

17 tamanho aumenta em 1

18 Na proximas chamadas do metodo acrescentarFinal com argumento o processo


19 Mais uma vez o método acrescentarFinal é chamado com argumento lucas
a função acrescentarFinal recebe o argumento, função copia esse valor para dentro do parametro elemento
Maria é copiado. 

20 Os processo se repetem a variavel cabeça não se altera de valor por esta fora do escopo da função
a var atual reinicia undefined

21 Na condição if var cabeca não é igual a null é false, entao passa para else

22 atual que reiniciou em undfined agora recebe cabeca
atual = joao,lucas

23 indo para laço while verifica atual.proximo(joao,Lucas) é verdadeiro
sim            var atual
        this.elemento = joao
        this.proximo = Lucas

24 Atual joao,lucas recebe uma chamada da propriedade proximo do NoConstrutor
     var atual
        this.elemento = joao
        this.proximo = Lucas  + this.proximo = null = lucas,null

25 var atual tem joao,lucas,null o laço while repete e verifica atual.proximo é verdadeiro?
não pq this.proximo recebeu um null então sai do laço while

26 então a var atual joao,lucas,null  recebe na propriedade this.proximo  que tem null 
a instancia de no que é Maria

joao,lucas,null -> Joao, Lucas, Maria

27 var tamanho aumenta mais um


*/ 