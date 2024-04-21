document.querySelector('#btVeri').addEventListener('click', function () {
    const LadoA = parseFloat(document.querySelector('#LadoA').value);
    const LadoB = parseFloat(document.querySelector('#LadoB').value);
    const LadoC = parseFloat(document.querySelector('#LadoC').value);
    const resultado = TipoTriangulo(LadoA, LadoB, LadoC);
    document.querySelector('#resultado').innerHTML = resultado;
});
document.querySelector('#clean').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = " ";
});

let resultado;

function TipoTriangulo(ladoA, LadoB, LadoC) {

let erro;

if (ladoA === LadoB && LadoB === LadoC) {
    return "Equilátero";
} else if (ladoA === LadoB || ladoA === LadoC || LadoB === LadoC) {
    return "Isósceles";
} else if (ladoA != LadoB && ladoA != LadoC && LadoB && LadoC) {
    return "Escaleno";
} else {
    return erro = "Essas medidas não são validas";
}
}


