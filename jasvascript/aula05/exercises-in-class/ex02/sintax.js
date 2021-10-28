/*
    Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) 
*/


var students = []
    
const addStudents = student => {

    students.push(student)
}

addStudents({
    nome: 'Victor',
    idade: 23
})

addStudents({
    nome: 'João',
    idade: 30
})
    

console.log(students)

const findStudents = (wantedStudent) => {
    aluno = students.find(student => student.nome.toLowerCase() === wantedStudent)
    console.log(aluno)
}

findStudents('victor')



