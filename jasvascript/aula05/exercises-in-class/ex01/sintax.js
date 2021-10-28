/*
    Transforme para arrow function
*/

// function sum(a, b) {
//     return a + b;
// }

var sum = (a, b) => a + b;
console.log(sum(1, 2))

// function isPositive(number) {
//     return number >=0;
// }

var isPositive = number => number >= 0;
    console.log(isPositive(-2))

// function randomNumber() {
//     return Math.random;
// }

var randomNumber = () => Math.random().toFixed(3);
    console.log(randomNumber())

// document.addEventListener('click', /*daqui p frente, substitua por arrow*/  function() {
//     console.log('Click');
// });
console.log('Por favor clique no botão 1')
document.querySelector('button').addEventListener('click' , () =>alert('clicou no botão 1'))