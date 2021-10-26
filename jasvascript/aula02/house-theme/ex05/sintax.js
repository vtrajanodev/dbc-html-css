/*
    5) Faça um algoritmo que apresente o quadrado de cada um dos números ímpares entre 100 e 1; (Decremento)
*/


var resultado = 0

for(let i = 100; i >= 1; i--){
    if(i % 2 !== 0){
        resultado = i * i
        console.log(`O quadrado de ${i} é ${resultado}`)
    }
}
