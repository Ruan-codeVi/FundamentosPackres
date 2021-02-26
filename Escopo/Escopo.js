// ESCOPO


let imigracao = true;
if(imigracao){
   pruPru(4);
   voar(3) 
/* a expressão de função voar da erro pq ela está sendo invocada
antes de ser definida pq ela precisa ser avaliada e só depois pode ser
chamada
*/ 
}

let voar = function(num){
    for(let cont = 0; cont < num; cont++){
        console.log('Voando');
    }
};
function pruPru(num){
    for(let cont = 0; cont < num;cont++){
        console.log('pruPru')
    }
}

