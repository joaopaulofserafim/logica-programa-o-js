const temperatura = window.prompt( `Digite a temperatura:`),
      atual = window.prompt( `Unidade atual C (Celsius), F (Fahrenheit ) ou K (kelvin) :`),
      converter = window.prompt(`Quer converter para, C (Celsius), F (Fahrenheit ) ou K (kelvin)?`);

let calculo = 0

const calC1 = ( temperatura * 9/5) +32,
      calC2 = temperatura + 273,
      calF1 = (temperatura - 32) * 5/9,
      calF2 = (temperatura + 459.67) * 5/9 ,
      calK1 = temperatura - 273.15,
      calK2 = temperatura * 9/5 - 459.67;

      if (atual === `c` || `C` && converter === `f` || `F`) { 
        calculo = (temperatura * 9/5 ) + 32 .toFixed(2);
        window.alert (`A temperatura è ${calculo} °F`)
      }
      else if (atual === `c` || `C` && converter === `k` || `K`) {
        calculo = (temperatura + 273.75 .toFixed(2));
        window.alert(`A temperatura é ${calculo} °K`)
      }
      else if (atual === `f` || `F` && converter === `c` || `C`) {
        calculo = (temperatura - 32) * 5/9 .toFixed(2);
        window.alert(`A temperatura é ${calculo} °C`)
      } 
      else if (atual === `f` || `F` && converter === `k` || `K`){
        calculo = (temperatura + 459.67) * 5/9 .toFixed(2);
        window.alert(`A temperatura é ${calculo} °K` )
      }
      else if (atual === `k` || `K` && converter === `c` || `C`){
        calculo = (temperatura - 273.15.toFixed(2));
        window.alert(`A temperatura é ${calculo} °C`)
      }
      else if (atual === `k` || `K` && converter === `f` || `F`){
        calculo = temperatura * 9/5 - 459.67 .toFixed(2); 
        window.alert(`A temperatura é ${calculo}° F`)
      }
      else {
        window.alert(`Caracteres não reconhecidos`)
      }
