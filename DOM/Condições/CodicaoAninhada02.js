
// Tudo esse codigo está sendo rodado somente no NODE
// Comando Console.log só roda interno no Node, não serve pra rodar no navegador
/*Como pegar hora do sistema, sempre vai ser var nomequalquer recebe = new Date()
Depois cria-se variaveis pra ano,mes, horas, minutos etc, Que vão receber
a var que recebeu o new Date() */ 


var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
console.log(`Agora são exatamente ${hora} Horas ${minutos} Minutos`);
if(hora<12){
    console.log(`Bom dia, são ${hora} Horas ${minutos} Minutos`)
}else if(hora <=18){ // SENAO SE hora for menor ou igual a 6 
    console.log(`Boa tarde, são ${hora} Horas ${minutos} Minutos`);
}else{ // SENAO, Ele ja entende que 6 pra cima é noite
    console.log(`Boa Noite, são ${hora} horas ${minutos} Minutos`);
}