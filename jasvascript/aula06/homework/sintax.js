/*
    Hard Homework
*/

//Variaveis
const MENSAGEM_DE_ERRO_NOME = "É preciso informar um nome para o valor em questão";
const MENSAGEM_DE_ERRO_NÚMERO = "É preciso informar um número para o valor em questão";
var code = 0
var id = 0
var arrayOfContributors = [];
var arrayOfProjects = [];

//Validações

class Validations {
    isNumber = (value) => {
        if (typeof value === 'number' && !isNaN(value)) {
            return true;
        } else {
            return false;
        }
    }

    isProjectExists = (value) => {
        if (this.isNumber(value) && arrayOfProjects.indexOf(value) !== -1) {
            return true;
        } else {
            return false;
        }
    }
}
//Criação das classes

class Marcacao {
    day = '';//MENSAGEM_DE_ERRO_NÚMERO;
    hour = '';//MENSAGEM_DE_ERRO_NÚMERO;

    constructor(day, hour) {
        this.day = new Validations().isNumber(day) ? day : this.day;
        this.hour = new Validations().isNumber(hour) ? hour : this.hour;
    }
}

class Colaborador {
    id = 0;
    name = '';
    clocking = [];

    constructor(name) {
        this.name = name;
        this.id = id += 1
    }

    registrarContribuidor = () => {
        contribuitorRegister();
    }

    pointRegister = (d, h) => {
        this.clocking.push({
            day: d,
            hour: h
        })
    }
}

const contribuitorRegister = (name) => {
    let contribuitor = new Colaborador(name);
    if (arrayOfContributors.indexOf(contribuitor.id) === -1) {
        arrayOfContributors.push(contribuitor);
        
    }
}

class Project {
    code = null; //MENSAGEM_DE_ERRO_NUMERO
    title = '';//MENSAGEM_DE_ERRO_NOME
    allocatedContribuitors = [];

    constructor(title) {
        this.title = title;
        this.code = code += 1;
    }

    registroDeProjeto = () => {
        projectRegister();
    }
}

const projectRegister = (title) => {
    let project = new Project(title);

    if (arrayOfProjects.indexOf(project.id) === -1) {
        arrayOfProjects.push(project);
    }
    console.log(arrayOfProjects);
}

const allocateContribuitorsOnProject = (contribuitor, project) => {
    
    let findContribuitor = arrayOfContributors.find(c => c.name === contribuitor);
    let findProject = arrayOfProjects.find(p => p.title === project);
    findProject.allocatedContribuitors.push(findContribuitor);
    console.log(arrayOfProjects);
}

const dislocateCollaborator = (project, contribuitor) =>{
    let findProject = arrayOfProjects.find(p => p.title === project);
    let index = findProject.allocatedContribuitors.indexOf(contribuitor);
    findProject.allocatedContribuitors.splice(index, 1);
}

const showMenu = () => {
    var menu = prompt('Escolha um numero');

    var codeMenu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (codeMenu.indexOf(menu) === -1) {
        alert('Você deve inserir um dos números do menu para continuar ou escolha a opção 9 para sair do sistema');

    } else {

        switch (menu) {
            case '1': 
                let nome = prompt('Qual nome do colaborador que deseja cadastrar ?');
                contribuitorRegister(nome);
                console.log(arrayOfContributors);
                showMenu();
            break;
            case '2':
                let nomeDoProjeto = prompt('Qual nome do projeto que desejas cadastrar?');
                projectRegister(nomeDoProjeto);
                showMenu();
                break;
            case '3':
                let contribuitor = prompt('Digite um colaborador');
                let project = prompt(`Digite o nome do projeto que você deseja alocar ${contribuitor}`);
                allocateContribuitorsOnProject(contribuitor, project);
                showMenu();
                break;
            case '4': 
                let nomeProjeto = prompt('Nome do projeto');
                let empregado = prompt('Nome do empregado');
                dislocateCollaborator(nomeProjeto, empregado);
            return
        }
    }
}
showMenu()