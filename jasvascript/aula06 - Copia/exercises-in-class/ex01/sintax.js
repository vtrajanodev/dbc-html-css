/* 
    Temos uma petshop, então precisamos:
    - ter os nossos pets (class Pet);
    - vão ter, nome, raça, idade;
    - nossos pets vão poder latirOuMiar() // 'oi meu nome é xxx e minha raça é xxx e idade é xxx';
*/

function isPresent(value){
    if(typeof value !== 'undefined' && value !== ''){
        return true;
    }else{
        return false;
    }
}

class Pet {
    nome = 'Não informado';
    raca = 'Não informado';
    idade = 0;

    constructor(name, type, age){
        this.name = isPresent(name) ? name : this.name;
        this.raca = isPresent(type) ? type : this.raca;
        this.idade = isPresent(age) ? age : this.idade;
    }

    latirOuMiar(){
        console.log(`Oi meu nome é ${this.nome}, minha raça é ${this.raça} e minha idade é ${this.idade} anos`);
    }
}

const romeu = new Pet();
romeu.latirOuMiar();