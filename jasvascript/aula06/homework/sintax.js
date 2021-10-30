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
    id = undefined;
    name = '';//MENSAGEM_DE_ERRO_NOME;
    projectCode = null;
    clocking = [];

    constructor(name){
        this.name = name;
        this.id = id += 1
    }

    pointRegister = (d, h) =>{
        this.clocking.push({    
            day: d,
            hour: h
        })
    }

    contribuitorRegister = (contribuitor) => {
        arrayOfContributors.push({
            id: arrayOfContributors.length + 1,
            name: contribuitor.name,
            clocking: this.clocking       
        })
    }

    allocateContribuitorOnProject = (project) => {
        this.projectCode = project.code
    }
}

const contribuitor1 = new Colaborador('Joãozinho');
contribuitor1.contribuitorRegister(contribuitor1);
contribuitor1.pointRegister(1, 8);


const contribuitor2 = new Colaborador('Pelé');
contribuitor2.contribuitorRegister(contribuitor2)


class Project{
    code = null; //MENSAGEM_DE_ERRO_NUMERO
    title = '';//MENSAGEM_DE_ERRO_NOME
    
    constructor(title){
        this.title = title;
        this.code = code += 1
    }
    
    projectRegister = (project) => {
        arrayOfProjects.push({
            code: this.code,
            title: project.title,
        })
    }
}

const projeto1 = new Project('Projeto1')
projeto1.projectRegister(projeto1)



const projeto2 = new Project('Projeto1')
projeto2.projectRegister(projeto2)


contribuitor2.allocateContribuitorOnProject(projeto2)
console.log(contribuitor2)


console.log(arrayOfContributors);
console.log(arrayOfProjects)