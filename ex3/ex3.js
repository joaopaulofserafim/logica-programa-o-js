document.querySelector('#btVer').addEventListener('click', function () {

    let timeA = parseInt(document.querySelector('#TimeA').value);
    let timeB = parseInt(document.querySelector('#TimeB').value);

    let resultado;


    if (timeA === timeB) {
       resultado = ' <strong> O jogo terminou em empate! </strong>'
    } else if (timeA > timeB) {
       resultado = ' <strong> Time A venceu Time B </strong>'
    } else {
       resultado = ' <strong> Time B venceu Time A </strong>'
    }

    document.querySelector('#resultado').innerHTML = resultado;

});

document.querySelector('#clean').addEventListener('click', function () {
    document.getElementById('resultado').innerHTML = " ";
});
