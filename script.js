// Desta forma temos uma função que irá executar o bloco de código abaixo.
function tocarSom(idElementoAudio){

    // Após a função ser chamada irá executar: play de uma tag de multimidia da pagina html.
    document.querySelector(idElementoAudio).play();

}


/*
Selecionando todos os elementos com o seletor .teclas utilizando o querySelectorAll() 
E armazenando esta lista dos seletores os dentro de  uma referência.
*/
const listaDeTeclas = document.querySelectorAll('.tecla')


/*
Utilizando o mecanismo de percorrer lista podemos acessar todas
as teclas do nosso mid.
*/ 
let contador = 0;

while(contador < listaDeTeclas.length ){


    // reserando a lista de teclas em uma referência.
    const tecla = listaDeTeclas[contador]

    /*.clasList é uma função que vê toda as
     classes de um elemento específico do html.
     
     No caso estamos acessando o seletor classe
     para pegar outra classe, que no caso é um texto.*/ 
    const instrumento = tecla.classList[1];


    /*Desta forma manipulamos o HTML, da seguinte forma
    -> pegando a segunda classe da tecla acionada
    -> ao pegar esta classe armazenamos dentro de instrumento
    -> fazemos interpolção com instrumento ou seja, para 
        cada tecla que eu tocar irá modifcar esta referência.
    */
    const idAudio = `#som_${instrumento}`

    //aplicando conceito de Funções Anônimas:
    tecla.onclick = function(){
        tocarSom(idAudio)
    }
    

    contador ++;
}

