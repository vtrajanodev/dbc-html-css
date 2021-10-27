/*
    4a) Tendo uma lista vazia [], crie uma função que recebe um elemento qualquer como parâmetro e que adiciona esse elemento à lista;

    4b) Crie outra função para remover o último elemento da lista;
*/

var element = 'elemento adicionado no array';
var array = [];

function addElementOnArray(myElement){
    array.push(myElement);
    console.log(array);
}

addElementOnArray(element);
// addElementOnArray('Elemento a ser removido');

function removeLastElementFromArray(item){
    array.pop(item);
    console.log(array);
}

removeLastElementFromArray(addElementOnArray);
