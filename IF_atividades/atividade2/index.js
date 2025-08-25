var lerValor = require('readline-sync')

let numero = lerValor.questionInt("Digite um valor para saber se é par ou ímpar e positivo ou negativo:")


if (numero % 2 == 0 && numero < 0){
    console.log('O número é par e negativo');
    
} else if (numero % 2 != 0 && numero > 0){
    console.log('O número é ímpar e positivo');

} else if(numero % 2 != 0 && numero < 0){
    console.log('O número é ímpar e negativo');
} else {
    console.log('O número é par e positivo');
}
