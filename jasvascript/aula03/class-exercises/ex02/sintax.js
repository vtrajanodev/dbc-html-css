/*
    2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
    e todos caracteres em maiúsculo;
*/

var myString = '       minhaaaaaaa string JS     '


function newString(str){
    var stringConverted = str.trim().toUpperCase()

    return console.log(stringConverted)
}

newString(myString)