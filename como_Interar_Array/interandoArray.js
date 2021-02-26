// Interar um Array é a mesma coisa que percorrer por toda extensão um Array

// Interar um Array é percorrer um array, permitindo a manipulação do dados do Array

// Exemplos

let notas = [ 60,50,45,32,45,60,69,70,22,33,48,66]
let saida;
//Loop For
for(let contador = 0 ; contador < notas.length;contador++){
    saida = `notas posição # ${contador} Pontução ${notas[contador]}`
    console.log(saida)
}

let nomes = ['juan', 'maria','janaina','iolanda','bruna','joão']
let listaNomes;
let cont = 0;
// Loop while
while(cont < nomes.length){
    listaNomes = `Posição #${cont} ${nomes[cont]} Tamanho do Array ${nomes.length}`
    console.log(listaNomes);
    cont++
    
}