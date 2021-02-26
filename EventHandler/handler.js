//  O QUE É UM EVENTO HANDLER?
/* Escrevemos handlers para manopular eventos.
   Os handlers são tipicamente pequenos pedaços de código que sabem
   o que fazer quando um evento ocorre

   Como criar um event handler

   Exemplo
*/ 

// Criando uma função
// Um handler é apenas um função comum.
// Frequentemente tratada por event HANDLER ou CALLBACKS
function paginaCarregadaHandler(){
    window.alert('Carregou, Hello Word!')
}
// No caso do evento load que é carregamento total da pagina), atribuimos o nome do handler a propriedade onload do objeto window
window.onload = paginaCarregadaHandler;
