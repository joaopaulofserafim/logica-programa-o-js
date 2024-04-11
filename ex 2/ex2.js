function compra(){
    
    let valor = parseFloat(document.getElementById('atual').value);
    let cliente = document.getElementById('clientess').value;
    let resultado = valor;

    if (valor > 0) {
        if ( cliente === 'Cliente VIP')
        resultado -= (valor * 0.05);
       document.querySelector('valorFinal').innerHTML = '<strong>Valor a pagar R$:</strong>'

    }else if ( cliente === 'Funcionario') {

        resultado -= (valor * 0.01);  
        document.querySelector('valorFinal').innerHTML = '<strong>Valor a pagar R$:</strong>'

    }else if ( cliente === 'Comum') 
    document.querySelector('valorFinal').innerHTML = '<strong>Valor a pagar R$:</strong>'

    else 
    document.querySelector('valorFinal').innerHTML = 'Digite o valor:'
}



