/*
    2) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18] e imprima no console a soma de todos os elementos, neste caso seria 38;
*/


var array = [1, 2, 7, 10, 18]
var item = 0

for(let i = 0; i < array.length; i++){
    item += array[i]
    console.log(item)
}