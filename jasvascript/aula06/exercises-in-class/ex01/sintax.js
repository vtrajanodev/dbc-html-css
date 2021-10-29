/* 
    Temos uma petshop, então precisamos:
    - ter os nossos pets (class Pet);
    - vão ter, nome, raça, idade;
    - nossos pets vão poder latirOuMiar() // 'oi meu nome é xxx e minha raça é xxx e idade é xxx';
*/

class Pet {
    nome;
    raça;
    idade;

    constructor(name, type, age){
        this.nome = name;
        this.raça = type;
        this.idade = age
    }

    latirOuMiar(){
        console.log(`Oi meu nome é ${this.nome.toUpperCase()}, minha raça é ${this.raça.toUpperCase() } e minha idade é ${this.idade} anos`)
    }
}

const romeu = new Pet('Romeu', 'Sem raça definida', 3)
romeu.latirOuMiar()