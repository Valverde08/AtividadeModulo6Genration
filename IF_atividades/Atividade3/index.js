const lerValor = require('readline-sync')

let nome = lerValor.question("Digite o nome do doador:")

let idade = lerValor.questionInt("Digite a sua idade:")

let doador = lerValor.keyInYN("Você já é doador ?")

if(idade >= 18 && idade <=69 && doador == true){
    return console.log(`${nome} está apto para doar sangue!`);
    
} else {
    return console.log(`${nome} não está apto para doar sangue!`);
    
}