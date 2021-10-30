/*
    Hard Homework
*/

//Variaveis
const MENSAGEM_DE_ERRO_NOME = "É preciso informar um nome para o valor em questão"
const MENSAGEM_DE_ERRO_NÚMERO = "É preciso informar um número para o valor em questão"
var id = 0
var arrayOfContributors = []
var arrayOfClocking = []
var arrayOfProjects = []

//Funcionalidades
class ConsoleLog{
    mostraLog(value){
        console.log(value)
    }
}


//Validações

class Validations{
    isNumber = (value) => {
        if(typeof value === 'number' && !isNaN(value)){
            return true;
        }else{
            return false;
        }
    }

    isProjectExists = (value) => {
        if(this.isNumber(value) && arrayOfProjects.indexOf(value) !== -1){
            return true
        }else{
            return false
        }
    }
}

//Criação das classes

class Marcacao{
    day = MENSAGEM_DE_ERRO_NÚMERO;
    hour = MENSAGEM_DE_ERRO_NÚMERO;

    constructor(day, hour){
        this.day = new Validations().isNumber(day) ? day : this.day
        this.hour = new Validations().isNumber(hour) ? hour : this.hour
    }

    mostraLog(){
        console.log(this.day, this.hour)
    }

}
new Marcacao().mostraLog()

class Colaborador{
    id = id + 1
    name = MENSAGEM_DE_ERRO_NOME
    projectCode = 0
    clocking = []

    constructor(name){
        this.name = name
    }

    

    contribuitorRegister = (contribuitor) => {
        arrayOfContributors = arrayOfContributors.push({
            id: contribuitor.id,
            name: contribuitor.name,
            projectCode: contribuitor.projectCode,
            clocking: this.pointRegister()
        })
    }
  
    pointRegister = (d, h) =>{
        this.clocking.push({
            dia: d,
            hora: h
        })
        console.log(this.clocking,this.id)
    }

    mostraLog(){
        console.log(this.name)
    }
}


const contribuitor = new Colaborador('Joãozinho')
// contribuitor.pointRegister(1, 8)
// new Colaborador().contribuitorRegister(contribuitor)


