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


function TipoTriangulo(ladoA, LadoB, LadoC) {

let resultado;
let erro;

// if (isNaN(resultado) || resultado <= 0) {
//     window.alert ('Insira um valor válido e maior que 0')

 if (ladoA === LadoB && LadoB === LadoC) {
    return "Equilátero";
} else if (ladoA === LadoB || ladoA === LadoC || LadoB === LadoC) {
    return "Isósceles";
} else if (ladoA !== LadoB && ladoA !== LadoC && LadoB !== LadoC) {
    return "Escaleno";
} else {
    return erro = "Essas medidas não são validas";
}
}


