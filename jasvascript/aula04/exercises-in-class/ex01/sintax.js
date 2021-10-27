/*
    1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
    Exemplo: minhaFuncao(370914) // retorno esperado: 419073;
*/

var lista = ['3','7','0','9','1', '4'];
var lista2 = []; 

function revertArray (myList) {
    var tamanhoArray = myList.length
    for (i = 0; i <= tamanhoArray; i++) {
        var item = myList.pop()
        if (typeof item !== 'undefined'){
            lista2.push(item)
        }
       
    }
    return lista2
}

revertArray()