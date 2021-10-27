/*
    1) Crie uma função que recebe como parâmetro um caracter e um array de caracteres e que remova todas as ocorrências daquele caracter no array; ex. funcaoRemoveCaracterDoTexto('a', [ 'c', 'a', 'texto', 'a' ] ) ===> retorna o array [ 'c', 'texto' ] (removeu todos 'A');
*/

var character = 'c'
var array = [ 'c', 'a', 'texto', 'a' , 'a' , 'texto', 'c']

function removeItems(item, list){
    let indice = list.indexOf(item)

    for(indice; indice >= 0;){
        list.splice(indice, 1)
        indice = list.indexOf(item)
    }
    
    console.log(list)
}  

removeItems(character, array)