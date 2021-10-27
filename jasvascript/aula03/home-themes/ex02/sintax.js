/*
    2) Crie uma função que receba como parâmetro um array de números e retorne um array ordenado (NÃO pode usar a função array.sort()); ex. funcaoOrdenaArray( [4, 7, 3, 0] ) ===> retorna o array [ 0, 3, 4, 7 ] 
*/

var array = [4, 3, 5, 1, 6, 9, 0]

function arrayOrder(myArray){
    myArray.sort((a, b) => a - b)

    return myArray
}


console.log(arrayOrder(array))


// Ainda incorreto, corrigir amanhã do jeito certo