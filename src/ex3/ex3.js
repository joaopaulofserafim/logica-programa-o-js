document.querySelector('#btVer').addEventListener('click', function () {

   let timeA = parseInt(document.querySelector('#TimeA').value);
   let timeB = parseInt(document.querySelector('#TimeB').value);

   
   
   let resultado = verificarResultado(timeA, timeB)
   document.querySelector('#valorFinal').innerHTML = resultado
   
   
   function verificarResultado(timeA, timeB){
      
      if (isNaN(timeA)|| isNaN(timeB)){
        return 'Por favor, insira válidos para os placares'
      }
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
   document.querySelector('#valorFinal').innerHTML = " ";
});


document.addEventListener('DOMContentLoaded', function() {
   const menuIcon = document.getElementById('menu-icon');
   const menu = document.getElementById('menu');

   menuIcon.addEventListener('click', function() {
       menu.classList.toggle('active');
   });
});

document.querySelector('#btTrocaTema').addEventListener('click', function() {
   
   if (document.documentElement.getAttribute('data-tema') === 'light') {
       document.documentElement.setAttribute('data-tema', 'dark');
   } 
   else {
       document.documentElement.setAttribute('data-tema', 'light');
   }
});
