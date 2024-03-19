const temperatura = parseFloat(window.prompt( `Digite a temperatura:`)),
      atual = window.prompt( `Unidade atual C (Celsius), F (Fahrenheit ) ou K (kelvin) :`).toUpperCase(),
      converter = window.prompt(`Quer converter para, C (Celsius), F (Fahrenheit ) ou K (kelvin)?`).toUpperCase();

      
let calculo = 0;

let   calC1 = ( temperatura * 9/5) +32,
      calC2 = (temperatura * 1)+ 273,
      calF1 = (temperatura - 32) * 5/9,
      calF2 = (temperatura + 459.67) * 5/9 ,
      calK1 = temperatura - 273.15,
      calK2 = (temperatura * 1) * 9/5 - 459.67;

      if ( atual == `C` &&  converter == `F`){ 
        calculo = calC1.toFixed(2);
        window.alert (`A temperatura è ${calculo} °F`)
      }
      else if (atual === `C` && converter ===  `K`) {
        calculo = (temperatura * 1) + 273;
        window.alert(`A temperatura é ${calculo} °K`)
      }
      else if (atual == `F` &&  converter == `C`) {
        calculo = calF1 .toFixed(2);
        window.alert(`A temperatura é ${calculo} °C`)
      } 
      else if (atual ==  `F` &&  converter == `K`){
        calculo = calF2 .toFixed(2);
        window.alert(`A temperatura é ${calculo} °K` )
      }
      else if (atual ==  `K` &&  converter == `C`){
        calculo = calK1 .toFixed(2);
        window.alert(`A temperatura é ${calculo} °C`)
      }
      else if ( atual == `K` &&  converter == `F`){
        calculo = calK2 .toFixed(2); 
        window.alert(`A temperatura é ${calculo}° F`)
      }
      else {
        window.alert(`Erro`)
      }
