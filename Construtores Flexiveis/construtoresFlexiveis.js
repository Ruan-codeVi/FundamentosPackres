/* Mesmo obejtos construidos por construtores podem
ter suas propriedades independentes.
    
    Usar construtores não nos impede de mudar um objeto em outra
coisa mais tarde, porque depois que um objeto foi criado por um construtor
ele pode ser alterado.
*/

// Construtor Cachorro
function Cachorro (nome, raca,peso){
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
}
// Este é nosso cachorro fido, criado pelo construtor Cachorro
let fido = new Cachorro('fido','mixed',30);

// Depois de criado podemos adicionar nova propriedade, atribuindo um valor em nosso obejto
fido.dono = 'Bob';

// Podemos deletar propriedades 
delete fido.peso;

// Podemos até adicionar novos métodos

fido.confiar = function(pessoa){
    return ( pessoa === 'Bob');
}
/* Perceba que estamos mudando apenas o objeto
fido. Se adicionamos um método a fido,
apenas fido tem esse método. Nenhum outro Cachorro tem esse método.
*/ 

let naoModer = fido.confiar('Bob')
/* Esse código funciona porque método confiar
está definida no objeto fido. Então naoModer é true
*/

// criando um novo objeto Cachorro
let spot = new Cachorro('Spot','Chihushua',10);

/* Esse código não funciona porque spot não tem um método confiar.
*/
naoModer = spot.confiar('Bob')