

document.querySelector('#btCalcular').addEventListener('click', function () {
    const codigoProduto = Number(document.querySelector('#codigoProduto').value);
    const qtdeProduto = Number(document.querySelector('#qtdeProduto').value);
    const produto = calculaDesconto(codigoProduto, qtdeProduto);
    const pDescricao = document.createElement('p');
    pDescricao.innerHTML = produto.descricao;
    pDescricao.setAttribute('data-produto', produto.codigo);

    const pValorFinal = document.createElement('p');
    pValorFinal.innerHTML = produto.valorFinal.toFixed(2);
    pValorFinal.classList.add('monetario')

    document.querySelector('#resultado').append(pDescricao, pValorFinal);

});



const produtos = [
    {
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado"
    },
    {
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers"
    },
    {
        codigo: 3,
        preco: 0.50,
        descricao: "Quebra Queixo"
    }
];
function calculaDesconto(codigoProduto, qtdeProduto) {
    let preco;
    let desconto;
    let valorFinal;

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].codigo === codigoProduto) {
            preco = produtos[i].preco;
            descricao = produtos[i].descricao;
        }

    } if (qtdeProduto >= 3 && qtdeProduto <= 5) {
        desconto = 0.02;
    } else if (qtdeProduto >= 6 && qtdeProduto <= 10) {
        desconto = 0.03;
    } else if (qtdeProduto > 10) {
        desconto = 0.05;
    } else {
        desconto = 0;
    }

    valorFinal = (preco * qtdeProduto) - (preco * qtdeProduto * desconto);

    return {
        codigo: codigoProduto,
        preco: preco,
        descricao: descricao,
        valorFinal: valorFinal
    };


}

document.querySelector('#btClean').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = " "
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

 