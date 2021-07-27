
const letrasAninhadas = [
    ['O', 'l', 'a'],
    [' '],
    ['M', 'u', 'n', 'd', 'o'],
    ['!', '!', '!', '!'],
]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letras
    .map(l => l.toUpperCase())
    .reduce((a, b) => a +b)

console.log(resultado)