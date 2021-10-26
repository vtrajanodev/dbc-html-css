/*
    3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;
*/

var numTabuada = prompt('Escolha um número de 1 a 10 para ver a tabuada.')

numTabuada = Number.parseInt(numTabuada)
var resultado = 0

if(numTabuada.length || numTabuada === 0 || numTabuada > 10 || isNaN(numTabuada)){
    alert('Você precisa digitar umm número de 1 a 10 para verificar a tabuada.')
}else{
    for(let i = 1; i <= 10; i++){
        resultado = numTabuada * i
        console.log(`${numTabuada} * ${i} = ${resultado}`)
    }

}