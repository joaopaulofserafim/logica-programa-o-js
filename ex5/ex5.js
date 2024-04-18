document.querySelector('#btLimp').addEventListener('click' , function(){
    document.querySelector('#resultado').innerHTML = " "

    });
    document.querySelector('#btCalc').addEventListener('click', function() {

        var litros = parseFloat(document.querySelector('#litros').value);
        var tipoCombustivel = document.querySelector('#tpCombustivel').value;
        var precoAlcool = 2.89;
        var precoGasolina = 5.19;
        var valorFinal


        if (tipoCombustivel === 'Álcool'){
            if (litros <= 20 ) {
                valorFinal = litros * (precoAlcool - (precoAlcool * 0.03));
            }else {
                valorFinal = litros * (precoAlcool - (precoAlcool * 0.05));
            }
        } else if (tipoCombustivel === 'Gasolina'){
            if (litros <= 20) {
                valorFinal = litros * (precoGasolina - (precoGasolina * 0.04));
            } else {
                valorFinal = litros * (precoGasolina - (precoGasolina * 0.06));
            }
        };
        if (tipoCombustivel === 'semTexto'){
            window.alert('Insira um tipo de combustivel valido')
        }

        document.querySelector('#resultado').innerHTML = '<strong> Total a pagar: R$ </strong>' + valorFinal.toFixed(2)
    });