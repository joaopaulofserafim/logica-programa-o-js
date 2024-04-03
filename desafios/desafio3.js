function converteTemperatura() {
let temperaturaConvertida;

  const temperatura = parseFloat(window.prompt(`Digite a temperatura:`));

  if (!isNaN(temperatura)) {


    const
      atual = window.prompt(`Unidade atual C (Celsius), F (Fahrenheit ) ou K (kelvin) :`).toUpperCase(),
      converter = window.prompt(`Quer converter para, C (Celsius), F (Fahrenheit ) ou K (kelvin)?`).toUpperCase();


    if ((atual === `C` && converter === `F`)) {
    temperaturaConvertida = `A temperatura è ${(temperatura * 9 / 5) + 32}°F`
    }
    else if ((atual === `C` && converter === `K`)) {

       temperaturaConvertida = `A temperatura é ${(temperatura * 1) + 273} °K`
    }
    else if ((atual === `F` && converter === `C`)) {
       temperaturaConvertida = `A temperatura é ${(temperatura - 32) * 5 / 9} °C`
    }
    else if ((atual === `F` && converter === `K`)) {
       temperaturaConvertida = `A temperatura é ${(temperatura + 459.67) * 5 / 9} °K`
    }
    else if (atual === `K` && converter === `C`) {
       temperaturaConvertida = `A temperatura é ${temperatura - 273.15} °C`
    }
    else if (atual === `K` && converter === `F`) {
       temperaturaConvertida = `A temperatura é ${(temperatura * 1) * 9 / 5 - 459.67}° F`
    }
    else {
       temperaturaConvertida = `Caracter não existente`
    }

  } else {
     temperaturaConvertida = `Caracter não indetificado, digite um número`
  }
};

