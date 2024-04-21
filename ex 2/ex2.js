document.querySelector('#btV').addEventListener('click', function () {

    const clientess = document.querySelector('#clientess').value;
    let atual = document.querySelector('#valor').value;
    atual = parseFloat(atual);
    const desconto = valorFinal(clientess, atual);
    document.querySelector('#valorFinal').innerHTML = desconto;
});


function valorFinal(clientess, atual) {
    
    let valorFinal = atual;
    if (clientess === 'VIP') {
        valorFinal -= (atual * 0.05);
    } else if (clientess === 'Funcionario') {
        valorFinal -= (atual * 0.01);
    }
    return `<strong>Valor a pagar R$: ${valorFinal}</strong>`;
};


document.querySelector('#btClean').addEventListener('click', function () {
    document.querySelector('#valorFinal').innerHTML = " ";
})    