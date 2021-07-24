
let qtdeDeExecucoes = 0

// Função Pura
function somar (a, b) {
    qtdeDeExecucoes++  //Efeiuto colateral observavel
    return a + b

}
console.log(qtdeDeExecucoes)
console.log(somar(10, 320));
console.log(qtdeDeExecucoes)

