//Operadores Lógicos

//&& = Lido como "E", somente retorna True caso as duas condições sejam verdadeiras (no caso iguais), caso contrário retornará False.

//|| = Lido como "Ou", retorna True caso uma das condições sejam verdadeiras, apenas retornará False, caso ambas sejam falsas.

//A ordem dos operadores lógicos em uma expressão se dá

// 1- !
// 2- &&
// 3- ||

//Operadores Ternários ( ? : )

// /Eles tem três operandos, podem ser lidos como:

// ? = "Se sim.." Caso a expressão seja verdadeira.
// : = "Se não..." Caso a expressão seja falsa.



let prompt = require('prompt-sync')();
let numero;
while(numero != 0) {
    numero = prompt("Digite um número (0 para sair): ");
}
