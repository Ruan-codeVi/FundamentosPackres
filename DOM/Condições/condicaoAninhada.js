// Tudo esse codigo está sendo rodado somente no NODE
var idade = 17;
if(idade<16){
    console.log('Não vota');
} else if(idade<18|| idade >65){
    console.log('voto Opcional');
} else{
    console.log('Voto obrigatório');
}