//Operadores Lógicos

//&& = Lido como "E", somente retorna True caso as duas condições sejam verdadeiras (no caso iguais), caso contrário retornará False.

//|| = Lido como "Ou", retorna True caso uma das condições sejam verdadeiras, apenas retornará False, caso ambas sejam falsas.

//A ordem dos operadores lógicos em uma expressão se dá

// 1- !
// 2- &&
// 3- ||



let prompt = require('prompt-sync')();
let numero;
while(numero != 200)  {
    numero = parseInt(prompt("Digite um número: "));
    if(numero == 200) {
        console.log("Parabéns, você acertou o número!");
    } else {
        console.log("Tente novamente!");

    }
}