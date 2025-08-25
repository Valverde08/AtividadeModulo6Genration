var lerValor = require('readline-sync')



let codigoProduto = lerValor.questionInt("Digite o código do item e obtenha informações sobre:");

let quantidade  = lerValor.questionInt("Qual a quantidade ?")

 

switch (true) {
    case codigoProduto == 1:
        console.log(`Cachorro Quente||Valor total R$ ${(10 * quantidade).toFixed(2)}`);
        
    break;

    case codigoProduto == 2:
        console.log(`X-Salada ||Valor R$ ${(15 + quantidade).toFixed(2)}`);

    break;
    case codigoProduto == 3:
        console.log(`X-Bacon||Valor R$ ${(18 * quantidade).toFixed(2)}`);

    break;
    case codigoProduto == 4:
        console.log(`Bauru||Valor R$ ${(12 * quantidade).toFixed(2)}`);
    
    break;
    case codigoProduto == 5:
        console.log(`Refrigerante||Valor R$ ${(8 * quantidade).toFixed(2)}`);
    
    break;
    case codigoProduto == 6:
        console.log(`Suco de laranja||Valor R$ ${(13 * quantidade).toFixed(2)}`);
    
    break;

    default:
        console.log("Produto não encontrado no menu.");
        
        break;
}