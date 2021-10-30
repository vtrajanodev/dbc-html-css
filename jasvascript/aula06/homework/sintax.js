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
        if(this.isNumber(value) && arrayOfProjects.indexOf(value.code) !== -1){
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
    id = null;
    name = '';//MENSAGEM_DE_ERRO_NOME;
    projectCode = 0;
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

    allocateContribuitorOnProject = (project) => {
        this.projectCode = project.code
    }

    contribuitorRegister = (contribuitor) => {
        arrayOfContributors.push({
            id: arrayOfContributors.length + 1,
            projectCode: this.projectCode + 1,
            name: contribuitor.name,
            clocking: this.clocking       
        })
    }
}

const contribuitor1 = new Colaborador('Joãozinho');
contribuitor1.contribuitorRegister(contribuitor1);
contribuitor1.pointRegister(1, 8);


const contribuitor2 = new Colaborador('Pelé');
contribuitor2.contribuitorRegister(contribuitor2)

const contribuitor3 = new Colaborador('Ronaldinho');
contribuitor3.contribuitorRegister(contribuitor3)


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


contribuitor1.allocateContribuitorOnProject(projeto1)
contribuitor3.allocateContribuitorOnProject(projeto1)
console.log(contribuitor3)

console.log(arrayOfContributors)
console.log(arrayOfProjects)


// var opt = prompt('Escolha 1 numero')

function troca(){
    switch(opt){
        case 1: const contribuitor1 = new Colaborador('Joãozinho').contribuitorRegister(contribuitor1);
        break;
        case 2: const project1 = new Project('Projeto1').projectRegister(project1);
        break;
        case 3: new Colaborador('Romário').allocateContribuitorOnProject(projeto1)
        case 4: 
        case 5: contribuitor1().pointRegister(1, 10)
        case 6: 
        case 7: 
        case 8: 
        case 9: 
    }
}