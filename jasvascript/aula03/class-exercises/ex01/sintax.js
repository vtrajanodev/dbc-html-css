/*
    1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
    e essa função imprima no console o valor de cada elemento da lista;
*/

var myList = [1, 'Olá', undefined, 99999, 'Texto qualquer']

function printListOnConsole(listParam){
    for(let i = 0; i < listParam.length; i++){
        console.log(listParam[i])
    }
}

printListOnConsole(myList)