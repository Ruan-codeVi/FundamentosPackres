/* Vetor ou Array cadeia de itens acessados por indice
Matriz cadeia de itens, acessados por linha e coluna
*/ 

//Exemplo vetor conhecido com Array

//Acessar via posição ou iterando por repetição
let frutas = ['Maça','Uva','Pera','Jaca']
for(let i = 0; i< frutas.length;i++){
    console.log(frutas[i])
};

// COMO DECLARAR MATRIZ

                        //colun
let numerosMartriz =   [[1,2,3],
                        [4,5,6], //linha
                        [7,8,9]];

/* Outra Maneira, seria primeiro inicializar 
a variável como um array de 3 elementos:*/

let matrizNova = new Array(3);

// Agora vamos em cada elemento e inicializamos com vetores:

matrizNova[0] = ['Um','Dois','Tres'];
matrizNova[1] = ['Quatro','Cinco','Seis'];
matrizNova[2] = ['Sete','Oito','Nove'];

// Como acessar uma matriz
                //colunas = c.0    c.1     c.3    // linhas
let ObjMartriz =   [    ['Garfo','Mouse','cadeira'],// l.0
                        ['Garrafa','Teclado','Fone'],// l.1 
                        ['Lampâda','ôculos','Chaves']];//l.2

/* Cada um desses elementos é uma variável, como outra qualquer.
Então, se quiser que o elemento da 'LINHA 2' e 
'COLUNA 3' receba o valor 10, só fazer:*/

ObjMartriz[1][3] = 10;
//Acessando linha e coluna da Matriz obj
console.log(ObjMartriz[1][3]);

// Como exibir uma Matriz

/* A maneira mais fácil e recomendada de exibir uma matriz, é usando dois laços for, aninhados.
ºNo primeiro laço, uma variável percorre as linhas.
ºNo segundo laço, o interno, outra variável percorre o número correspondente de cada colunas.
*/ 

let carrosMatriz = [['Fusca','Brasilia','Monza'],
                    ['Uno','Gol','Golf','Jetta'],
                    ['New Beattle','Saveiro','Corsa']];

for(let linha = 0; linha < carrosMatriz.length;linha++){
    
for(let coluna = 0; coluna < carrosMatriz.length;coluna++){
        console.log(carrosMatriz[linha][coluna])
    }
};


/* Lembrando que podemos também criar e declarar uma matriz com elementos
 vazio e de qualquer tamanho de linhas ou colunas:
*/ 
 let matrizVazia = [[]]

// Pode-se adiconar itens ao logo do código atraves do método Push por exemplo