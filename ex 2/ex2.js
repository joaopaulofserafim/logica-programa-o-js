function valorDesconto(atual, clientess) {

    if (clientess === 'Cliente VIP') {

        valorFinal = valor - (atual * 0.5);

    } else if (clientess === "Funcionario") {
        valorFinal = valor - (atual * 0.1);
    }
    else {
        valorFinal = atual;
    }
    

    return valorFinal;
}

