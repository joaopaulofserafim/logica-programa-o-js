function converteTEM(temperatura, escala, conversao) {
    let temperaturaConvertida;
    if (!isNaN(temperatura));
    escala = escala.toUpperCase();
    conversao = conversao.toUpperCase();

    if (escala === 'C' || escala === 'F' || escala === 'K') {
        if (conversao === 'C' || conversao === 'F' || conversao === 'K') {

            if (escala != conversao) {
                if (escala == 'C' && conversao == 'F') {
                    calculoFahrenhreit = (temperatura * 9 / 5) + 32;
                    temperaturaConvertida = `Celsius para Fahrenhreit:${calculoFahrenhreit} °F`;

                } else if (escala == 'F' && conversao == 'C') {
                    calculoCelsius = (temperatura - 32) * 5 / 9;
                    temperaturaConvertida = `Fahrenhereit para Celsius: ${calculoCelsius} °C`;

                } else if (escala == 'K' && conversao == 'C') {
                    calculoCelsius2 = temperatura - 273.15;
                    temperaturaConvertida = `Kelvin para Celsius: ${calculoCelsius2} °C`;

                } else if (escala == 'K' && conversao == 'F') {
                    calculofah = temperatura * 9 / 5 - 459.67;
                    temperaturaConvertida = `Kelvin para Fahrenhereit: ${calculofah} °F`;

                } else if (escala == 'C' && conversao == 'K') {
                    calculocel = (temperatura * 1) + 273.15;
                    temperaturaConvertida = `Celsius para Kelvin: ${calculocel} °K`;

                } else if (escala == 'F' && conversao == 'K') {
                    calculokelvin = ((temperatura * 1) + 459.67) * 5 / 9;
                    temperaturaConvertida = `Fahrenhereit para Kelvin: ${calculokelvin} °K`;
                }
            } else {
                temperaturaConvertida = `Escala selecionada: ${escala}. Selecione uma escala diferente.`
            }
        }

    }

    return temperaturaConvertida;
}