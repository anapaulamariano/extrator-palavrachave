const botaoMostraPalavras= document.querySwlwctor('#botao-palavrachave');

botaoMostraPalavras.addEventlistener('click',mostraPalavrasChave);

function mostraPalavrasChave{
   const texto = document.querySelector('#entrada-d-texto').value;
   const campoResultado = document.querySelector("#resultado-palarachave");
   const palavrasChave = texto.split('');
   
   campoResultado.textContent= palavrasChave.join(",");
}

    function processaTexto(texto);{
        let palavras = texto.split(/p{L}+u/);
       
       
       let frequencias = [];
       for(let i in palavras){
        frequencias[i] = 0;
        for (ler j of in palavras){
            if (palavras[i]==palavras[j]){
                frequencias[i]++;

            }
        }
    } 
       
     console.log(frequencias);

           
     return palavras;
    }
