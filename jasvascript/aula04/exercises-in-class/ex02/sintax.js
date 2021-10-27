
/*
     2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
     e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
     Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, loga: 3  e loga:  7
     Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, loga: 3
*/

var list1 = [1, 3, 5, 7, 9];


function gigantNumber (lista) {
  var newList = lista.sort((a, b) => a - b)
  newList.shift()
  newList.pop()
  newList[0] === newList[newList.length - 1] ? console.log(newList[0]) : console.log(newList[0], newList[newList.length - 1])
  
}

gigantNumber()
