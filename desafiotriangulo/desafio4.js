let resultado 

function TipoTriangulo (ladoA, LadoB, LadoC) {


    if (ladoA === LadoB && LadoB === LadoC) {
        return "Equilátero";
    } else if (ladoA === LadoB || ladoA === LadoC || LadoB === LadoC){
        return "Isósceles";
    } else if ( ladoA != LadoB && ladoA != LadoC && LadoB && LadoC) {
        return "Escaleno";
    } else {
        return "Essas medidas não são validas"
    }
} 