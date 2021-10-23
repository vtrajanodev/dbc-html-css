var resultado = 0

var n1 = prompt('Informe o primeiro número para a operação')
var operacao = prompt('Informe o símbolo da operação desejada (+ , - , * , /)')
var n2 = prompt('Informe o segundo número para operação escolhida')

n1 = Number.parseInt(n1)
n2 = Number.parseFloat(n2)

if (
    (typeof n1 === 'number' && n1.toString() !== 'NaN') &&
    (typeof n2 === 'number' && n2.toString() !== 'NaN')
) {
    if (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
        alert('Operação inválida, por favor escolha +, - , * ou /')
    } else {
        if (operacao === '+' && operacao !== '') {
            resultado = n1 + n2
            alert(`O resultado da operação é ${resultado}`)
        } else if (operacao === '-' && operacao !== '') {
            resultado = n1 - n2
            alert(`O resultado da operação é ${resultado}`)
        } else if (operacao === '*' && operacao !== '') {
            resultado = n1 * n2
            alert(`O resultado da operação é ${resultado}`)
        } else if (operacao === '/' && operacao !== '') {
            if (n1 === 0 && n2 === 0) {
                alert('0 não pode ser dividido por 0')
            } else {
                resultado = n1 / n2
                alert(`O resultado da operação é ${resultado}`)
            }
        }
    }

} else {
    alert('Você precisa inserir dois números para continuar')
}



