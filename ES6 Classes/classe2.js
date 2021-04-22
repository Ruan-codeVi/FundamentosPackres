class Pessoas{
    constructor(){
        this.nome= '',
        this.sobreNome = ''
    }
    mostrarPrimNome(primNome){
        this.nome = primNome
       
        console.log(`Meu Primeiro nome é: ${this.nome}`)
    }
    mostrarSegNome(segundNome){
        this.sobreNome = segundNome
        console.log(`Meu sobre nome é: ${this.sobreNome}`)
    }
    mostrarNomeComp(){
        let nomeCompleto = `${this.nome} ${this.sobreNome}`;
        console.log(nomeCompleto)
    }
}
let pessoa1 = new Pessoas();
pessoa1.mostrarPrimNome('Juan')
pessoa1.mostrarSegNome('Vitor')
pessoa1.mostrarNomeComp();