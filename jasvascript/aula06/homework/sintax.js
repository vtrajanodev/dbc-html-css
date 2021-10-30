/*
    Hard Homework
*/

//Variaveis
const MENSAGEM_DE_ERRO_NOME = "É preciso informar um nome para o valor em questão";
const MENSAGEM_DE_ERRO_NÚMERO = "É preciso informar um número para o valor em questão";
var id = 0;
var arrayOfContributors = [];
var arrayOfClocking = [];
var arrayOfProjects = [];

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
            return true;
        }else{
            return false;
        }
    }
}

//Criação das classes

class Marcacao{
    day = '';//MENSAGEM_DE_ERRO_NÚMERO;
    hour = '';//MENSAGEM_DE_ERRO_NÚMERO;

    constructor(day, hour){
        this.day = new Validations().isNumber(day) ? day : this.day;
        this.hour = new Validations().isNumber(hour) ? hour : this.hour;
    }
}

class Colaborador{
    id = id + 1;
    name = MENSAGEM_DE_ERRO_NOME;
    projectCode = 0;
    clocking = [];

    constructor(name){
        this.name = name;
    }

    pointRegister = (d, h) =>{
        this.clocking.push({    
            day: d,
            hour: h
        })
    } 

    contribuitorRegister = (contribuitor) => {
        arrayOfContributors = arrayOfContributors.push({
            id: contribuitor.id,
            name: contribuitor.name,
            projectCode: contribuitor.projectCode,
            clocking: this.clocking       
        })
    }
}

console.log(arrayOfContributors);
const contribuitor = new Colaborador('Joãozinho');
contribuitor.contribuitorRegister(contribuitor);
contribuitor.pointRegister(1, 8);
contribuitor.pointRegister(2, 8.30);
contribuitor.pointRegister(3, 9);

class Project{
    code = 0; //MENSAGEM_DE_ERRO_NUMERO
    title = '';//MENSAGEM_DE_ERRO_NOME
    allocatedContribuitor = [];

    projectRegister = (project) => {
        arrayOfProjects = arrayOfProjects.push({
            code = code + 1,
            title: project.title,
            allocatedContribuitor = this.allocatedContribuitor
        })
    }
}