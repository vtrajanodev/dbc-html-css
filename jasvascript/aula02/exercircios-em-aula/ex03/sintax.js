/*
    3) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 1 - Continuar perguntando / 2 - Parar de perguntar se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve      solicitar novamente que escolha uma opção.

*/

var opcao = ''

while (opcao !== 2) {
    opcao = parseInt(prompt('Informe a opção desejada\n 1- Continuar perguntando \n 2- Parar de perguntar'), 10)

    if (opcao !== 1 && opcao !== 2){
        alert('Opção inválida')
    }else if(opcao === 1){
        alert('Ok, vamos continuar perguntando')
    }else if(opcao === 2){
        alert('Não vamos perguntar mais nada')
    }
}


