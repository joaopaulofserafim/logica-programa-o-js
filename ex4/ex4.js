
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
        document.querySelector('#resultado').innerHTML = 'ACHEI ';
    } else {
        document.querySelector('#resultado').innerHTML = 'NÃO ACHEI'
    }
});