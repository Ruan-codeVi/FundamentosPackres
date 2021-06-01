/* Tradicionalmente era usado para fazer requisições seja para consumir XML, JSON,
era utilizado uma API do browser chamada de XML http request, porém traz problemas porque
essa API trabalha sobre callback tomarndo muito propcio o callback hell*/

/* Pensando nisso foi criada uma API chamada fetch, que faz a mesma coisa do XML http request, 
fazer requisições com difenã que essa nova API trabalha com promises */ 
fetch('http://localhost:8080/data.json')
.then(responseStream => responseStream.json())
.then(data =>{
    console.log(data)
}).catch(err =>{
    console.log('Error', err)
})