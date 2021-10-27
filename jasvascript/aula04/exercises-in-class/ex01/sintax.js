/*
    1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
    Exemplo: minhaFuncao(370914) // retorno esperado: 419073;
*/

function revertArray (num) {

    var lista2 = []
    var newList = num.toString()
    var arrayCharacters = newList.split("")
    var tamanhoArray = arrayCharacters.length

    for (i = 0; i <= tamanhoArray; i++) {
        var item = arrayCharacters.pop()
        if (typeof item !== 'undefined'){
            lista2.push(Number.parseInt(item))
        }
    }
    return console.log(...lista2)
}

revertArray(123456)