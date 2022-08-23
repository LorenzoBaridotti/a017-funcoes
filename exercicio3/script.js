function somarNumeros(n1, n2) {
    console.log(`${numero} + ${numero1} = ${n1 + n2}`)
}

function subtrairNumeros(n1, n2) {
    console.log(`${numero} - ${numero1} = ${n1 - n2}`)
}

function multiplicarNumeros(n1, n2) {
    console.log(`${numero} * ${numero1} = ${n1 * n2}`)
}

function dividirNumeros(n1, n2) {
    console.log(`${numero} / ${numero1} = ${n1 / n2}`)
}

const numero = +prompt('Digite um numero.')
const numero1 = +prompt('Digite outro numero.')

somarNumeros(numero, numero1)
subtrairNumeros(numero, numero1)
multiplicarNumeros(numero, numero1)
dividirNumeros(numero, numero1)

//OUTRA MANEIRA DE FAZER

/*const somarNumeros = (a, b) => a + b
const subtrairNumeros = (a, b) => a - b
const multiplicarNumeros = (a, b) => a * b
const dividirNumeros = (a, b) => a / b

const numero = +prompt('Digite um numero.')
const numero1 = +prompt('Digite outro numero.')

console.log(somarNumeros(numero, numero1))
console.log(subtrairNumeros(numero, numero1))
console.log(multiplicarNumeros(numero, numero1))
console.log(dividirNumeros(numero, numero1))*/
