/*
Selecionando todos os elementos com o seletor .teclas utilizando o querySelectorAll() 
E armazenando esta lista dos seletores os dentro de  uma referência.
*/
const listaDeTeclas = document.querySelectorAll('.tecla');


// Desta forma temos uma função que irá executar o bloco de código abaixo.
function tocarSomPom(){

    // Após a função ser chamada irá executar: play de uma tag de multimidia da pagina html.
    document.querySelector('#som_tecla_pom').play();

}