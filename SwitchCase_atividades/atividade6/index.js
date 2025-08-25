var lerValor = require('readline-sync')

let nomeFuncionario = lerValor.question("Qual o seu nome ? ")

let salario = lerValor.questionFloat("Qual o seu salário atual ? ")

let cargo = lerValor.questionInt("Qual o código do seu cargo ? ")


switch (true) {
    case cargo == 1:
        console.log(`Olá ${nomeFuncionario} você é Gerente na nossa empresa e o seu novo salário será de R$ ${(salario  * 0.10)+ salario}  `);
        
    break;

    case cargo == 2:
        console.log(`Olá ${nomeFuncionario} você é vendedor na nossa empresa e o seu novo salário será de R$ ${(salario  * 0.07)+salario}  `);

    break;
    case cargo == 3:
        console.log(`Olá ${nomeFuncionario} você é Supervisor na nossa empresa e o seu novo salário será de R$ ${(salario  * 0.09)+salario}  `);


    break;
    case cargo == 4:
        console.log(`Olá ${nomeFuncionario} você é Motorista na nossa empresa e o seu novo salário será de R$ ${(salario  * 0.06)+salario}  `);
    
    break;
    case cargo == 5:
        console.log(`Olá ${nomeFuncionario} você é Estoquista na nossa empresa e o seu novo salário será de R$ ${(salario  * 0.05)+salario}  `);
    
    break;
    case cargo == 6:
        console.log(`Olá ${nomeFuncionario} você é Técnico de TI na nossa empresa e o seu novo salário será de R$ ${(salario  * 0.08)+salario}  `);
    
    break;

    default:
        console.log("Não existe esse cargo para este código.");
        
        break;
}