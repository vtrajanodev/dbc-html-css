var isFriday = confirm('Clique OK para sextou, cancel para professor passou exercircio')
var isTwoGreaterThanFour = 2 > 4
var isValueEmpty = ''


if (isFriday) {
    alert('Sextou parça, precisa validar nada não!!')
} 

else {
    isValueEmpty = prompt('[EXERCIRCIO]Digite um valor para o teste de validação')

    if (typeof isValueEmpty !== 'null' && typeof isValueEmpty !== 'NaN' && isValueEmpty.length && !isTwoGreaterThanFour) {
        alert('Passou no teste de validações')
    } 

    else {
        alert('Caiu na blitz malvada do JS')
    }

}
