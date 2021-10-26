/*
    3) Crie função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma função de Callback que seja chamada caso algum dos números informados seja inválido.
*/

function sum(n1, n2){
    if(isNaN(n1) || isNaN(n2)){
        errorFunction();
    }else{
        return console.log(`${n1 + n2}`);
    }
}

function errorFunction(){
    alert('Você precisa inserir números válidos');
}

sum(1, 'f');