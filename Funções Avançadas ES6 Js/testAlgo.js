/* Criando uma função que multiplica todos os numeros do array 
e retorna a multi total sem usar métodos de array pra auxiliar
*/
function multi (){
    let cont = 1
    const num = [2,2,4,2]
    
    for(let i = 0; i < num.length; i ++){
        cont = cont * num[i]
    }
    return cont
    }
    console.log(multi())