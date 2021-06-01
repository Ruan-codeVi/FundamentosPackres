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

// Promise

/* Promise- tem trẽs estagios
Panding- Está pendente
Fullfiler - Terminou de execuatar
Reject - Caso aconteça algum erro
*/

// Transformei as antigas funções de callback em funções promises
const oneDatePromise = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Primeira data: 31 maio 2021')
    },1000)
});

const  twoDatePromise = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Segunda data: 01 junho 2021')
    },1000)
});
// Vai apresentar o status Pending, porque não é forma correta de chamar a promise
console.log(oneDatePromise)
// Como excutar uma Promise
//  * 1 passo: Colocar a promise +  ponto then, - promiseQulquer.then()
//  * 2 passo: Passar uma função de callback para o método then - promiseQulquer.then(()=>{}) ou promiseQulquer.then(function() {})
//  * 3 passo: Passar o parametro na função callback, que vai receber esse dados que vem da promise - promiseQulquer.then((dado)=>{})

oneDatePromise.then(dados => console.log('Dados recebidos da promise,\n',dados))




//Encadeando promises
oneDatePromise().then((dados)=> {
    console.log('\nPrimeiro, then da promise ondeDate,',dados);
    return twoDatePromise()
}).then((dados2) => console.log('\nSegundo, then da segunda promise que é invocado na primeira promise,',dados2))
.catch(error => console.log('Ops!',error))
// ponto .catch é o tratamento de erro para caso algumas das promisses não funcione


// EXECUÇÃO de promises EM PARALELO(juntas)
Promise.all([oneDatePromise(), twoDatePromise()]).then(dados=>
    console.log('\nExecução de promisses em paralelo',dados))
    .catch(erro => console.log('Ops!',erro))

// EXECUTAR A PRIMEIRA promise RESOLVIDA
Promise.race([oneDatePromise(), twoDatePromise()]).then(dados=>
    console.log('\n Race retorna a primeira promise resolvida,',dados))
    .catch(erro => console.log('Ops!',erro))