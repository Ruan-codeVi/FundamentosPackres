// Construtor  parâmetros
function cafe(tipo, tamanhoCafe){
//proprs
this.tipo = tipo;
this.tamanhoCafe = tamanhoCafe;
// método               exprs de funç
this.pegarTamanhoCafe = function(){
        if(this.tamanhoCafe === 8){
            return 'pequeno';
        }else if(this.tamanhoCafe === 12){
            return 'médio';
        }else if(this.tamanhoCafe ===16){
            return 'grande';
        }
    };
    // método
    this.menssagem = function(){
        return `O senhor(a) pediu um café ${this.pegarTamanhoCafe()} do tipo: ${this.tipo}`
    };
};
let houseBlend = new cafe('House Blend',12);
console.log(houseBlend.menssagem());
let darkRoast = new cafe('Dark Roast', 16);
console.log(darkRoast.menssagem());