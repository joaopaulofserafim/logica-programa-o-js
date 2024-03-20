const temperatura = parseFloat(window.prompt(`Digite a temperatura:`));

if ( !isNaN(temperatura)) {
  

  const
    atual = window.prompt(`Unidade atual C (Celsius), F (Fahrenheit ) ou K (kelvin) :`).toUpperCase(),
    converter = window.prompt(`Quer converter para, C (Celsius), F (Fahrenheit ) ou K (kelvin)?`).toUpperCase();


  if ((atual === `C` && converter === `F`)) {
    window.alert(`A temperatura è ${(temperatura * 9 / 5) + 32} °F`)
  }
  else if ((atual === `C` && converter === `K`)) {
    
    window.alert(`A temperatura é ${(temperatura * 1) + 273} °K`)
  }
  else if ((atual === `F` && converter === `C`)) {
    window.alert(`A temperatura é ${(temperatura - 32) * 5 / 9} °C`)
  }
  else if ((atual === `F` && converter === `K`)) {
    window.alert(`A temperatura é ${(temperatura + 459.67) * 5 / 9} °K`)
  }
  else if (atual === `K` && converter === `C`) {
    window.alert(`A temperatura é ${temperatura - 273.15} °C`)
  }
  else if (atual === `K` && converter === `F`) {
    window.alert(`A temperatura é ${(temperatura * 1) * 9 / 5 - 459.67}° F`)
  }
  else {
    window.alert(`Caracter não existente`)
  }
 
} else {
  window.alert(`Caracter não indetificado, digite um número`)
}
