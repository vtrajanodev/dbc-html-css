/*
    6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;
*/

var num = 0
var indice = 0

for(let i = 1; i <= 5; i++){
    num = Number.parseFloat(prompt('Informe um número'))

    if(!isNaN(num)){
        
        indice += num
        console.log(num)
    }
}

console.log(`A soma é ${indice}`)
