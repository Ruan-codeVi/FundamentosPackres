/* var: Pode ser acessada de qualquer lugar dentro
ou fora do escopo que foi criada


let: Só pode ser acessado dentro do escopo que foi criado, ele se resume ao seu escopo.
Porque usar let ? por que protege de variaveis vazarem e ser chamadas em locais que não é
desejado ou serem subescritas.

Const: Como o nome ja diz é uma constante e seu primeiro valor armazenado não pode ser
mudado.
*/ 
// var
var nome = 'juan'
if(nome == 'juan'){
    var idade = 28
    console.log(`${nome} Vitor tem ${idade}`)
}
console.log(idade)

// Let
let altura = 1.80

if(altura === 1.80){
    let sobrenome = 'vitor'
     console.log(sobrenome)
}
console.log(sobrenome)/*
O conselo.log acima da erro, a variavel sobrenome foi criado como let
 por isso vai dar erro dizendo 'sobrenome is not defined'.
sobrenome só poderia ser chamando dentro do escopo que foi criado ou seja
somento dentro do if
*/ 


// Const

const ceuCor = 'azul'
console.log(ceuCor);
//Atruido outro valor para ceuCor
ceuCor = 'laranja'
console.log(ceuCor); // dar erro dizendo que é uma constante e seu valor não pode ser mudado