var lerValor = require('readline-sync')

let numA = lerValor.questionFloat("Digite o primeiro Valor:");

let numB = lerValor.questionFloat("Digite o primeiro Valor:");

let numC = lerValor.questionFloat("Digite o primeiro Valor:");


if(numA + numB < numC){
    console.log(`A soma de A + B é menor do que o valor de C`);
    
} else if (numA + numB > numC){
    console.log(`A soma de A + B é maior do que o valor de C`);
    
} else {
    console.log(`A soma de A + B é igual ao valor de C`);
    
}