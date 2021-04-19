/* var: Pode ser acessada de qualquer lugar dentro
ou fora do escopo que foi criada


let: Só pode ser acessado dentro do escopo que foi criado
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
O conselo log acima da erro, a variavel sobrenome foi criado como let
 por isso vai dar erro dizendo 'sobrenome is not defined'.
sobrenome só poderia ser chamando dentro do escopo que foi criado ou seja
somento dentro do if
*/ 