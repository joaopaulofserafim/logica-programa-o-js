document.querySelector("#btCalcIMC").addEventListener("click", function () {
   const peso = document.querySelector("#peso").value;
   const altura = document.querySelector("#altura").value;
   const imc = calculoIMC(peso, altura);
   document.querySelector("#resultadoIMC").innerHTML = imc;
});
document.querySelector("#btLimpar").addEventListener("click", function () {
   document.querySelector("#resultadoIMC").innerHTML = "";
});


function calculoIMC(peso, altura) {

   const imc = peso / (altura ** 2)
   let mensagem;
   if (imc <= 18.5) {
      mensagem = 'Abaixo do Peso';

   } else if (imc <= 24.9) {
      mensagem = 'Peso normal';

   } else if (imc <= 29.9) {
      mensagem = 'Sobrepeso';

   } else if (imc <= 34.9) {
      mensagem = 'Obesidade grau I';

   } else if (imc <= 39.9) {
      mensagem = 'Obesidade grau II';
   } else {
      mensagem = 'Obesidade grau III';
   }
   return mensagem;
};


