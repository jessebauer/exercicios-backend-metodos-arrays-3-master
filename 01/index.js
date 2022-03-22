// **a)** Ordenar o array abaixo em ordem crescente.


const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

console.log(numeros.sort((a, b) => {
    return a - b
}))


// **b)** Ordenar o array abaixo em ordem decrescente.


// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

console.log(numeros.sort((a, b) => {
    return b - a
}))

// **c)** Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.

console.log(numeros.sort())

// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]


// **d)** Ordenar o array abaixo em ordem alfabética.

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

console.log(frutas.sort((a, b) => {
    return a.localeCompare(b)
}))

// **e)** Ordenar o array abaixo em ordem alfabética decrescente.

console.log(frutas.sort((a, b) => {
    return b.localeCompare(a)
}))

// const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


// **f)** Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

console.log(frutas.sort((a, b) => {
    return a.length - b.length
}))

// const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
