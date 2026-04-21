// 2. Fazer um algoritmo que dado os lados de um triângulo A, B e C. Dizer
// se os lados dados formam um triângulo: retângulo (A
// 2=B
// 2+C
// 2
// ),

// obtusângulo (A
// 2>B
// 2+C
// 2
// ) ou acutângulo (A
// 2<B
// 2+C
// 2
// ).

let prompt = require('prompt-sync')();
function verificarTipoTriangulo() {
    let ladoA = parseFloat(prompt('Digite o lado A do triângulo: '));
    let ladoB = parseFloat(prompt('Digite o lado B do triângulo: '));
    let ladoC = parseFloat(prompt('Digite o lado C do triângulo: '));
    
    if (ladoA ** 2 === ladoB ** 2 + ladoC ** 2) {
        console.log('O triângulo é retângulo.');
    } else if (ladoA ** 2 > ladoB ** 2 + ladoC ** 2) {
        console.log('O triângulo é obtusângulo.');
    } else {
        console.log('O triângulo é acutângulo.');
    }
}
verificarTipoTriangulo();

