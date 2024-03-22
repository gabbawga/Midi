//Selecionando elemento do html para o javascript e estamos atribuindo ao atributo do elemento nossa função tocaSomPom
document.querySelector('.tecla_pom').onclick = tocaSomPom


// Desta forma temos uma função que irá executar o bloco de código abaixo.
function tocaSomPom(){

    // Após a função ser chamada irá executar: play de uma tag de multimidia da pagina html.
    document.querySelector('#som_tecla_pom').play();

}

