document.querySelector('#btVer').addEventListener('click', function () {

    let timeA = parseInt(document.querySelector('#TimeA').value);
    let timeB = parseInt(document.querySelector('#TimeB').value);

    let resultado;


    if (timeA === timeB) {
       resultado = 'O jogo terminou em empate!'
    } else if (timeA > timeB) {
       resultado = 'Time A venceu Time B'
    } else {
       resultado = 'Time B venceu Time A'
    }

    document.querySelector('#resultado').innerHTML = resultado;

});

document.querySelector('#clean').addEventListener('click', function () {
    document.getElementById('resultado').innerHTML = " ";
});
