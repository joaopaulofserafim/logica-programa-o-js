document.querySelector('#btCalcu').addEventListener('click' , function calcularIndicador() {
    var habitantes = parseFloat(document.querySelector('#habitantes').value);
    var obitos = parseFloat(document.querySelector('#obitos').value);
    var nascimentos = parseFloat(document.querySelector('#nascimentos').value);
    var opção = document.querySelector('#opcoes').value;
    var resultado = 0

    if (opção === "N" ){
        resultado = (nascimentos * 1000) / habitantes;
        return "Taxa de Natalidade" + resultado.toFixed(2);
     } else if (opção === "M"){
        resultado = (obitos * 1000) / habitantes;
        return "Taxa de Mortalidade" + resultado.toFixed(2);
     };
});
function mostrarResultado(){
   var resultado = calcularIndicador()
   document.querySelector('#resultado').innerHTML = resultado
}