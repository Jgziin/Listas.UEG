//Operadores Lógicos

//&& = Lido como "E", somente retorna True caso as duas condições sejam verdadeiras (no caso iguais), caso contrário retornará False.

//|| = Lido como "Ou", retorna True caso uma das condições sejam verdadeiras, apenas retornará False, caso ambas sejam falsas.

//A ordem dos operadores lógicos em uma expressão se dá

// 1- !
// 2- &&
// 3- ||



let prompt = require('prompt-sync')();

function flamengo() {
    let time = prompt('Qual é o melhor time do mundo? ');
    let titulos = parseInt(prompt('Quantos títulos o Flamengo tem? '));
    let resposta = (time == 'Flamengo' && titulos <= 5) ? 'Resposta correta!' 
    : 'Resposta incorreta! O melhor time do mundo é o Flamengo e ele tem 4 títulos da Libertadores e 1 títulos do Mundial de Clubes, totalizando 5 títulos internacionais!';
    if (resposta == 'Resposta correta!') {
        console.log(resposta);
    }
    else {
        console.log(resposta);
    }
}
console.log('Vamos testar seus conhecimentos sobre o Flamengo!');


flamengo();