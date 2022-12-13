/* 

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:
- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
    {
        name: "Carlos",
        firstGrade: 7,
        secondGrade: 8
    }, 
    {
        name: "Eduarda",
        firstGrade: 5,
        secondGrade: 4
    },
    {
        name: "Felipe",
        firstGrade: 3.2,
        secondGrade: 7
    },
    {
        name: "Mariana",
        firstGrade: 8.5,
        secondGrade: 10
    }
]

function average(firstGrade, secondGrade) {
    return (firstGrade + secondGrade) / 2
}

let passingGrade = average >= 7

for (let student of students) {
    if (passingGrade) {
        alert(`
            A média das notas do(a) aluno(a) ${student.name} foi de ${average(student.firstGrade, student.secondGrade)}
            Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
        `)
    } else {
        alert(`
            A média das notas do(a) aluno(a) ${student.name} foi de ${average(student.firstGrade, student.secondGrade)}
            Não foi dessa vez ${student.name}, continue tentantado!
            `)
    }
}
