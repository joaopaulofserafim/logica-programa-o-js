document.querySelector('#btV').addEventListener('click', function () {

    const clientess = document.querySelector('#clientess').value;
    let atual = document.querySelector('#valor').value;
    atual = parseFloat(atual);
    const desconto = valorFinal(clientess, atual);
    document.querySelector('#valorFinal').innerHTML = desconto;
});


function valorFinal(clientess, atual) {

    let valorFinal = parseFloat(atual);
    if (isNaN(valorFinal) || valorFinal <= 0) {
      window.alert('Insira um valor válido e maior que 0')
    } if (clientess === 'VIP') {
        valorFinal -= (atual * 0.05);
    } else if (clientess === 'Funcionario') {
        valorFinal -= (atual * 0.01);
    }
    return `<strong>Total R$: ${valorFinal}</strong>`;
    

};


document.querySelector('#btClean').addEventListener('click', function () {
    document.querySelector('#valorFinal').innerHTML = " ";
})    





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
