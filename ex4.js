// 4. Fazer um programa que leia os dados de um usuário de telefonia de
// uma empresa de telecomunicações: bairro e número completo do
// telefone e verifique se o número do telefone (Exemplo:32121212) está
// correto, ou seja, se o prefixo (4 primeiros dígitos) é correspondente ao
// bairro especificado. Sabendo-se que os prefixos existem nos bairros
// conforme a tabela a seguir:

// Bairro Prefixos
// Oeste 3223, 3225, 3212,
// Centro 3223, 3224, 3212,
// Sul 3241, 3242, 3243, 3281
// Bueno 3251, 3285
// Campinas 3233, 3291

let prompt = require('prompt-sync')();

function verificarTipoTriangulo() {
    let ladoA = parseFloat(prompt('Digite o lado A: '));
    let ladoB = parseFloat(prompt('Digite o lado B: '));
    let ladoC = parseFloat(prompt('Digite o lado C: '));

    // Ordena os lados
    let lados = [ladoA, ladoB, ladoC].sort((a, b) => a - b);

    let a = lados[0];
    let b = lados[1];
    let c = lados[2]; // maior lado

    // Validação do triângulo
    if (a + b <= c) {
        console.log('Os valores informados não formam um triângulo.');
        return;
    }

    // Classificação
    if (c ** 2 === a ** 2 + b ** 2) {
        console.log('O triângulo é retângulo.');
    } else if (c ** 2 > a ** 2 + b ** 2) {
        console.log('O triângulo é obtusângulo.');
    } else {
        console.log('O triângulo é acutângulo.');
    }
}

verificarTipoTriangulo();