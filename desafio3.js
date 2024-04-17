const temperatura = (window.prompt(`Digite a temperatura:`));


if (!isNaN(temperatura)); {
  const atual = window.prompt(`Unidade atual C (Celsius), F (Fahrenheit ) ou K (kelvin) :`).toUpperCase(),
    converter = window.prompt(`Quer converter para, C (Celsius), F (Fahrenheit ) ou K (kelvin)?`).toUpperCase();



  if ((atual == `C` && converter == `F`)) {
    calculo = (temperatura * 9 / 5) + 32 .toFixed(2);
    window.alert(`A temperatura è ${calculo} °F`)
  }
  else if ((atual === `C` && converter === `K`)) {
    calculo = (temperatura * 1) + 273  .toFixed(2);
    window.alert(`A temperatura é ${calculo} °K`)
  }
  else if ((atual == `F` && converter == `C`)) {
    calculo = (temperatura - 32) * 5 / 9 .toFixed(2);
    window.alert(`A temperatura é ${calculo} °C`)
  }
  else if ((atual == `F` && converter == `K`)) {
    calculo = (temperatura + 459.67) * 5 / 9 .toFixed(2);
    window.alert(`A temperatura é ${calculo} °K`)
  }
  else if ((atual == `K` && converter == `C`)) {
    calculo = (temperatura + 459.67) * 5 / 9 .toFixed(2);
    window.alert(`A temperatura é ${calculo} °C`)
  }
  else if ((atual == `K` && converter == `F`)) {
    calculo = (temperatura * 1) * 9 / 5 - 459.67.toFixed(2);
    window.alert(`A temperatura é ${calculo}° F`)
  }
  else {
    window.alert(`Erro`);
  }
}