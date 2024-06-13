document.querySelector("#Convertor").addEventListener("click", function () {
   const valorTemperatura = parseFloat(document.querySelector("#valorTemperatura").value);
   const escalaAtual = document.querySelector("#escalaAtual").value;
   const escalaConvertida = document.querySelector("#escalaConvertida").value;
   const resultado = converteTemperatura(valorTemperatura, escalaAtual, escalaConvertida);
   document.querySelector("#resultadoTEM").innerHTML = resultado;
});

document.querySelector("#Limpar").addEventListener("click", function () {
   document.querySelector("#resultadoTEM").innerHTML = "";
});

function converteTemperatura(valorTemperatura, escalaAtual, escalaConvertida) {
   let temperaturaConvertida = 0;

   if (!isNaN(valorTemperatura)) {
      if (escalaAtual === "C" && escalaConvertida === "F") {
         temperaturaConvertida = (valorTemperatura * 9 / 5) + 32;
      } else if (escalaAtual === "C" && escalaConvertida === "K") {
         temperaturaConvertida = valorTemperatura + 273;
      } else if (escalaAtual === "F" && escalaConvertida === "C") {
         temperaturaConvertida = (valorTemperatura - 32) * 5 / 9;
      } else if (escalaAtual === "F" && escalaConvertida === "K") {
         temperaturaConvertida = (valorTemperatura + 459.67) * 5 / 9;
      } else if (escalaAtual === "K" && escalaConvertida === "C") {
         temperaturaConvertida = valorTemperatura - 273.15;
      } else if (escalaAtual === "K" && escalaConvertida === "F") {
         temperaturaConvertida = (valorTemperatura * 9 / 5) - 459.67;
      } else {
         return "Escalas de temperatura inválidas.";
      }
   } else {
      return "Valor de temperatura inválido.";
   }

   return `<b>A temperatura é ${temperaturaConvertida.toFixed(2)} ${escalaConvertida}</b>`;
}




