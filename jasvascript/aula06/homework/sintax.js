/*
    Hard Homework
*/

//Variaveis
const MENSAGEM_DE_ERRO_NOME = "É preciso informar um nome para o valor em questão";
const MENSAGEM_DE_ERRO_NÚMERO = "É preciso informar um número para o valor em questão";
var id = 0;
var code = 0
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
    projectCode = 1;
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
        arrayOfContributors.push({
            id: arrayOfContributors.indexOf(id) === -1 ? id += 1 : contribuitor.id,
            name: contribuitor.name,
            projectCode: contribuitor.projectCode,
            clocking: this.clocking       
        })
    }
}

console.log(arrayOfContributors);
const contribuitor1 = new Colaborador('Joãozinho');
contribuitor1.contribuitorRegister(contribuitor1);
contribuitor1.pointRegister(1, 8);

const contribuitor2 = new Colaborador('Pelé');
contribuitor2.contribuitorRegister(contribuitor2)


class Project{
    code = code + 1; //MENSAGEM_DE_ERRO_NUMERO
    title = '';//MENSAGEM_DE_ERRO_NOME
    allocatedContribuitors = [];

    constructor(title){
        this.title = title
    }

    projectRegister = (project) => {
        arrayOfProjects = arrayOfProjects.push({
            code: project.code,
            title: project.title,
            allocatedContribuitors: this.allocatedContribuitors
        })
    }

    allocateContribuitorOnProject(contribuitor){
        if(new Colaborador(contribuitor1).projectCode === this.code){
            this.allocatedContribuitors.push(contribuitor)  
        }
    }
}

console.log(arrayOfProjects)
const projeto1 = new Project('Projeto1')
projeto1.projectRegister(projeto1)
projeto1.allocateContribuitorOnProject(contribuitor1)
projeto1.allocateContribuitorOnProject(contribuitor2)
