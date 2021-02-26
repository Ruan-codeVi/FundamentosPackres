//variavel Global/tamber pode chamar de variavel livre
let justAvar = "oh, don't you worry about it, I'm GLOBAL"

function whereAreYou(){
    // Variavel Local
    let justAvar = "Just an every day LOCAL";

    return justAvar;
}
let result = whereAreYou();
console.log(result);


// Com função aninhada
let jusVar = "oh, don't you worry about it, I'm GLOBAL"

function whereareYou(){
    let jusVar = "Just an every day LOCAL";

    function inner(){
        return jusVar;
    }
    return inner;
};
let innerFuncao = whereareYou();
let result1 = innerFuncao();
console.log(result1)
