/*
    3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam) e retorne uma concatenação destes 2 arrays ("soma");
*/

var array1 = [1, 5, 'texto' , undefined, 0, true]
var array2 = ['início do segundo array', true, 0, 1, 2]

function concatArray(myFirstArray, mySecondArray){
    var newArray = myFirstArray.concat(mySecondArray)

    return newArray
}

console.log(concatArray(array1, array2))