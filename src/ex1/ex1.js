document.querySelector('#btV').addEventListener('click', function () {
    const LadoA = parseFloat(document.querySelector('#LadoA').value);
    const LadoB = parseFloat(document.querySelector('#LadoB').value);
    const LadoC = parseFloat(document.querySelector('#LadoC').value);
    const resultado = TipoTriangulo(LadoA, LadoB, LadoC);
    document.querySelector('#valorFinal').innerHTML = resultado;
});
document.querySelector('#btClean').addEventListener('click', function () {
    document.querySelector('#valorFinal').innerHTML = " ";
});


function TipoTriangulo(ladoA, ladoB, ladoC) {
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        return 'Insira um valor válido e maior que 0 para todos os lados.';
    }
    if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
        return 'Essas medidas não formam um triângulo válido.';
    }
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}




    //   MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function() { /*'DOMContentLoaded'  UTILIZADO PARA GARANTIR QUE O HTML SEJA LIDO COMPLETAMENTO ANTES DE EXECUTAR O JS */
    const menuIcon = document.querySelector('#menu-icon');
    const menu = document.querySelector('#menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active'); /* "TOGGLE"  usada para alternar entre duas classes ou estados de um elemento HTML. */
    });
});
  // 


  document.querySelector('#btTrocaTema').addEventListener('click', function() {
   
    if (document.documentElement.getAttribute('data-tema') == 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
    } 
    else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});