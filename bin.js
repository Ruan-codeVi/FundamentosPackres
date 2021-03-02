// Criando um conversor de número decinal para binário

function decimParaBin (decimNum){
    let pilhaResto = [],
    resto,
    binárioString = ''


    while(decimNum > 0){
        resto = Math.floor(decimNum % 2)

        pilhaResto.push(resto)
        decimNum = Math.floor(decimNum /2)
    }
    while(pilhaResto.length > 0){
        binárioString += pilhaResto.pop().toString()
    }

    return binárioString
}

console.log(decimParaBin(25))