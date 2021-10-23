/*Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 1- Continuar perguntando,
2 para de perguntar. Se ele digitar algo diferente de 1 ou 2 deve mostrar um alerta informando o erro e deve solicitar novamente que escolha uma opção*/

function question() {

    var questionNumber = prompt('Olá! Digite 1 para continuar perguntando ou 2 para parar com as perguntas')
    questionNumber = Number.parseInt(questionNumber)

   if(questionNumber !== 1 && questionNumber !== 2){
       alert('Você deve digitar o número 1 ou 2 para prosseguir.')
       return question()
   }else{
       if(questionNumber === 1){
           alert('Perfeito, vamos continuar com as perguntas')
       }else{
           if(questionNumber === 2){
               alert('Tudo bem, paramos por aqui.')
           }
       }
   }

}

question()


