document.querySelector('#btLimp').addEventListener('click', function () {
    document.querySelector('#valorFinalEx5').innerHTML = "";
});

document.querySelector('#btCalc').addEventListener('click', function () {
    const litros = parseFloat(document.querySelector('#litros').value);
    const tipoCombustivel = document.querySelector('#tpCombustivel').value;
    const precoAlcool = 2.89;
    const precoGasolina = 5.19;
    let valorFinal;

    if (tipoCombustivel === 'Álcool') {
        if (litros <= 20) {
            valorFinal = litros * (precoAlcool - (precoAlcool * 0.03));
        } else {
            valorFinal = litros * (precoAlcool - (precoAlcool * 0.05));
        }
    } else if (tipoCombustivel === 'Gasolina') {
        if (litros <= 20) {
            valorFinal = litros * (precoGasolina - (precoGasolina * 0.04));
        } else {
            valorFinal = litros * (precoGasolina - (precoGasolina * 0.06));
        }
    } else {
        window.alert('Insira um tipo de combustível válido');
        return; 
    }

    if (isNaN(valorFinal) || valorFinal <= 0) {
        window.alert('Insira um valor válido e maior que 0');
        return; 
    }

    document.querySelector('#valorFinalEx5').innerHTML = '<strong> Total a pagar: R$ </strong>' + valorFinal.toFixed(2);
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
 