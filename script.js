const botaoMostraPalavras= document.querySwlwctor('#botao-palavrachave');

botaoMostraPalavras.addEventlistener('click',mostraPalavrasChave);

function mostraPalavrasChave{
   const texto = document.querySelector('#entrada-d-texto').value;
   const campoResultado = document.querySelector("#resultado-palarachave");

   campoResultado.textContent= texto;
}