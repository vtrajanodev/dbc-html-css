var answer = 'sim'
var name = prompt('Por favor, digite seu nome:')
var text = prompt('Você gosta de programar?:')

if(text == answer.toLowerCase()){
    alert(`Parabéns ${name} Victvocê acertou a resposta secreta que é ${answer.toLowerCase()}`)
}else if(text == "não"){
    var incorretAnswer = prompt('Digite o que você gosta de fazer:')
    alert(`Então você gosta de ${incorretAnswer}`)
}else{
    var confirmation = confirm('Você tem noção dos seus atos?')

    if(confirmation){
        alert('Então tudo bem :)')
    }else{
        alert('Sem noção você hein ?!')
    }
}