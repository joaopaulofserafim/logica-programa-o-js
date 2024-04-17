function converteTemperatura(valorTemperatura, escalaAtual, escalaConvertida) {
let temperaturaConvertida;

//   const temperatura = parseFloat(window.prompt(`Digite a temperatura:`));

  if (!isNaN(valorTemperatura)) {


   //  const
   //    atual = window.prompt(`Unidade atual C (Celsius), F (Fahrenheit ) ou K (kelvin) :`).toUpperCase(),
   //    converter = window.prompt(`Quer converter para, C (Celsius), F (Fahrenheit ) ou K (kelvin)?`).toUpperCase();


    if ((valorTemperatura === `C` && escalaAtual === `F`)) {
    escalaConvertida = `A temperatura è ${(temperatura * 9 / 5) + 32}°F`
    }
    else if ((valorTemperatura === `C` && escalaAtual === `K`)) {

       escalaConvertida = `A temperatura é ${(temperatura * 1) + 273} °K`
    }
    else if ((valorTemperatura === `F` && escalaAtual === `C`)) {
       escalaConvertida = `A temperatura é ${(temperatura - 32) * 5 / 9} °C`
    }
    else if ((valorTemperatura === `F` && escalaAtual === `K`)) {
       escalaConvertida = `A temperatura é ${(temperatura + 459.67) * 5 / 9} °K`
    }
    else if (valorTemperatura === `K` && escalaAtual === `C`) {
       escalaConvertida = `A temperatura é ${temperatura - 273.15} °C`
    }
    else if (valorTemperatura === `K` && escalaAtual === `F`) {escalaAtual
       escalaConvertida = `A temperatura é ${(temperatura * 1) * 9 / 5 - 459.67}° F`
    }
    else {
       escalaConvertida = `Caracter não existente`
    }

  } else {
     escalaConvertida = `Caracter não indetificado, digite um número`
  }

  return escalaConvertida;
};

