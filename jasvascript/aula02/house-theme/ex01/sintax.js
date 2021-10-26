/*
    1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine o salário atual desse funcionário (2021);

*/


var porcentagem = 1.5
var salario = 1000
var ano = 2016

do{
    if(ano < 2018){
        salario = salario + ((salario * porcentagem) / 100)
    }else if (ano > 2018){  
        porcentagem = porcentagem * 2
        salario = salario + ((salario * porcentagem) / 100)
    }
    ano++
}while(ano <= 2021)

console.log(salario)