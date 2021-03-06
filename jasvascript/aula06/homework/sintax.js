/*
    Hard Homework
*/

//Variaveis
const MENSAGEM_DE_ERRO_NOME = "É preciso informar um nome para o valor em questão";
const MENSAGEM_DE_ERRO_NÚMERO = "É preciso informar um número para o valor em questão";
var code = 0;
var id = 0;
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

class Colaborador {
    id = 0;
    name = '';
    clocking = [];
    projectCode = 0;

    constructor(name) {
        this.name = name;
        this.id = id += 1;
        this.projectCode = 0;
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
    console.log(arrayOfContributors)
    alert(`Colaborador ${name} cadastrado com sucesso`)
}

const marcaPonto = (contribuitor, day, hour) => {
    thisContribuitor = arrayOfContributors.find(c => c.name === contribuitor);
    thisContribuitor.pointRegister(day, hour);
    console.log(thisContribuitor);
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
    alert(`Projeto ${title} cadastrado com sucesso`)

}

const allocateContribuitorsOnProject = (contribuitor, project) => {

    let findContribuitor = arrayOfContributors.find(c => c.name === contribuitor);
    let findProject = arrayOfProjects.find(p => p.title === project);
    findProject.allocatedContribuitors.push(findContribuitor);
    findContribuitor.projectCode = findProject.code;
    console.log(arrayOfProjects);
    console.log(arrayOfContributors);

    alert(`O contribuior ${contribuitor} foi alocado ao projeto ${project}`);
}

const dislocateCollaborator = (project, contribuitor) => {
    let findProject = arrayOfProjects.find(p => p.title === project);
    let index = findProject.allocatedContribuitors.indexOf(contribuitor);
    let findContribuitor = findProject.allocatedContribuitors.find(c => c.name === contribuitor);
    findContribuitor.projectCode = 0;
    findProject.allocatedContribuitors.splice(index, 1);

    alert(`O contribuior ${contribuitor} foi removido do projeto ${project}`);
}

const showMenu = () => {
    var menu = prompt('Escolha um número com base no menu a seguir:\n 1- Cadastrar colaborador, \n 2- Cadastrar projeto \n 3-Alocar colaborador \n 4- Desalocar colaborador, \n 5- Marcar ponto, \n 6- Ver lista de colaboradores sem projeto, \n 7- Ver lista de projetos sem colaboradores, \n 8- Ver lista de colaboradores que ainda não marcaram o ponto, \n 9- Encerrar execução do sistema ');


    switch (menu) {
        case '1':
            let nome = prompt('Qual nome do colaborador que deseja cadastrar ?');
            contribuitorRegister(nome);
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
            showMenu();
            break;
        case '5':
            let nomeDoColaborador = prompt('Digite o nome do colaborador que deseja marcar ponto');
            let day = prompt('Digite o dia da marcação de ponto');
            let hour = prompt('Digite a hora da marcação de ponto');
            marcaPonto(nomeDoColaborador, day, hour);
            showMenu();
            break;
        case '6':
            let arrayOfContribuitorsWithoutProject = arrayOfContributors.filter(c => c.projectCode === 0);
            console.log(arrayOfContribuitorsWithoutProject);
            showMenu();
            break;
        case '7':
            let arrayOfProjectsWithouContribuitors = arrayOfProjects.filter(p => p.allocatedContribuitors.length === 0);
            console.log(arrayOfProjectsWithouContribuitors);
            showMenu();
            break;
        case '8':
            let arrayOfContribuitorsWithoutCloking = arrayOfContributors.filter(c => c.clocking.length === 0);
            console.log(arrayOfContribuitorsWithoutCloking);
            showMenu();
            break;
        case '9': return true
            break;
    }
}

showMenu();
