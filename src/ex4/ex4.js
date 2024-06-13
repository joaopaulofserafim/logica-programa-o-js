
document.addEventListener('keydown', function (evento) {

    if (evento.key === 'Enter') {
        evento.preventDefault();

        if (nomes.length < 10) {
            document.querySelector('#btCadastrar').click();
        } else {
            document.querySelector('#btPesquisar').click()
        }
    }
});

let nomes = [];

document.querySelector('#btCadastrar').addEventListener('click', function () {
    let nomeInserido = (document.querySelector('#nome').value.toUpperCase());
    nomes.push(nomeInserido)
    if (nomes.length === 10) {
        document.querySelector('label[for= "nome"]').innerHTML = '<strong>Agora pesquise um nome:</strong>';
        document.querySelector('#btCadastrar').classList.add('oculto');
        document.querySelector('#btPesquisar').classList.remove('oculto');
    }
});
document.querySelector('#btPesquisar').addEventListener('click', function () {
    const nomeBuscado = document.querySelector('#nome').value.toUpperCase();

    if (nomes.includes(nomeBuscado)) {
        document.querySelector('#valorFinal').innerHTML = '<strong>Nome existente</strong>';
    } else {
        document.querySelector('#valorFinal').innerHTML = '<strong>Nome inexistente</strong>'
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
 