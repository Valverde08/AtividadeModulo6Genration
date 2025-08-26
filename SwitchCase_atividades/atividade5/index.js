var lerValor = require('readline-sync')

console.log(`
    Código do Produto Produto Preço Unitário \n
    1 Cachorro Quente R$ 10.00 \n
    2 X-Salada R$ 15.00 \n
    3 X-Bacon R$ 18.00 \n
    4 Bauru R$ 12.00 \n
    5 Refrigerante R$ 8.00 \n
    6 Suco de laranja R$ 13.00 \n


    `);



let codigoProduto = lerValor.questionInt("Digite o código do item e para efetuar a compra:");




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