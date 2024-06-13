document.querySelector('#btCalcu').addEventListener('click', function () {
   let resultado = calcularIndicador();
   document.querySelector('#valorFinal').innerHTML = resultado;
 });

 
 function calcularIndicador() {
   const habitantes = parseFloat(document.querySelector('#habitantes').value);
   const obitos = parseFloat(document.querySelector('#obitos').value);
   const nascimentos = parseFloat(document.querySelector('#nascimentos').value);
   const tipoIndicador = document.querySelector('#opcoes').value;
   
   
   
   if (tipoIndicador === "N") {
     resultado = (nascimentos * 1000) / habitantes;
     return "Taxa de Natalidade: " + resultado.toFixed(2);
    } else if (tipoIndicador === "M") {
      resultado = (obitos * 1000) / habitantes;
      return "Taxa de Mortalidade: " + resultado.toFixed(2);
    }
    
    return resultado;
  }
  document.querySelector('#Clean').addEventListener('click', function () {
    document.querySelector('#valorFinal').innerHTML = " ";
  });

  document.querySelector('#btTrocaTema').addEventListener('click', function() {
   
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
        
    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
  });
});