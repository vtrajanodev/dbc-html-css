/*Crie um programa que atribua à uma variável e imrpima no console ao final da execução dos textos:
'Sextou' ou 'Ainda não sextou' de acordo com a resposta do usuário, códigos 1 e 2 respectivamente*/


var isFriday = prompt('Olá! Digite 1 para sextou ou 2 para ainda não sextou')
isFriday = Number.parseInt(isFriday)

isFriday = (isFriday === 1 || isFriday === 2) ? isFriday : alert('Você deve inserir 1 ou 2 para continuar')

if(isFriday === 1){
    alert('Perfeito, bora pra farra')
}else{
    if(isFriday == 2){
        alert('Não sextou, prof Tiago passou exercircio de JS')
    }
}

