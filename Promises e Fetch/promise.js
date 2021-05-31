// Callback
function oneDate(callback){
    setTimeout(()=>{
        callback('Primeira data: 31 maio 2021')
    },1000)
}

function twoDate(callback){
    setTimeout(()=>{
        callback('Segunda data: 01 junho 2021')
    },1000)
}

// Função que vai executar as duas funções try a cada método para tratar
// Callback Hell
function excTudo(){
    try{ // tag pra tratamento de erro
  oneDate(function(date){
      var proces = date.split(' ')
        try {
      twoDate(function(date1){
        var processarDate1 = date1.split(' ')
         try{
        setTimeout(function(){
            console.log('\n',proces ,processarDate1)
        },1000);
     }catch(erro){
        // Handler error
     }
    });
    }catch(erro){
        // Handler error
    }
  });  
 } catch(erro){
    // Handler error
 }
}

 excTudo()

// Promisse

/* Promisse- tem trẽs estagios
Panding- Está pendente
Fullfiler - Terminou de execuatar
Reject - Caso aconteça algum erro
*/

// Transformei as antigas funções de callback em funções promisses
const oneDatePromisse =()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Primeira data: 31 maio 2021')
    },1000)
});

const  twoDatePromisse = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Segunda data: 01 junho 2021')
    },1000)
});
// Vai apresentar o status Pending, porque não é forma correta de chamar a promisse
console.log(oneDatePromisse)
// 1 passo: Colocar a promisse ponto then, 
// 2 passo: Passar uma função de callback
//3 passo: Passar o parametro na função callback que vai receber esse dados que vem da promisse
// oneDatePromisse.then(dados => console.log('Dados recebidos da promisse,\n',dados))

//encadeando promisses
oneDatePromisse().then((dados)=> {
    console.log('\nPrimeiro, then da promisse ondeDate,',dados);
    return twoDatePromisse()
}).then((dados2) => console.log('\nSegundo, then da segunda promisse que é invocado na primeira promisse,',dados2))
.catch(error => console.log('Ops!',error))
// ponto catch é o tratamento de erro para caso algumas das promisses não funcione


// Execução de promisses em paralelo(juntas)
Promise.all([oneDatePromisse(), twoDatePromisse()]).then(dados=>
    console.log('\nExecução de promisses em paralelo',dados))
    .catch(erro => console.log('Ops!',erro))