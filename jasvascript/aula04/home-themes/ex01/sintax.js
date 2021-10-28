/*
    // 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string 
//    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
*/

function countVowelsAndConsonants(str) {
    var myArrayOfCharacters = str.toLowerCase().split("")
    var countVowels = 0
    var countConsonants = 0
    countVowels = myArrayOfCharacters.filter(characters => 'aeiou'.includes(characters)).length
    countConsonants = str.length - countVowels
    
    console.log(`A string ${str} possui ${countVowels} vogais e ${countConsonants} consoantes` )
}

countVowelsAndConsonants('Victor Trajano')

console.log('pela'.split('e'))