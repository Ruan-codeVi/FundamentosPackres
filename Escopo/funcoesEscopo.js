// Funções de escopo Global e Funções aninhadas
/* Tudo que é definida no nível mais alto do código tem escopo global.
Então Fly e quack são ambas variávies globais
*/
let imigracao = true;
// Expressão de função
let fly = function(num){
    let sound = 'Fliying';
// função aninhada dentro de fly
    function wingFlapper(){
        console.log(sound)
    }
    for(let cont = 0; cont < num;cont++){
        // Invocando função
        wingFlapper();
    }
};
function quack(num){
    let sound = 'Quack';
    let quacker = function(){
        console.log(sound);
    }
    for(let cont = 0; cont < num; cont++){
        quacker();
    }
};
if(imigracao){
quack(4);
fly(3);
}