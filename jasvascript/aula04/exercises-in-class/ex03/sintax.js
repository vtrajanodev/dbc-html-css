/*
    3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
    // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';
   
*/


var stringTest = "eu amo java script com espaço mesmo pra mostrar que funciona";


function firstLetter(string) {
  var myString = string.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  return myString;
}
console.log(capitalizeFirst(stringTest)); 