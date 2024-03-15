const altura = window.prompt ("Digite sua altura");
const peso = window.prompt ("Digite seu peso");
const imc = peso / (altura ** 2);

if ( imc <= 18.5 ) {
    window.alert (`Abaixo do peso`);

} else if ( imc <= 24.9 ) {
    window.alert(`IMC: ${imc}`)
    window.alert (`Peso Normal`);

} else if ( imc <= 29.9 ) {
    window.alert(`IMC: ${imc}`)
    window.alert (`Sobrepeso`);

} else if ( imc <= 34.9) {
    window.alert(`IMC: ${imc}`)
    window.alert (`Obesidade grau I`);

} else if ( imc <= 39.9) {
    window.alert(`IMC: ${imc}`)
    window.alert (`Obesidade grau II`);

} else {
    window.alert(`IMC: ${imc}`)
    window.alert (`Obesidade grau III`);
}


