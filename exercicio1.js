

alert('Por favor, selecione dois números para iniciar a aplicação.')

let numberOne = Number(prompt("Digite o primeiro número."))
let numberTwo = Number(prompt("Digite o segundo número."))

let sum = numberOne + numberTwo

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos números é: ${numberOne * numberTwo}`)
alert(`A divisão dos números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos números é: ${numberOne % numberTwo}`)

// Números pares são dividios exatamente por 2, ou seja, o resto da divisão (%) deve ser 0, para que um número seja par:
if (sum % 2 == 0) {
    alert('A soma dos número é par.')
} else {
    alert('A soma dos números é ímpar')
}

if (numberOne === numberTwo) {
    alert("Os dois números são iguais.")
} else {
    alert('Os dois números são diferentes.')
}

