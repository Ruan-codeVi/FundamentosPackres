// Como criar um Array

// Exemplo se quisesse criar sabores de sorvete

var sabores = ['baunilha','chocolate com café','napolitano','chocolate','flocos'];

// Para acessar o valor do array é só colocar nome da variavle onde foi guardado esse Array
console.log(sabores);
console.log(sabores[1]);


// para mundar o valor guardado no array basta usar variavel[indice]
sabores[1] = 'Manga'; // atribuindo o sabor manga no Array sabores que tinha como sabor chocolate com café
console.log(sabores[1]); 

// Para saber o tamanho de um Array basta utilizar a propriedade length

var tamanhoSabores = sabores.length
console.log(tamanhoSabores);

//Diferença entre indice(posição) e comprimento(tamanho)
// indices de Array sempre inicia na primeira posição com valor 0 assim em diante
//Comprimento vai ser o tamanho desse array, quantidade de valor contido


