/*
    4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;
*/

var resultado = 0

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        resultado = i * i
        console.log(`O quadrado de ${i} é ${resultado}`)
    }
}