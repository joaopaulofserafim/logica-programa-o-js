document.querySelector('#btVer').addEventListener('click', function () {

   let timeA = parseInt(document.querySelector('#TimeA').value);
   let timeB = parseInt(document.querySelector('#TimeB').value);

   let resultado = verificarResultado(timeA, timeB)
   document.querySelector('#resultado').innerHTML = resultado


   function verificarResultado(timeA, timeB){
      
      if (timeA < 0 || timeB < 0) {
        window.alert('Adicione um valor maior ou igual a Zero') 
      }else if (timeA === timeB) {
        return " <strong> O jogo terminou em empate! </strong>"
      } else if (timeA > timeB) {
         return  " <strong> Time A venceu Time B </strong>"
      } else if (timeA < timeB) {
         return   " <strong> Time B venceu Time A </strong> "
      }
}

});

document.querySelector('#clean').addEventListener('click', function () {
   document.getElementById('resultado').innerHTML = " ";
});
