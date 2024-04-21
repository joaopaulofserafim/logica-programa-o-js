document.querySelector('#btCalcu').addEventListener('click', calcularIndicador)

function calcularIndicador () {

   const habitantes = parseFloat(document.querySelector('#habitantes').value);
   const obitos = parseFloat(document.querySelector('#obitos').value);
   const nascimentos = parseFloat(document.querySelector('#nascimentos').value);
   const opção = document.querySelector('#opcoes').value;
   let resultado = 0

   if (opção === "N") {
      resultado = (nascimentos * 1000) / habitantes;
      return "Taxa de Natalidade" + resultado.toFixed(2);
   } else if (opção === "M") {
      resultado = (obitos * 1000) / habitantes;
      return "Taxa de Mortalidade" + resultado.toFixed(2);
   }
   return resultado;

}

function mostrarResultado() {
   const resultado = calcularIndicador()
   document.querySelector('#resultado').innerHTML = resultado
}