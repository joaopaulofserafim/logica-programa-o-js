
let nomes = [];

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();

        if (nomes.length < 10) {
            document.querySelector('#btCadastrar').click();
        } else {
            document.querySelector('#btPesquisar').click();
        }
    }
});

document.querySelector('#btCadastrar').addEventListener('click', function () {
    let nomeInserido = document.querySelector('#nome').value.toUpperCase().trim();

    if (nomes.length >= 10) {
        alert('Limite de cadastro atingido!');
        return;
    }

    if (nomeInserido !== '') {
        nomes.push(nomeInserido);
        document.querySelector('#nome').value = '';
    } else {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (nomes.length === 10) {
        document.querySelector('label[for="nome"]').innerHTML = '<strong>Agora pesquise um nome:</strong>';
        document.querySelector('#btCadastrar').classList.add('oculto');
        document.querySelector('#btPesquisar').classList.remove('oculto');
    }
});

document.querySelector('#btPesquisar').addEventListener('click', function () {
    const nomeBuscado = document.querySelector('#nome').value.toUpperCase().trim();

    if (nomeBuscado === '') {
        alert('Digite um nome para pesquisar.');
        return;
    }

    if (nomes.includes(nomeBuscado)) {
        document.querySelector('#valorFinal').innerHTML = '<strong>Nome Cadastrado</strong>';
    } else {
        document.querySelector('#valorFinal').innerHTML = '<strong>Nome não Cadastrado</strong>';
    }
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

 document.querySelector('#btClean').addEventListener('click', function(){
    document.querySelector('#valorFinal').innerHTML = ''
    nomes = [];
 })