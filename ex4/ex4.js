
document.addEventListener('keydown', (evento) => {

    if (evento.key === 'Enter') {
        evento.preventDefault();

        if (nomes.length < 10) {
            document.querySelector('#btCadastrar').click();
        } else {
            document.querySelector('#btPesquisar').click()
        }
    }
})

let nomes = [];


document.querySelector('#btCadastrar').addEventListener('click', function () {

    nomes.push(document.querySelector('#nome').value);


    if (nomes.length === 10) {


        document.querySelector('label[for= "nome"]').innerHTML = '<strong>Nome para pesquisar</strong>';

        document.querySelector('#btCadastrar').classList.add('oculto');

        document.querySelector('#btPesquisar').classList.remove('oculto');


    }


});

document.querySelector('#btPesquisar').addEventListener('click', function () {

    const nomeBuscado = document.querySelector('#nome').value;

    if (nomes.includes(nomeBuscado)) {
        document.querySelector('#resultado').innerHTML = 'ACHEI ';
    } else {
        document.querySelector('#resultado').innerHTML = 'NÃO ACHEI'
    }

});