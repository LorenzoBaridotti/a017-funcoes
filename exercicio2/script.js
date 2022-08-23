function somarNumeros(n1, n2) {
    return n1 + n2
}

const retorno = somarNumeros(15, 21)

console.log(retorno)

//-----------------------------------------------------------------------------

function booleanNumeros(n1, n2) {
    return n1 >= n2
}

const retorno1 = booleanNumeros(15, 21)

console.log(retorno1)

//-----------------------------------------------------------------------------

const par = +prompt('Digite um numero para ver se é par.')

function retornarPar() {
    return par % 2 === 0

}


console.log(`${par} é par? ${retornarPar()}`)

//-----------------------------------------------------------------------------

const string = prompt('Digite uma palavra')

function retornarString() {

    return string.length

}


console.log(`${string.toLocaleUpperCase()} contem ${retornarString()} letras`)