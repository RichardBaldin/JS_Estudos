
//função impura, pois possui uma dependência externa por depender da função alaeatória
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(5,6))
console.log(gerarNumeroAleatorio(5,10))
console.log(gerarNumeroAleatorio(5,15))
console.log(gerarNumeroAleatorio(0,5))