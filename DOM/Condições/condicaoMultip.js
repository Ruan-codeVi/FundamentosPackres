// Tudo esse codigo está sendo rodado somente no NODE
// Condições Multiplas switch case
var agora = new Date();
var diaSem = agora.getDay();
//var mes = agora.getUTCMonth();
/* Para o JavaScript o getDay() ele mostra o dias da semana em 
números nessa ordem: 
0 Domingo
1 Segunda
2 Terça
3 Quarta
4 Quinta
5 Sexta
6 Sábado
*/
//console.log(mes)
switch(diaSem){
case 0:
    console.log('Hoje é Domingo')
    break
case 1:
    console.log('Hoje é Segunda-Feira')
    break
case 2:
    console.log('Hoje é Terça-Feira')
    break
case 3:
    console.log('Hoje é Quarta-Feira')
    break
case 4:
    console.log('Hoje é Quinta-Feira')
    break
case 5:
    console.log('Hoje é Sexta-Feira')
    break
    default:
        console.log('Hoje é Sábado')
        break

}