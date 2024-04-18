document.querySelector('#btVer').addEventListener('click', function () {

    let timeA = parseInt(document.querySelector('#TimeA').value);
    let timeB = parseInt(document.querySelector('#TimeB').value);

    if (timeA === timeB) {
        document.querySelector('#resultado').innerHTML = 'O jogo terminou em empate!'
    } else if (timeA > timeB) {
        document.querySelector('#resultado').innerHTML = 'Time A venceu Time b'
    } else {
        document.querySelector('#resultado').innerHTML = 'Time B venceu Time A'
    }
});

document.querySelector('#clean').addEventListener('click', function () {
    document.getElementById('resultado').innerHTML = " ";
});
