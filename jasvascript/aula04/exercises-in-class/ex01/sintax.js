/*
    1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
    Exemplo: minhaFuncao(370914) // retorno esperado: 419073;
*/

var lista = ['3','7','0','9','1', '4'];
var lista2 = []; 

function revertArray (myList, newList) {
    for (i = 0; i <= myList.length; i++) {
        var item = myList.pop()
        newList.push(item)
    }
}