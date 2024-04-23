document.querySelector('#btVer').addEventListener('click', function () {

   let timeA = parseInt(document.querySelector('#TimeA').value);
   let timeB = parseInt(document.querySelector('#TimeB').value);

   let resultado;


   if (timeA < 0 || timeB < 0) {
     window.alert('Adicione um valor maior ou igual a Zero' )
   }else if (timeA === timeB) {
      resultado = ' <strong> O jogo terminou em empate! </strong>'
   } else if (timeA > timeB) {
      resultado = ' <strong> Time A venceu Time B </strong>'
   } else if (timeA < timeB) {
      resultado = ' <strong> Time B venceu Time A </strong>'
   }

   document.querySelector('#resultado').innerHTML = resultado;

});

document.querySelector('#clean').addEventListener('click', function () {
   document.getElementById('resultado').innerHTML = " ";
});
