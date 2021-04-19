function validar(){
    var numero = document.getElementById("numero").value;
    var nome = document.getElementById("nome").value;
    if(numero.length > 2){
        alert('Digite dois número ou menos');
        document.formulario.numero.focus(); // dando foco no campo errado
        return false
    }else if (nome.length < 3 || nome.length > 50) {
        alert('Nome digitado é curto ou longe de mais. Limite 3 a 50 caracteres')
        return false
    } else {
        alert('Formulario enviado com sucesso')
        return true
    }
    
}