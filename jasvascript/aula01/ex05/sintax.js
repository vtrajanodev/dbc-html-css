var p1 = prompt('Insira a primeira nota do aluno')
var p2 = prompt('Insira a segunda nota do aluno')
var p3 = prompt('Insira a terceira nota do aluno')

p1 = Number.parseFloat(p1)
p2 = Number.parseFloat(p2)
p3 = Number.parseFloat(p3)

if (
    (typeof p1 === 'number' && p1.toString() !== 'NaN') &&
    (typeof p2 === 'number' && p2.toString() !== 'NaN') &&
    (typeof p3 === 'number' && p3.toString() !== 'NaN')
) {
    media = ((p1 + p2 + p3) / 3)
    if (media < 5) {
        alert(`Aluno reprovado com a média ${media}`)
    } else if (media >= 5 && media <= 6.9) {
        alert(`Aluno de recuperação com a média ${media}`)
    } else if (media >= 7) {
        alert(`Parabéns! Aluno aprovado com a média ${media}`)
    }
} else {
    alert('Os números inseridos precisam ser números.')
}