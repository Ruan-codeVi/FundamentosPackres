/* FILA Circular
*/ 
function Fila(){
    let itens =[]
    
    this.addItemFila = function(elemento){
        //adiciona um novo item
        itens.push(elemento)
    }

    this.delItemFila = function(){
        //  remove um item e retorna itens
       return itens.shift()
    }

    this.frenteFila = function(){
        //retorna o primeiro item da fila
        return itens[0]
    
    }

    this.estVaizoFila= function(){
        //verifica sem está vazia
        return itens.length === 0
    }

    this.tamanhoFila = function(){
        // retorna tamanho
        return itens.length
    }

    this.printFila = function(){
        //imprimi fila
       return  console.log(itens.toString())
    }
}

function jogoBatataQuente(listaNome, num){ 
    let fila = new Fila() 
    for(let i = 0; i < listaNome.length; i++){ 
        fila.addItemFila(listaNome[i]) 
        /* fila chama o método addItemFila que puxa elemento
        um de cada vez do array listaNome utilizando contador i
        */
            fila.printFila()
        //fila['joao', 'josé', 'Maria']
    }

    let eliminado = ''
    while(fila.tamanhoFila() > 1){
        for(let i = 0; i < num; i++){
            fila.addItemFila(fila.delItemFila())
        }   
        eliminado = fila.delItemFila()
        console.log(`${eliminado} está eliminado(a) do jogo da batata quente`)
    }
    
    return fila.delItemFila()
}
let nomes = ['João','José','Maria']

let ganhador = jogoBatataQuente(nomes, 5)
//console.log(fila.tamanhoFila())
console.log(`Vencedor(a) ${ganhador}`)

/* Debug
1º - Na função jogoBatataQuente passamos dois argumentos nome, num
['João','José','Maria'], 7

1.2 - Esses argumentos são copiados para os paramêtros da função jogoBatataQuente

1.3 - Variavel fila rebece uma instãncia de Fila

1.4 - laço for compara se contador é menor que o tamanho do array nomes que é 3

*/ 







