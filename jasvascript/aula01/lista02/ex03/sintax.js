/*Crie um programa que através de laçoes de repetição percorra uma determinada lista com os numeros [1, 2, 7, 10, 18]
e imprima no console a soma de todos os elementos, neste caso 38*/

var array = [1, 2, 7, 10, 18]

var sum = array.reduce((item, total) => {
    return item + total
})

console.log(sum)