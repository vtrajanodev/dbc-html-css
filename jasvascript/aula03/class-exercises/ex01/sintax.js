/*
    1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
    e essa função imprima no console o valor de cada elemento da lista;
*/

function lista(myList){
    for(let i= 0; i < [...arguments].length; i++){
        console.log(...arguments[i]);
    }
}

var arr = [1,'Olá', undefined, 99999, 'Texto qualquer'];

lista(arr);