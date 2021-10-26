/*
    2) Faça um programa que calcule a soma dos primeiros 50 números pares;
*/

var sum = 0

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        sum += i
    }
}

console.log(`Soma dos primeiros 50 números pares = R$ ${sum}`)


